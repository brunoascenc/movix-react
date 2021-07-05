import SimilarActionTypes from './similarMoviesTypes';

const initialState = {
  results: [],
  error: '',
};

const getSimilarMovies = (state = initialState, action) => {
  switch (action.type) {
    case SimilarActionTypes.FETCH_SIMILAR_START:
      return {
        ...state,
      };
    case SimilarActionTypes.FETCH_SIMILAR_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case SimilarActionTypes.FETCH_SIMILAR_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getSimilarMovies;
