import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchHeader from "./SearchHeader";

import "../../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SearchResults = (props) => {
  const [filterResults, setFilterResults] = useState([]);
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=${optionFilter}&vote_count.gte=100`
      )
      .then((res) => {
        const response = res.data;
        setFilterResults(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genreId, optionFilter]);

  const handleImgErr = (e) => {
    e.target.style.display = "none";
  };

  return (
    <div className="search-results">
      <SearchHeader />
      <div className="container">
        <div className="title-section">
          <span></span>
          <h1>
            You searched for
          </h1>
        </div>
        <div id="movies-container">
          {filterResults &&
            filterResults.map((movie) => {
              return (
                <div key={movie.id} className="movie-item">
                  <Link to={`/details/${movie.id}`}>
                    <div className="img-container">
                      <img
                        onError={handleImgErr}
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
    </div>
  );
};

export default SearchResults;
