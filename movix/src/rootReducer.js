import { combineReducers } from "redux";
import movieReducer from "./reducers/movieReducers";
import upcomingMovieReducer from "./reducers/upcomingMovieReducers";
import movieDetail from "./reducers/detailReducer";
import similarMoviesReducer from "./reducers/similarMoviesReducer";
import movieTrailerRedeucer from "./reducers/movieTrailerReducer";
import movieReviewReducer from "./reducers/movieReviewReducer";
import searchMoviesReducer from "./reducers/searchMoviesReducer";
import filterMoviesReducer from "./reducers/filterMoviesReducer";
import nowPlayingReducer from "./reducers/nowPlayingReducer";
import genreReducer from "./reducers/genreReducer";

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
