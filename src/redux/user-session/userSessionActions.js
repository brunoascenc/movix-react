import UserSessionTypes from './userSessionTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchSessionRequest = () => {
  return {
    type: UserSessionTypes.FETCH_SESSION_START,
  };
};

export const fecthSessionSuccess = (sessionId) => {
  return {
    type: UserSessionTypes.FETCH_SESSION_SUCCESS,
    payload: sessionId,
  };
};

export const fetchSessionFailure = (error) => {
  return {
    type: UserSessionTypes.FETCH_SESSION_FAILURE,
    payload: error,
  };
};

export const signOutStart = () => ({
  type: UserSessionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserSessionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserSessionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const fetchSessionId = (token) => {
  return (dispatch) => {
    dispatch(fetchSessionRequest);
    const url = new URL(window.location);
    const approved = url.searchParams.get('approved');
    if (approved) {
      fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({ request_token: `${token}` }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          const sessionId = res.session_id;
          dispatch(fecthSessionSuccess(sessionId));
          window.location = 'http://localhost:3000/';
        })
        .catch((err) => {
          const error = err.message;
          dispatch(fetchSessionFailure(error));
        });
    }
  };
};
