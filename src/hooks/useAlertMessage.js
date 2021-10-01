import { useAlert } from 'react-alert';
import { addToFavorite } from '../redux/user-favorites/favoritesUtils';
import { addToWatchlist } from '../redux/user-watchlist/watchlistUtils';

const AlertMessage = () => {
  const alert = useAlert();
  const addToFavoriteList = (movieId, userId) => {
    if (!userId) return alert.show('You must login first...');
    if (userId)
      return addToFavorite(
        userId,
        movieId,
        alert.show('Movie added to the list!')
      );
  };

  const addMovieToWatchlist = (movieId, userId) => {
    if (!userId) return alert.show('You must login first...');
    if (userId)
      return addToWatchlist(
        userId,
        movieId,
        alert.show('Movie added to the list!')
      );
  };

  return [addToFavoriteList, addMovieToWatchlist];
};

export default AlertMessage;
