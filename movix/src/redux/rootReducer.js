import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import movieReducer from './popular-movies/popularMoviesReducer';
import upcomingMovieReducer from './upcoming-movies/upcomingMovieReducers';
import movieDetail from './movie-details/detailReducer';
import similarMoviesReducer from './similar-movies/similarMoviesReducer';
import movieTrailerRedeucer from './movie-trailer/movieTrailerReducer';
import movieReviewReducer from './movie-reviews/movieReviewReducer';
import searchMoviesReducer from './movies-search/searchMoviesReducer';
import filterMoviesReducer from './movies-filter/filterMoviesReducer';
import nowPlayingReducer from './movie-playing/nowPlayingReducer';
import userToken from './user/userReducer';
import genreReducer from './movie-genres/genreReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  popularMovie: movieReducer,
  upcomingMovies: upcomingMovieReducer,
  movieDetail: movieDetail,
  similarMovies: similarMoviesReducer,
  movieTrailer: movieTrailerRedeucer,
  movieReview: movieReviewReducer,
  searchResults: searchMoviesReducer,
  filterResults: filterMoviesReducer,
  nowPlaying: nowPlayingReducer,
  genreList: genreReducer,
  auth: userToken,
});

export default persistReducer(persistConfig, rootReducer);
