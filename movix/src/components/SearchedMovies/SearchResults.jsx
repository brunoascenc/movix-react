import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider"
import { Link } from "react-router-dom";
// import SearchActions from "../../actions/SearchActions";

import "../../App.css";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SearchResults = () => {
  const value = useContext(DataContext);
  const [search] = value.searchResults;

  return (
    <div className="container">
      <div className="title-section">
        <span></span>
        <h1>You searched for:</h1>
      </div>
      <div id="movies-container">

        {search &&
          search.map((movie) => {
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
                    <div className="details-btn">
                      <button>Details</button>
                    </div>
                  </div>
                </Link>
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
};

export default SearchResults;
