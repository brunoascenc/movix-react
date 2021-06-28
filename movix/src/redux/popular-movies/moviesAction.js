import axios from 'axios';

// import {
//   GET_POPULAR_MOVIES,
//   GET_MOVIES_REQUEST,
//   GET_MOVIES_FAILURE,
// } from '../types';

import PopularActionTypes from './popularMoviesTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: PopularActionTypes.FETCH_POPULAR_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: PopularActionTypes.FETCH_POPULAR_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: PopularActionTypes.FETCH_POPULAR_FAILURE,
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
