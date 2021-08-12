import MovieCastTypes from './movieActionTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getMovieCast = (state = initialState, action) => {
  switch (action.type) {
    case MovieCastTypes.FETCH_CASTS_START:
      return {
        ...state,
        loading: true,
      };
    case MovieCastTypes.FETCH_CASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case MovieCastTypes.FETCH_CASTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMovieCast;
