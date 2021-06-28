import NowPlayingActionTypes from './nowPlayingTypes';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getNowPlaying = (state = initialState, action) => {
  switch (action.type) {
    case NowPlayingActionTypes.FETCH_NOWPLAYING_START:
      return {
        ...state,
        loading: true,
      };
    case NowPlayingActionTypes.FETCH_NOWPLAYING_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case NowPlayingActionTypes.FETCH_NOWPLAYING_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getNowPlaying;
