import axios from 'axios';
import UserActionTypes from './userActionTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchTokenRequest = () => {
  return {
    type: UserActionTypes.FETCH_TOKEN_START,
  };
};

export const fecthTokenSuccess = (movies) => {
  return {
    type: UserActionTypes.FETCH_TOKEN_SUCCESS,
    payload: movies,
  };
};

export const fetchTokenFailure = (error) => {
  return {
    type: UserActionTypes.FETCH_TOKEN_FAILURE,
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
