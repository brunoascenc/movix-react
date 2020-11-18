import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const Details = (props) => {
  const [movieDetail, setMovieDetail] = useState([])
  const getDetails = () => {
    axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`
    )
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  useEffect(() =>{
    getDetails()
  },[])

  return (
    <div>
      <button>aaaaaaaaaaaaaaa</button>
      <div id="movie-banner">
        <header className="details-header">
          <a href="index.html">
            <h1>Movix</h1>
          </a>
          <div className="back-home">
            <a href="/#">Back to home</a>
          </div>
        </header>
        <div className="movie-trailer"></div>
      </div>

      <div className="about-movie">
        <div id="movie-detail"></div>
      </div>
    </div>
  );
};

export default Details