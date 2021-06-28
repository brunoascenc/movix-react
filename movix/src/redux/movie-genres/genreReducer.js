import GenreActionTypes from './genreActionTypes';

const initialState = {
  results: [],
  error: '',
};

const getGenreResults = (state = initialState, action) => {
  switch (action.type) {
    case GenreActionTypes.FETCH_GENRES_START:
      return {
        ...state,
      };
    case GenreActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case GenreActionTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getGenreResults;
