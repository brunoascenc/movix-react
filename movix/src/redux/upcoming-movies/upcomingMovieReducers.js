import UpcomingActionTypes from './upcomingTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getUpcomingMovies = (state = initialState, action) => {
  switch (action.type) {
    case UpcomingActionTypes.FETCH_UPCOMING_START:
      return {
        ...state,
        loading: true,
      };
    case UpcomingActionTypes.FETCH_UPCOMING_SUCCESS:
      return {
        ...state,
        results: action.payload,
        error: '',
      };
    case UpcomingActionTypes.FETCH_UPCOMING_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUpcomingMovies;
