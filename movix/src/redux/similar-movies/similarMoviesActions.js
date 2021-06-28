import axios from 'axios';

import SimilarActionTypes from './similarMoviesTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: SimilarActionTypes.FETCH_SIMILAR_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: SimilarActionTypes.FETCH_SIMILAR_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: SimilarActionTypes.FETCH_SIMILAR_FAILURE,
    payload: error,
  };
};

export const fetchSimilarMovies = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`
      )
      .then((res) => {
        const similarMovies = res.data;
        dispatch(fecthMoviesSuccess(similarMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
