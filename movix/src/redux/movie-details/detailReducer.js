import DetailsActionTypes from './detailActionTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getMovieDetail = (state = initialState, action) => {
  switch (action.type) {
    case DetailsActionTypes.FETCH_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case DetailsActionTypes.FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        error: '',
      };
    case DetailsActionTypes.FETCH_DETAILS_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMovieDetail;
