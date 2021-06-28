import TrailerActionTypes from './movieTrailerTypes';

const initialState = {
  results: [],
  error: '',
};

const getMovieTrailer = (state = initialState, action) => {
  switch (action.type) {
    case TrailerActionTypes.FETCH_TRAILER_START:
      return {
        ...state,
      };
    case TrailerActionTypes.FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case TrailerActionTypes.FETCH_TRAILER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMovieTrailer;
