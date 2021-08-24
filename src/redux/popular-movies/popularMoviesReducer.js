import PopularActionTypes from './popularMoviesTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const getPopularMovies = (state = initialState, action) => {
  switch (action.type) {
    case PopularActionTypes.FETCH_POPULAR_START:
      return {
        ...state,
        loading: true,
      };
    case PopularActionTypes.FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case PopularActionTypes.FETCH_POPULAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getPopularMovies;
