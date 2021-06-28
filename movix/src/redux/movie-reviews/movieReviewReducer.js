import ReviewsActionTypes from './movieReviewsTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getMovieReview = (state = initialState, action) => {
  switch (action.type) {
    case ReviewsActionTypes.FETCH_REVIEWS_START:
      return {
        ...state,
        loading: true,
      };
    case ReviewsActionTypes.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        error: '',
      };
    case ReviewsActionTypes.FETCH_REVIEWS_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMovieReview;
