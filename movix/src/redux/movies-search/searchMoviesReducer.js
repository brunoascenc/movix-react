import {
  GET_MOVIES_REQUEST,
  GET_SEARCH_RESULTS,
  GET_MOVIES_FAILURE,
} from '../types';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getSearchResults = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCH_RESULTS:
      return {
        loading: false,
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

export default getSearchResults;
