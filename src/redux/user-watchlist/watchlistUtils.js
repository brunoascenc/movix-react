import axios from 'axios';
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const addToWatchlist = (id, movieId) => {
  axios.post(
    `https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=${API_KEY}&session_id=${id}`,
    {
      media_type: 'movie',
      media_id: `${movieId}`,
      watchlist: true,
    }
  );
};

export const removeFromWatchlist = (id, movieId) => {
  axios
    .post(
      `https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=${API_KEY}&session_id=${id}`,
      {
        media_type: 'movie',
        media_id: `${movieId}`,
        watchlist: false,
      }
    )
    .then(() => {
      window.location.reload();
    });
};
