import React, { useState, useEffect } from "react";
import axios from "axios";
// import Header from "../Header/Header";
import MovieDetails from "./MovieDetails";
import SimilarMovies from "./SimilarMovies";
import MovieReviews from "./MovieReviews";
import MovieTrailer from "./MovieTrailer";
import "../../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const Details = (props) => {
  const [movieDetail, setMovieDetail] = useState([]);

  const [bannerImg, setBannerImg] = useState([]);

  const genres = movieDetail.genres;
  let genreOptions;
  if (genres) {
    genreOptions = genres.map((genre) => genre.name).join(", ");
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`
      )
      .then((res) => {
        const response = res.data;
        setMovieDetail(response);
        setBannerImg(response.backdrop_path);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

    //Mark as favorite
    const addFavoriteList = () => {
      fetch(
        `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem("session_id")}`, 
        {
          method: "POST",
          body: JSON.stringify({
            media_type: "movie",
            media_id: `${props.match.params.id}`,
            favorite: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    }

    const addWatchList = () => {
      fetch(
        `https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem("session_id")}`, 
        {
          method: "POST",
          body: JSON.stringify({
            media_type: "movie",
            media_id: `${props.match.params.id}`,
            watchlist: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    }

  return (
    <>
      <div
        id="movie-banner"
        style={{
          backgroundImage: `url('${
            "https://image.tmdb.org/t/p/original" + bannerImg
          }')`,
        }}
      >
        {/* <Header /> */}
        <div className="movie-video">
          <MovieTrailer movieId={props.match.params.id} />
        </div>
      </div>

      <div className="about-movie container">
        <MovieDetails addWatchList={addWatchList} addMovie={addFavoriteList} movieDetail={movieDetail} genres={genreOptions} />
      </div>

      <div className="similar-section container">
        <div className="title-section">
          <span></span>
          <h1>Similar Movies</h1>
        </div>
      </div>

      <div className="similar-movies container">
        <SimilarMovies movieId={props.match.params.id} />
      </div>

      <div className="reviews-section container">
        <div className="title-section">
          <span></span>
          <h1>Reviews</h1>
        </div>
        <div className="movie-reviews">
          <MovieReviews movieId={props.match.params.id} />
        </div>
      </div>
    </>
  );
};

export default Details;
