import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const MovieReviews = ({movieId}) => {
  const [movieReviews, setMovieReviews] = useState([]);

  // const getMovieReview = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  //     )
  //     .then((res) => {
  //       const response = res.data;
  //       setMovieReviews(response.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


  useEffect(() => {
    axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
    .then((res) => {
      const response = res.data;
      setMovieReviews(response.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [movieId]);

  return (
    <div>
      {movieReviews.length === 0 ? "This movie has no reviews yet :(" :
        movieReviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>By: {review.author}</h3>
              <p>{review.content}</p>
              <a href={review.url}>official review</a>
            </div>
          );
        })}
    </div>
  );
};

export default MovieReviews;
