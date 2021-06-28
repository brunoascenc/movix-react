import axios from 'axios';

import SimilarActionTypes from './similarMoviesTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchSimilarRequest = () => {
  return {
    type: SimilarActionTypes.FETCH_SIMILAR_START,
  };
};

export const fecthSimilarSuccess = (movies) => {
  return {
    type: SimilarActionTypes.FETCH_SIMILAR_SUCCESS,
    payload: movies,
  };
};

export const fetchSimilarFailure = (error) => {
  return {
    type: SimilarActionTypes.FETCH_SIMILAR_FAILURE,
    payload: error,
  };
};

export const fetchSimilarMovies = (movieId) => {
  return (dispatch) => {
    dispatch(fetchSimilarRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`
      )
      .then((res) => {
        const similarMovies = res.data;
        dispatch(fecthSimilarSuccess(similarMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchSimilarFailure(error));
      });
  };
};
