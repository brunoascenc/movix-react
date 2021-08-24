import axios from 'axios';

import PopularActionTypes from './popularMoviesTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchPopularRequest = () => {
  return {
    type: PopularActionTypes.FETCH_POPULAR_START,
  };
};

export const fecthPopularSuccess = (movies) => {
  return {
    type: PopularActionTypes.FETCH_POPULAR_SUCCESS,
    payload: movies,
  };
};

export const fetchPopularFailure = (error) => {
  return {
    type: PopularActionTypes.FETCH_POPULAR_FAILURE,
    payload: error,
  };
};

export const fetchPopularMovies = (pageNumber) => {
  return (dispatch) => {
    dispatch(fetchPopularRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`
      )
      .then((res) => {
        const popularMovies = res.data;
        dispatch(fecthPopularSuccess(popularMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchPopularFailure(error));
      });
  };
};
