import axios from 'axios';

import SearchActionTypes from './searchMoviesTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchSearchRequest = () => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_START,
  };
};

export const fecthSearchSuccess = (movies) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
    payload: movies,
  };
};

export const fetchSearchFailure = (error) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_FAILURE,
    payload: error,
  };
};

export const fetchSearchResults = (searchQuery, pageNumber) => {
  return (dispatch) => {
    dispatch(fetchSearchRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${pageNumber}`
      )
      .then((res) => {
        const searchResults = res.data;
        dispatch(fecthSearchSuccess(searchResults));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchSearchFailure(error));
      });
  };
};
