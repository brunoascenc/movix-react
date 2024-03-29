import axios from 'axios';
import WatchlistActionTypes from './userWatchlistTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchWatchlistRequest = () => {
  return {
    type: WatchlistActionTypes.FETCH_WATCHLIST_START,
  };
};

export const fecthWatchlistSuccess = (movies) => {
  return {
    type: WatchlistActionTypes.FETCH_WATCHLIST_SUCCESS,
    payload: movies,
  };
};

export const fetchWatchlistFailure = (error) => {
  return {
    type: WatchlistActionTypes.FETCH_WATCHLIST_FAILURE,
    payload: error,
  };
};

export const fetchWatchlistMovies = (id, order, currentPage) => {
  return (dispatch) => {
    dispatch(fetchWatchlistRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=${API_KEY}&language=en-US&session_id=${id}&language=en-US&sort_by=created_at.${order}&page=${currentPage}`
      )
      .then((res) => {
        const watchlistMovies = res.data;
        dispatch(fecthWatchlistSuccess(watchlistMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchWatchlistFailure(error));
      });
  };
};
