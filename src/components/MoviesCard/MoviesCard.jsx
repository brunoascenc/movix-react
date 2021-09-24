import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieCardContainer } from './MoviesCardStyles';
import MoviePoster from '../MoviePoster/MoviePoster';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import MoviesSkeleton from '../MoviesSkeleton/MoviesSkeleton';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MoviesCard = ({ movies, loading }) => {
  return (
    <MovieCardContainer>
      {loading ? (
        <FullPageLoader />
      ) : (
        movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <NavLink to={`/details/${movie.id}`} key={movie.id}>
                <MoviePoster
                  url={IMAGE_URL + movie.poster_path}
                  title={movie.title}
                  movieId={movie.id}
                  resultsCard
                  // loading={loading}
                />
              </NavLink>
            </div>
          );
        })
      )}
    </MovieCardContainer>
  );
};

export default MoviesCard;
