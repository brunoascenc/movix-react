import axios from 'axios';

import DetailsActionTypes from './detailActionTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: DetailsActionTypes.FETCH_DETAILS_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: DetailsActionTypes.FETCH_DETAILS_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: DetailsActionTypes.FETCH_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchMovieDetail = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((res) => {
        const detail = res.data;
        dispatch(fecthMoviesSuccess(detail));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
