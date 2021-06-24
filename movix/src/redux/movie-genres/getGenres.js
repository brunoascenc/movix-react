import axios from 'axios';

import {
  GET_GENRE_RESULTS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_FAILURE,
} from '../types';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: GET_MOVIES_REQUEST,
  };
};

export const fecthMoviesSuccess = (genres) => {
  return {
    type: GET_GENRE_RESULTS,
    payload: genres,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: GET_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchGenres = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then((res) => {
        const genreList = res.data;
        dispatch(fecthMoviesSuccess(genreList));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
