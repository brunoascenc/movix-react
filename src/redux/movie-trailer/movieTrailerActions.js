import axios from 'axios';

import TrailerActionTypes from './movieTrailerTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchTrailerRequest = () => {
  return {
    type: TrailerActionTypes.FETCH_TRAILER_START,
  };
};

export const fecthTrailerSuccess = (movies) => {
  return {
    type: TrailerActionTypes.FETCH_TRAILER_SUCCESS,
    payload: movies,
  };
};

export const fetchTrailerFailure = (error) => {
  return {
    type: TrailerActionTypes.FETCH_TRAILER_FAILURE,
    payload: error,
  };
};

export const fetchMovieTrailer = (movieId) => {
  return (dispatch) => {
    dispatch(fetchTrailerRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
      )
      .then((res) => {
        const movieTrailer = res.data;
        dispatch(fecthTrailerSuccess(movieTrailer.results));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchTrailerFailure(error));
      });
  };
};
