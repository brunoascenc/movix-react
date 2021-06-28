// import {
//   GET_POPULAR_MOVIES,
//   GET_MOVIES_REQUEST,
//   GET_MOVIES_FAILURE,
// } from '../types';
import PopularActionTypes from './popularMoviesTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getPopularMovies = (state = initialState, action) => {
  switch (action.type) {
    case PopularActionTypes.FETCH_POPULAR_START:
      return {
        ...state,
        loading: true,
      };
    case PopularActionTypes.FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case PopularActionTypes.FETCH_POPULAR_FAILURE:
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
