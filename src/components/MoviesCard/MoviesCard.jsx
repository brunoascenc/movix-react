import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieCardContainer } from './MoviesCardStyles';
import MoviePoster from '../MoviePoster/MoviePoster';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MoviesCard = ({ movies }) => {
  return (
    <MovieCardContainer>
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <NavLink to={`/details/${movie.id}`} key={movie.id}>
                <MoviePoster
                  url={IMAGE_URL + movie.poster_path}
                  title={movie.title}
                  movieId={movie.id}
                  resultsCard
                />
              </NavLink>
            </div>
          );
        })}
    </MovieCardContainer>
  );
};

export default MoviesCard;
