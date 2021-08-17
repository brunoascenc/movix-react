import React from 'react';
import { Link } from 'react-router-dom';
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

const FavoriteMovies = ({ favoriteMovies, userId }) => {
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
              <div className="poster-container" key={movie.id}>
                {/* <ListCard key={movie.id}> */}
                <div className="poster-card">
                  <Link key={movie.id} to={`/details/${movie.id}`}>
                    <MoviePoster
                      url={IMAGE_URL + movie.poster_path}
                      title={movie.title}
                      movieId={movie.id}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                  </Link>
                  <Button
                    onClick={() =>
                      removeFromFavorite(userId.sessionId, movie.id)
                    }
                  >
                    <AiOutlineDelete className="delete-icon" />
                  </Button>
                </div>
                {/* </ListCard> */}
              </div>
            );
          })
        )}
      </FavoriteContainer>
    </FavoriteSection>
  );
};

export default FavoriteMovies;
