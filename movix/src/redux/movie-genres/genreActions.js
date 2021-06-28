import axios from 'axios';

import GenreActionTypes from './genreActionTypes';
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: GenreActionTypes.FETCH_GENRES_START,
  };
};

export const fecthMoviesSuccess = (genres) => {
  return {
    type: GenreActionTypes.FETCH_GENRES_SUCCESS,
    payload: genres,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: GenreActionTypes.FETCH_GENRES_FAILURE,
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
