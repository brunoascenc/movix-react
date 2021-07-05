import UserTokenTypes from './userTokenTypes';

const initialState = {
  token: undefined,
  loading: false,
  error: '',
};

const getUserToken = (state = initialState, action) => {
  switch (action.type) {
    case UserTokenTypes.FETCH_TOKEN_START:
      return {
        ...state,
        loading: true,
      };
    case UserTokenTypes.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case UserTokenTypes.FETCH_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUserToken;
