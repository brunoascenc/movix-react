import FilterActionTypes from './filterMovieTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getFilterResults = (state = initialState, action) => {
  switch (action.type) {
    case FilterActionTypes.FETCH_FILTER_START:
      return {
        ...state,
        loading: true,
      };
    case FilterActionTypes.FETCH_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case FilterActionTypes.FETCH_FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getFilterResults;
