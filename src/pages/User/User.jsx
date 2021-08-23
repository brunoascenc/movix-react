import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUserDetails,
  fetchUserRequest,
} from '../../redux/user-details/userDetailsAction';
import { selectUserDetails } from '../../redux/user-details/userDetailsSelector';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { UserIconBg, UserHeader, UserInfo } from './UserStyles';
import { signOutSuccess } from '../../redux/user-session/userSessionActions';
import { Link } from 'react-router-dom';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import UserLists from '../../components/UserLists/UserLists';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { removeFromFavorite } from '../../redux/user-favorites/favoritesUtils';

const User = ({
  userId,
  userDetails,
  signOutSuccess,
  fetchWatchlistMovies,
  fetchFavoriteMovies,
}) => {
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const user = userDetails.details;
  const username = user.username;
  const watchlist = useSelector((state) => state.userWatchlist.results);
  const favorites = useSelector((state) => state.userFavorites.results);
  const favoriteMovies = favorites.results;
  const moviesWatchlist = watchlist.results;

  useEffect(() => {
    dispatch(fetchUserRequest());
    setTimeout(() => {
      dispatch(fetchUserDetails(userId.sessionId));
      fetchWatchlistMovies(userId.sessionId);
      fetchFavoriteMovies(userId.sessionId);
    }, 700);
  }, [userId.sessionId, dispatch, fetchWatchlistMovies, fetchFavoriteMovies]);

  const handleSignOut = () => {
    signOutSuccess();
  };

  return (
    <div className="user-page">
      <UserHeader>
        <UserIconBg />
        <span className="user-icon">{username && username.charAt(0)}</span>
        <UserInfo>
          <p>{user.name === '' ? user.username : user.name}</p>
          <div className="info-details">
            <div className="list-info">
              <span>{favorites.total_results}</span>
              <p>Favorite Movies</p>
            </div>
            <span className="separator"> </span>
            <div className="list-info">
              <span>{watchlist.total_results}</span>
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

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
  userDetails: selectUserDetails,
});

const mapDipatchToProps = (dispatch) => ({
  fetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
  signOutSuccess: () => dispatch(signOutSuccess()),
  fetchWatchlistMovies: (id) => dispatch(fetchWatchlistMovies(id)),
  fetchFavoriteMovies: (id) => dispatch(fetchFavoriteMovies(id)),
});

export default connect(mapStateToProps, mapDipatchToProps)(User);
