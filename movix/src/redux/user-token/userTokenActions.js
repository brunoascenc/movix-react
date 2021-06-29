import axios from 'axios';
import UserTokenTypes from './userTokenTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchTokenRequest = () => {
  return {
    type: UserTokenTypes.FETCH_TOKEN_START,
  };
};

export const fecthTokenSuccess = (token) => {
  return {
    type: UserTokenTypes.FETCH_TOKEN_SUCCESS,
    payload: token,
  };
};

export const fetchTokenFailure = (error) => {
  return {
    type: UserTokenTypes.FETCH_TOKEN_FAILURE,
    payload: error,
  };
};

export const fetchTokenAuth = () => {
  return (dispatch) => {
    dispatch(fetchTokenRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        const token = data.request_token;
        dispatch(fecthTokenSuccess(token));
        window.location = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/`;
        console.log(token);
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchTokenFailure(error));
      });
  };
};
