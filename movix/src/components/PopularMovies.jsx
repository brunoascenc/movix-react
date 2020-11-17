import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import "../App.css";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const PopularMovies = () => {
  const value = useContext(DataContext);
  const [popular] = value.popular;
  const popularMovie = popular.results;

  return (
    <div className="container">
      <div className="title-section">
        <span></span>
        <h1>Popular Movies</h1>
      </div>
      <div id="movies-container">
        {popularMovie &&
          popularMovie.map((movie) => {
            return (
              <div key={movie.id} className="movie-item">
                <div className="img-container">
                  <img
                    className="movie-poster"
                    src={IMAGE_URL + movie.poster_path}
                    alt={IMAGE_URL}
                    data-movie-id={movie.id}
                  />
                  <div className="details-btn">
                    <button>Details</button>
                  </div>
                </div>
                <span className="movie-title">{movie.title}</span>
                <div className="movie-rating">
                  <i className="far fa-star"></i>
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}


export default PopularMovies