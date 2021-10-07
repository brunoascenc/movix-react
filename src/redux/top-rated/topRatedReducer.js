import TopRatedTypes from './topRatedTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const getTopRatedMovies = (state = initialState, action) => {
  switch (action.type) {
    case TopRatedTypes.FETCH_TOPRATED_START:
      return {
        ...state,
        loading: true,
      };
    case TopRatedTypes.FETCH_TOPRATED_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case TopRatedTypes.FETCH_TOPRATED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getTopRatedMovies;
