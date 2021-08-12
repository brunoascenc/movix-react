import axios from 'axios';

import MovieCastTypes from './movieActionTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchCastRequest = () => {
  return {
    type: MovieCastTypes.FETCH_CAST_START,
  };
};

export const fecthCastSuccess = (movies) => {
  return {
    type: MovieCastTypes.FETCH_CAST_SUCCESS,
    payload: movies,
  };
};

export const fetchCastFailure = (error) => {
  return {
    type: MovieCastTypes.FETCH_CAST_FAILURE,
    payload: error,
  };
};

export const fetchCastDetail = (movieId) => {
  return (dispatch) => {
    dispatch(fetchCastRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        const cast = res;
        console.log(cast);
        dispatch(fecthCastSuccess(cast));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchCastFailure(error));
      });
  };
};
