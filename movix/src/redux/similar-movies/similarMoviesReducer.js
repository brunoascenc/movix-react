import SimilarActionTypes from './similarMoviesTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getSimilarMovies = (state = initialState, action) => {
  switch (action.type) {
    case SimilarActionTypes.FETCH_SIMILAR_START:
      return {
        ...state,
        loading: true,
      };
    case SimilarActionTypes.FETCH_SIMILAR_SUCCESS:
      return {
        ...state,
        results: action.payload,
        error: '',
      };
    case SimilarActionTypes.FETCH_SIMILAR_FAILURE:
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
