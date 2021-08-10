import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import Empty from '../EmptyList/Empty';
import { FavoriteContainer, ListCard, FavoriteSection } from './FavoriteStyles';
import MoviePoster from '../MoviePoster/MoviePoster';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const FavoriteMovies = ({ userId, fetchFavoriteMovies }) => {
  const favorites = useSelector((state) => state.userFavorites.results);

  useEffect(() => {
    fetchFavoriteMovies(userId.sessionId);
  }, [userId.sessionId, fetchFavoriteMovies]);

  return (
    <FavoriteSection>
      <h2 className="section-title">Favorite Movies</h2>
      <FavoriteContainer>
        {favorites.length === 0 ? (
          <Empty />
        ) : (
          favorites &&
          favorites.map((movie) => {
            return (
              <div key={movie.id}>
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <ListCard key={movie.id}>
                    <MoviePoster
                      url={IMAGE_URL + movie.poster_path}
                      title={movie.title}
                      movieId={movie.id}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                  </ListCard>
                </Link>
                {/* <button
                onClick={() => removeFromFavorite(userId.sessionId, movie.id)}
              >
                <TiDeleteOutline />
              </button> */}
              </div>
            );
          })
        )}
      </FavoriteContainer>
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
