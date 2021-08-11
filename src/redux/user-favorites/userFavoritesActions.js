import axios from 'axios';
import FavoritesActionTypes from './userFavoritesTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchFavoritesRequest = () => {
  return {
    type: FavoritesActionTypes.FETCH_FAVORITES_START,
  };
};

export const fecthFavoritesSuccess = (movies) => {
  return {
    type: FavoritesActionTypes.FETCH_FAVORITES_SUCCESS,
    payload: movies,
  };
};

export const fetchFavoritesFailure = (error) => {
  return {
    type: FavoritesActionTypes.FETCH_FAVORITES_FAILURE,
    payload: error,
  };
};

export const fetchFavoriteMovies = (id) => {
  return (dispatch) => {
    dispatch(fetchFavoritesRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${API_KEY}&language=en-US&session_id=${id}&language=en-US&sort_by=created_at.desc&page=1`
      )
      .then((res) => {
        const favoriteMovies = res.data;
        dispatch(fecthFavoritesSuccess(favoriteMovies.results));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchFavoritesFailure(error));
      });
  };
};
