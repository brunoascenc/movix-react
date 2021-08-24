import axios from 'axios';
import UpcomingActionTypes from './upcomingTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchUpcomingRequest = () => {
  return {
    type: UpcomingActionTypes.FETCH_UPCOMING_START,
  };
};

export const fecthUpcomingSuccess = (movies) => {
  return {
    type: UpcomingActionTypes.FETCH_UPCOMING_SUCCESS,
    payload: movies,
  };
};

export const fetchUpcomingFailure = (error) => {
  return {
    type: UpcomingActionTypes.FETCH_UPCOMING_FAILURE,
    payload: error,
  };
};

export const fetchUpcomingMovies = () => {
  return (dispatch) => {
    dispatch(fetchUpcomingRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=US`
      )
      .then((res) => {
        const upcomingMovies = res.data;
        dispatch(fecthUpcomingSuccess(upcomingMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUpcomingFailure(error));
      });
  };
};
