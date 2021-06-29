import UserTokenTypes from './userTokenTypes';

const initialState = {
  token: undefined,
  error: '',
};

const getUserToken = (state = initialState, action) => {
  switch (action.type) {
    case UserTokenTypes.FETCH_TOKEN_START:
      return {
        ...state,
      };
    case UserTokenTypes.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case UserTokenTypes.FETCH_TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUserToken;
