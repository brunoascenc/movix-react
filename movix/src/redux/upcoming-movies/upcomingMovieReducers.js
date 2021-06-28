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
        loading: false,
        results: action.payload,
      };
    case UpcomingActionTypes.FETCH_UPCOMING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUpcomingMovies;
