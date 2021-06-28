import axios from 'axios';

import NowPlayingActionTypes from './nowPlayingTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchMoviesRequest = () => {
  return {
    type: NowPlayingActionTypes.FETCH_NOWPLAYING_START,
  };
};

export const fecthMoviesSuccess = (movies) => {
  return {
    type: NowPlayingActionTypes.FETCH_NOWPLAYING_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: NowPlayingActionTypes.FETCH_NOWPLAYING_FAILURE,
    payload: error,
  };
};

export const fetchNowPlaying = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const nowPlaying = res.data;
        dispatch(fecthMoviesSuccess(nowPlaying));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchMoviesFailure(error));
      });
  };
};
