import TrailerActionTypes from './movieTrailerTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getMovieTrailer = (state = initialState, action) => {
  switch (action.type) {
    case TrailerActionTypes.FETCH_TRAILER_START:
      return {
        ...state,
        loading: true,
      };
    case TrailerActionTypes.FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        results: action.payload,
        error: '',
      };
    case TrailerActionTypes.FETCH_TRAILER_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMovieTrailer;
