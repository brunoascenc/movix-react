import axios from 'axios';
import UserDetailsTypes from './userDetailsTypes';
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchUserRequest = () => {
  return {
    type: UserDetailsTypes.FETCH_USER_START,
  };
};

export const fecthUserSuccess = (user) => {
  return {
    type: UserDetailsTypes.FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: UserDetailsTypes.FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUserDetails = (id) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${id}`
      )
      .then((res) => {
        console.log(res);
        const popularMovies = res.data;
        dispatch(fecthUserSuccess(popularMovies));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUserFailure(error));
      });
  };
};
