import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  UserIconBg,
  UserHeader,
  UserInfo,
  UserIcon,
  Username,
  InfoContent,
  ListInfo,
  ListContainer,
  UserSection,
} from './UserStyles';
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

  const handleSignOut = () => {
    dispatch(signOutSuccess());
  };

  return (
    <UserSection>
      <UserHeader>
        <UserIconBg />
        <UserIcon>{user.username && user.username.charAt(0)}</UserIcon>
        <UserInfo>
          {loading ? (
            <span className="username-skeleton"></span>
          ) : (
            <Username>{user.name === '' ? user.username : user.name}</Username>
          )}
          <InfoContent>
            <div>
              <ListInfo>
                <span>{favoritesTotal.total_results}</span>
                <p>Favorite Movies</p>
              </ListInfo>
              <ListInfo>
                <span>{watchlistTotal.total_results}</span>
                <p>Watchlist Total</p>
              </ListInfo>
            </div>
            <Link to="/" onClick={handleSignOut}>
              Logout
            </Link>
          </InfoContent>
        </UserInfo>
      </UserHeader>
      <ListContainer>
        <FavoriteList userId={userId} />
        <Watchlist userId={userId} />
      </ListContainer>
    </UserSection>
  );
};

export default User;
