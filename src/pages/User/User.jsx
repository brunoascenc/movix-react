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
import Watchlist from '../../components/Watchlist/Watchlist';
import FavoriteMovies from '../../components/FavoriteMovies/FavoriteMovies';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { Stripe, UserHeader, UserInfo } from './UserStyles';
import { signOutSuccess } from '../../redux/user-session/userSessionActions';
import { Link } from 'react-router-dom';

const User = ({ userId, userDetails, signOutSuccess }) => {
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const user = userDetails.details;
  const username = user.username;
  console.log(userDetails);

  useEffect(() => {
    dispatch(fetchUserRequest());
    setTimeout(() => {
      dispatch(fetchUserDetails(userId.sessionId));
    }, 700);
  }, [userId.sessionId, dispatch]);

  const handleSignOut = () => {
    signOutSuccess();
  };

  return (
    <div className="user-page">
      <UserHeader>
        <Stripe />
        <span className="user-icon">{username && username.charAt(0)}</span>
        <UserInfo>
          <p>{user.name === '' ? user.username : user.name}</p>
          <div className="info-details">
            <div className="list-info">
              <span>10</span>
              <p>Favorite Movies</p>
            </div>
            <span className="separator"> </span>
            <div className="list-info">
              <span>6</span>
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
            <FavoriteMovies />
            <Watchlist />{' '}
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
});

export default connect(mapStateToProps, mapDipatchToProps)(User);
