import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Header from '../HomeHeader/Header'

import "../../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SearchResults = (props) => {
  const [search, setSearch] = useState([]);
  const searchQuery = props.match.params.pathname

  useEffect(() => {
    axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    )
    .then((res) => {
      const response = res.data;
      console.log(response)
      setSearch(response.results);
    })
    .catch((err) => {
      console.log(err);
    });
  },[searchQuery])

  const handleImgErr = (e) => {
      e.target.style.display= 'none'
  }


  return (
    <div className="container">
      <Header/>
      <div className="title-section">
        <span></span>
        <h1>You searched for {searchQuery}</h1>
      </div>
      <div id="movies-container">
         {search &&
          search.map((movie) => {
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
  );
};

export default SearchResults;
