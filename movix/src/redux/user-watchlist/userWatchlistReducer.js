import WatchlistActionTypes from './userWatchlistTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getWatchlistMovies = (state = initialState, action) => {
  switch (action.type) {
    case WatchlistActionTypes.FETCH_WATCHLIST_START:
      return {
        ...state,
        loading: true,
      };
    case WatchlistActionTypes.FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case WatchlistActionTypes.FETCH_WATCHLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getWatchlistMovies;
