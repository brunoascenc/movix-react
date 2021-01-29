import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import { Link } from "react-router-dom";
import GenreList from "../Genres/GenreList";
import "../../App.css";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const PopularMovies = () => {
  const value = useContext(DataContext);
  const [genreName] = GenreList();
  const [scrollTop] = value.scrollTop;
  const [popular] = value.popular;
  const [nextPage] = value.nextPageBtn;
  const [prevPage] = value.prevPageBtn;
  const popularMovie = popular.results;

  return (
    <div className="container" ref={scrollTop}>
      <div className="title-section">
        <span></span>
        <h1>Popular Movies </h1>
      </div>
      <div id="movies-container">
        {popularMovie &&
          popularMovie.map((movie) => {
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
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="pagination-btn">
        <button onClick={prevPage} className="filter-prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextPage} className="filter-next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;
