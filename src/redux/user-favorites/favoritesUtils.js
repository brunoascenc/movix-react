import axios from 'axios';
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const addToFavorite = (id, movieId) => {
  axios.post(
    `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${API_KEY}&session_id=${id}`,
    {
      media_type: 'movie',
      media_id: `${movieId}`,
      favorite: true,
    }
  );
};

export const removeFromFavorite = (id, movieId) => {
  axios
    .post(
      `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${API_KEY}&session_id=${id}`,
      {
        media_type: 'movie',
        media_id: `${movieId}`,
        favorite: false,
      }
    )
    .then(() => {
      window.location.reload();
    });
};
