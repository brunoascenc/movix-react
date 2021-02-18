import {combineReducers} from 'redux'
// import UpcomingMovies from './components/Home/UpcomingMovies/UpcomingMovies'
import movieReducer from './reducers/movieReducers'
import upcomingMovieReducer from './reducers/upcomingMovieReducers'
import movieDetail from './reducers/detailReducer'
import similarMoviesReducer from './reducers/similarMoviesReducer'
import movieTrailerRedeucer from './reducers/movieTrailerReducer'
import movieReviewReducer from './reducers/movieReviewReducer'

const rootReducer = combineReducers({
    popularMovie: movieReducer,
    upcomingMovies:  upcomingMovieReducer,
    movieDetail: movieDetail,
    similarMovies: similarMoviesReducer,
    movieTrailer: movieTrailerRedeucer,
    movieReview: movieReviewReducer
})

export default rootReducer