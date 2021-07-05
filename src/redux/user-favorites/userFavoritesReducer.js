import FavoritesActionTypes from './userFavoritesTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getPopularMovies = (state = initialState, action) => {
  switch (action.type) {
    case FavoritesActionTypes.FETCH_FAVORITES_START:
      return {
        ...state,
        loading: true,
      };
    case FavoritesActionTypes.FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case FavoritesActionTypes.FETCH_FAVORITES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getPopularMovies;
