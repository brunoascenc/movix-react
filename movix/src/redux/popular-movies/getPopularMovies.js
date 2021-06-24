import axios from 'axios';

import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_REQUEST,
  GET_MOVIES_FAILURE,
} from '../types';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: GET_MOVIES_REQUEST,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: GET_POPULAR_MOVIES,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: GET_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchPopularMovies = (pageNumber) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`
      )
      .then((res) => {
        const popularMovies = res.data;
        dispatch(fecthMoviesSuccess(popularMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
