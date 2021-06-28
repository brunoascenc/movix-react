import axios from 'axios';

import FilterActionTypes from './filterMovieTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: FilterActionTypes.FETCH_FILTER_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: FilterActionTypes.FETCH_FILTER_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FilterActionTypes.FETCH_FILTER_FAILURE,
    payload: error,
  };
};

export const fetchFilterResults = (genreId, optionFilter, pageNumber) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=${optionFilter}&vote_count.gte=100&page=${pageNumber}`
      )
      .then((res) => {
        const filterResults = res.data;
        dispatch(fecthMoviesSuccess(filterResults));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
