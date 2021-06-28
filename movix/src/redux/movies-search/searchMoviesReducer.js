import SearchActionTypes from './searchMoviesTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getSearchResults = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case SearchActionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case SearchActionTypes.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getSearchResults;
