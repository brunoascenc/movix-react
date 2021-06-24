import {
  GET_FILTER_RESULTS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_FAILURE,
} from '../types';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getFilterResults = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FILTER_RESULTS:
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

export default getFilterResults;
