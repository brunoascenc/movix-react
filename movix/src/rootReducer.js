import {combineReducers} from 'redux'
import movieReducer from './reducers/movieReducers'

const rootReducer = combineReducers({
    popularMovie: movieReducer
})

export default rootReducer