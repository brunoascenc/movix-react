import axios from 'axios';
import ReviewsActionTypes from './movieReviewsTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: ReviewsActionTypes.FETCH_REVIEWS_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE,
    payload: error,
  };
};

export const fetchMovieReviews = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      )
      .then((res) => {
        const reviews = res.data;
        dispatch(fecthMoviesSuccess(reviews));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
