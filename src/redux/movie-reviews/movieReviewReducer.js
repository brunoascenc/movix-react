import ReviewsActionTypes from './movieReviewsTypes';

const initialState = {
  results: [],
  error: '',
};

const getMovieReview = (state = initialState, action) => {
  switch (action.type) {
    case ReviewsActionTypes.FETCH_REVIEWS_START:
      return {
        ...state,
      };
    case ReviewsActionTypes.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case ReviewsActionTypes.FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMovieReview;
