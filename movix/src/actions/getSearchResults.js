import axios from "axios";

import {
  GET_MOVIES_REQUEST,
  GET_SEARCH_RESULTS,
  GET_MOVIES_FAILURE,
} from "./types";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: GET_MOVIES_REQUEST
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: GET_SEARCH_RESULTS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: GET_MOVIES_FAILURE,
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
