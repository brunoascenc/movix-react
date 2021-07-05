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
        loading: false,
        results: action.payload,
      };
    case DetailsActionTypes.FETCH_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMovieDetail;
