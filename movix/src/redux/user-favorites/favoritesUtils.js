const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
export const addToFavorite = (id, movieId) => {
  fetch(
    `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${API_KEY}&session_id=${id}`,
    {
      method: 'POST',
      body: JSON.stringify({
        media_type: 'movie',
        media_id: `${movieId}`,
        favorite: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      const error = err.message;
      console.log(error);
    });
};

export const removeFromFavorite = (id, movieId) => {
  fetch(
    `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${API_KEY}&session_id=${id}`,
    {
      method: 'POST',
      body: JSON.stringify({
        media_type: 'movie',
        media_id: `${movieId}`,
        favorite: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then(() => {
      window.location.reload();
    })
    .catch((err) => {
      const error = err.message;
      console.log(error);
    });
};
