import axios from 'axios';
import TopRatedTypes from './topRatedTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchTopRatedRequest = () => {
  return {
    type: TopRatedTypes.FETCH_TOPRATED_START,
  };
};

export const fetchTopRatedSuccess = (movies) => {
  return {
    type: TopRatedTypes.FETCH_TOPRATED_SUCCESS,
    payload: movies,
  };
};

export const fetchTopRatedFailure = (error) => {
  return {
    type: TopRatedTypes.FETCH_TOPRATED_FAILURE,
    payload: error,
  };
};

export const fetchTopRatedMovies = () => {
  return (dispatch) => {
    dispatch(fetchTopRatedRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const topRatedMovies = res.data;
        dispatch(fetchTopRatedSuccess(topRatedMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchTopRatedFailure(error));
      });
  };
};
