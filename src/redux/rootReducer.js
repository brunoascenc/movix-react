import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import movieReducer from './popular-movies/popularMoviesReducer';
import upcomingMovieReducer from './upcoming-movies/upcomingMovieReducers';
import topRatedReducer from './top-rated/topRatedReducer';
import movieDetail from './movie-details/detailReducer';
import searchMoviesReducer from './movies-search/searchMoviesReducer';
import filterMoviesReducer from './movies-filter/filterMoviesReducer';
import nowPlayingReducer from './movie-playing/nowPlayingReducer';
import user from './user-details/userDetailsReducer';
import userFavorites from './user-favorites/userFavoritesReducer';
import userWatchlist from './user-watchlist/userWatchlistReducer';
import sessionId from './user-session/userSessionReducer';
import userToken from './user-token/userTokenReducer';
import genreReducer from './movie-genres/genreReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'sessionId'],
};

const rootReducer = combineReducers({
  popularMovies: movieReducer,
  upcomingMovies: upcomingMovieReducer,
  movieDetail: movieDetail,
  searchResults: searchMoviesReducer,
  filterResults: filterMoviesReducer,
  nowPlaying: nowPlayingReducer,
  genreList: genreReducer,
  auth: userToken,
  sessionId: sessionId,
  user: user,
  userFavorites: userFavorites,
  userWatchlist: userWatchlist,
  topRated: topRatedReducer,
});

export default persistReducer(persistConfig, rootReducer);
