import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieDetails from "./DetailElements/MovieDetails";
import "../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const Details = (props) => {
  const [movieDetail, setMovieDetail] = useState([]);
  
  const getDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`
      )
      .then((res) => {
        const response = res.data;
        setMovieDetail(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div id="movie-banner">
        <header className="details-header">
          <Link to="/">
            <h1>Movix</h1>
          </Link>
          <div className="back-home">
            <a href="/#">Back to home</a>
          </div>
        </header>
        <div className="movie-trailer"></div>
      </div>

      <div className="about-movie container">
        <MovieDetails movieDetail={movieDetail} />
      </div>
    </>
  );
};

export default Details;
