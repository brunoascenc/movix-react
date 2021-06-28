import { combineReducers } from 'redux';
import movieReducer from './popular-movies/popularMoviesReducer';
import upcomingMovieReducer from './upcoming-movies/upcomingMovieReducers';
import movieDetail from './movie-details/detailReducer';
import similarMoviesReducer from './similar-movies/similarMoviesReducer';
import movieTrailerRedeucer from './movie-trailer/movieTrailerReducer';
import movieReviewReducer from './movie-reviews/movieReviewReducer';
import searchMoviesReducer from './movies-search/searchMoviesReducer';
import filterMoviesReducer from './movies-filter/filterMoviesReducer';
import nowPlayingReducer from './movie-playing/nowPlayingReducer';
import genreReducer from './movie-genres/genreReducer';

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
});

export default rootReducer;
