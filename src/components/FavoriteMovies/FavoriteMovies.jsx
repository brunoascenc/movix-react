import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import Empty from '../EmptyList/Empty';
import {
  FavoriteContainer,
  ListCard,
  FavoriteSection,
  FavoriteHeader,
  Select,
  Filter,
  Button,
} from './FavoriteStyles';
import MoviePoster from '../MoviePoster/MoviePoster';
import { AiOutlineDelete } from 'react-icons/ai';
import { removeFromFavorite } from '../../redux/user-favorites/favoritesUtils';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const FavoriteMovies = ({ userId, fetchFavoriteMovies }) => {
  const favorites = useSelector((state) => state.userFavorites.results);
  const favoriteMovies = favorites.results;

  useEffect(() => {
    fetchFavoriteMovies(userId.sessionId);
  }, [userId.sessionId, fetchFavoriteMovies]);

  return (
    <FavoriteSection>
      <FavoriteHeader>
        <h2 className="section-title">My Favorite Movies</h2>
        <Filter>
          <h4>Sort by: </h4>
          <Select>
            <option value=""> Ascending </option>
            <option value=""> Descending </option>
          </Select>
        </Filter>
      </FavoriteHeader>
      <FavoriteContainer>
        {favoriteMovies && favoriteMovies.length === 0 ? (
          <Empty />
        ) : (
          favoriteMovies &&
          favoriteMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <ListCard key={movie.id}>
                    <div className="poster-card">
                      <MoviePoster
                        url={IMAGE_URL + movie.poster_path}
                        title={movie.title}
                        movieId={movie.id}
                        data-movie-id={movie.id}
                        alt={movie.title}
                      />
                    </div>
                  </ListCard>
                </Link>
                <Button
                  onClick={() => removeFromFavorite(userId.sessionId, movie.id)}
                >
                  Remove <AiOutlineDelete className="delete-icon" />
                </Button>
              </div>
            );
          })
        )}
      </FavoriteContainer>
      <span>Total: {favorites.total_results}</span>
    </FavoriteSection>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
});

const mapDipatchToProps = (dispatch) => ({
  fetchFavoriteMovies: (id) => dispatch(fetchFavoriteMovies(id)),
});

export default connect(mapStateToProps, mapDipatchToProps)(FavoriteMovies);
