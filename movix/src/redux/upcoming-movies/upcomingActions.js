import axios from 'axios';
import UpcomingActionTypes from './upcomingTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: UpcomingActionTypes.FETCH_UPCOMING_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: UpcomingActionTypes.FETCH_UPCOMING_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: UpcomingActionTypes.FETCH_UPCOMING_FAILURE,
    payload: error,
  };
};

export const fetchUpcomingMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=US`
      )
      .then((res) => {
        const upcomingMovies = res.data;
        dispatch(fecthMoviesSuccess(upcomingMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
