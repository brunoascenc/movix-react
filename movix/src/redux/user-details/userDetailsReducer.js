import UserDetailsTypes from './userDetailsTypes';

const initialState = {
  details: [],
  loading: false,
  error: '',
};

const getUserDetails = (state = initialState, action) => {
  switch (action.type) {
    case UserDetailsTypes.FETCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case UserDetailsTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    case UserDetailsTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUserDetails;
