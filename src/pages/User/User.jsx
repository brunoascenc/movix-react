import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../../redux/user-details/userDetailsAction';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { UserIconBg, UserHeader, UserInfo } from './UserStyles';
import { signOutSuccess } from '../../redux/user-session/userSessionActions';
import { Link } from 'react-router-dom';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import Watchlist from '../../components/Watchlist/Watchlist';

const User = () => {
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const watchlistTotal = useSelector((state) => state.userWatchlist.results);
  const favoritesTotal = useSelector((state) => state.userFavorites.results);
  const user = useSelector((state) => state.user.details);
  const userId = useSelector((state) => state.sessionId);

  useEffect(() => {
    dispatch(fetchUserDetails(userId.sessionId));
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
            <FavoriteList userId={userId} />
            <Watchlist userId={userId} />
          </>
        )}
      </div>
    </div>
  );
};

export default User;
