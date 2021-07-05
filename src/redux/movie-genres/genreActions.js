import axios from 'axios';

import GenreActionTypes from './genreActionTypes';
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchGenresRequest = () => {
  return {
    type: GenreActionTypes.FETCH_GENRES_START,
  };
};

export const fecthGenresSuccess = (genres) => {
  return {
    type: GenreActionTypes.FETCH_GENRES_SUCCESS,
    payload: genres,
  };
};

export const fetchGenresFailure = (error) => {
  return {
    type: GenreActionTypes.FETCH_GENRES_FAILURE,
    payload: error,
  };
};

export const fetchGenres = () => {
  return (dispatch) => {
    dispatch(fetchGenresRequest);
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then((res) => {
        const genreList = res.data;
        dispatch(fecthGenresSuccess(genreList));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchGenresFailure(error));
      });
  };
};
