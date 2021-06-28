import axios from 'axios';

import SearchActionTypes from './searchMoviesTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_FAILURE,
    payload: error,
  };
};

export const fetchSearchResults = (searchQuery) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      )
      .then((res) => {
        const searchResults = res.data;
        dispatch(fecthMoviesSuccess(searchResults));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
