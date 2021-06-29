import UserDetailsTypes from './userDetailsTypes';

const initialState = {
  details: [],
  error: '',
};

const getUserDetails = (state = initialState, action) => {
  switch (action.type) {
    case UserDetailsTypes.FETCH_USER_START:
      return {
        ...state,
      };
    case UserDetailsTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    case UserDetailsTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUserDetails;
