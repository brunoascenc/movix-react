import axios from "axios";

import {
  GET_SIMILAR_MOVIES,
  GET_MOVIES_REQUEST,
  GET_MOVIES_FAILURE,
} from "./types";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: GET_MOVIES_REQUEST,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: GET_SIMILAR_MOVIES,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: GET_MOVIES_FAILURE,
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
