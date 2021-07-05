import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MoviesCard = ({ movies, genreName }) => {
  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-item">
              <Link to={`/details/${movie.id}`}>
                <div className="img-container">
                  <img
                    className="movie-poster"
                    src={IMAGE_URL + movie.poster_path}
                    alt={IMAGE_URL}
                    data-movie-id={movie.id}
                  />
                </div>
              </Link>
              <span className="movie-title">{movie.title}</span>
              <span className="movie-genres">{genreName(movie)}</span>
              <div className="movie-rating">
                <i className="far fa-star"></i>
                <p>{movie.vote_average.toFixed(1)}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default MoviesCard;
