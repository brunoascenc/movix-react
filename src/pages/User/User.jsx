import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../../redux/user-details/userDetailsAction';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { UserIconBg, UserHeader, UserInfo } from './UserStyles';
import { signOutSuccess } from '../../redux/user-session/userSessionActions';
import { Link } from 'react-router-dom';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import UserLists from '../../components/UserLists/UserLists';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { removeFromFavorite } from '../../redux/user-favorites/favoritesUtils';

const User = () => {
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const watchlistTotal = useSelector((state) => state.userWatchlist.results);
  const favoritesTotal = useSelector((state) => state.userFavorites.results);
  const user = useSelector((state) => state.user.details);
  const userId = useSelector((state) => state.sessionId);
  const favoriteMovies = favoritesTotal.results;
  const moviesWatchlist = watchlistTotal.results;

  useEffect(() => {
    dispatch(fetchUserDetails(userId.sessionId));
    dispatch(fetchWatchlistMovies(userId.sessionId));
    dispatch(fetchFavoriteMovies(userId.sessionId));
  }, [userId.sessionId, dispatch]);

  const handleSignOut = () => {
    dispatch(signOutSuccess());
  };

  return (
    <div className="user-page">
      <UserHeader>
        <UserIconBg />
        <span className="user-icon">
          {user.username && user.username.charAt(0)}
        </span>
        <UserInfo>
          <p>{user.name === '' ? user.username : user.name}</p>
          <div className="info-details">
            <div className="list-info">
              <span>{favoritesTotal.total_results}</span>
              <p>Favorite Movies</p>
            </div>
            <span className="separator"> </span>
            <div className="list-info">
              <span>{watchlistTotal.total_results}</span>
              <p>Watchlist Total</p>
            </div>
            <span className="separator"> </span>
            <Link to="/" onClick={handleSignOut}>
              Logout
            </Link>
          </div>
        </UserInfo>
      </UserHeader>
      <div className="container user-content">
        {loading ? (
          <FullPageLoader />
        ) : (
          <>
            <UserLists
              userId={userId}
              movies={favoriteMovies}
              onClick={removeFromFavorite}
              title={'My Favorite Movies'}
            />
            <UserLists
              userId={userId}
              movies={moviesWatchlist}
              onClick={removeFromWatchlist}
              title={'My Watchlist'}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default User;
