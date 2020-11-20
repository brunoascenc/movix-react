import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieDetails from "./DetailElements/MovieDetails";
import SimilarMovies from './DetailElements/SimilarMovies'
import MovieReviews from './DetailElements/MovieReviews'
import "../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const Details = (props) => {
  const [movieDetail, setMovieDetail] = useState([]);
  //Movie Genres
  const genres = movieDetail.genres;
  let genreOptions;
  if (genres) {
    genreOptions = genres.map((genre) => genre.name).join(", ");
  }

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
  }, [props.match.params.id]);

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
        <MovieDetails movieDetail={movieDetail} genres={genreOptions} />
      </div>

      <div className="similar-section container">
        <div className="title-section">
          <span></span>
          <h1>Similar Movies</h1>
        </div>
        <div className="similar-movies">
          <div className="swiper-container">
            <div className="swiper-wrapper">
                <SimilarMovies movieId={props.match.params.id}/>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-section container">
        <div className="title-section">
          <span></span>
          <h1>Reviews</h1>
        </div>
        <div className="movie-reviews">
        <MovieReviews movieId={props.match.params.id}/>
        </div>
      </div>
    </>
  );
};

export default Details;
