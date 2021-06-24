import {
  GET_SIMILAR_MOVIES,
  GET_MOVIES_REQUEST,
  GET_MOVIES_FAILURE,
} from '../types';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getSimilarMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        results: action.payload,
        error: '',
      };
    case GET_MOVIES_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getSimilarMovies;
