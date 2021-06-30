const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
export const addToWatchlist = (id, movieId) => {
  fetch(
    `https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=${API_KEY}&session_id=${id}`,
    {
      method: 'POST',
      body: JSON.stringify({
        media_type: 'movie',
        media_id: `${movieId}`,
        watchlist: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      const error = err.message;
      console.log(error);
    });
};
