import GenreActionTypes from './genreActionTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getGenreResults = (state = initialState, action) => {
  switch (action.type) {
    case GenreActionTypes.FETCH_GENRES_START:
      return {
        ...state,
        loading: true,
      };
    case GenreActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        results: action.payload,
        error: '',
      };
    case GenreActionTypes.FETCH_GENRES_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getGenreResults;
