import UserSessionTypes from './userSessionTypes';

const initialState = {
  sessionId: undefined,
  error: '',
};

const getUserToken = (state = initialState, action) => {
  switch (action.type) {
    case UserSessionTypes.FETCH_SESSION_START:
      return {
        ...state,
      };
    case UserSessionTypes.FETCH_SESSION_SUCCESS:
      return {
        ...state,
        sessionId: action.payload,
      };
    case UserSessionTypes.FETCH_SESSION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUserToken;
