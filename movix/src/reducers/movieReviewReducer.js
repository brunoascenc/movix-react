import {
    GET_MOVIE_REVIEW,
    GET_MOVIES_REQUEST,
    GET_MOVIES_FAILURE,
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    results: [],
    error: "",
  };
  
  const getMovieReview = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_MOVIE_REVIEW:
        return {
          ...state,
          results: action.payload,
          error: "",
        };
      case GET_MOVIES_FAILURE:
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
  