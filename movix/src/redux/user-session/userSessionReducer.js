import UserSessionTypes from './userSessionTypes';

const initialState = {
  sessionId: undefined,
  error: '',
  loading: false,
};

const getUserToken = (state = initialState, action) => {
  switch (action.type) {
    case UserSessionTypes.SIGN_OUT_START:
    case UserSessionTypes.FETCH_SESSION_START:
      return {
        ...state,
        loading: true,
      };
    case UserSessionTypes.FETCH_SESSION_SUCCESS:
      return {
        ...state,
        sessionId: action.payload,
        loading: false,
      };
    case UserSessionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        sessionId: null,
        error: null,
        loading: false,
      };
    case UserSessionTypes.SIGN_OUT_FAILURE:
    case UserSessionTypes.FETCH_SESSION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getUserToken;
