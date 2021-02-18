import React, { useState, useEffect } from "react";
import axios from "axios";

import {useSelector, useDispatch} from 'react-redux'
import {fetchMovieReviews} from '../../../actions/getMovieReviews'
// import "../../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const MovieReviews = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = useState([]);

  const reviews = useSelector(state => state.movieReview.results)
  // setMovieReviews(reviews.results)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchMovieReviews(movieId))
  },[movieId, dispatch])

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

  const noReviews = () => {
    return (
      <div className="no-reviews">
        <p>
          Nothing Found <i className="far fa-sad-tear"></i>
        </p>
      </div>
    );
  };

  return (
    <div>
      {movieReviews.length === 0
        ? noReviews()
        : movieReviews.map((review) => {
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
