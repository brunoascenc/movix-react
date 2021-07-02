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

const User = ({ userId }) => {
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
    setTimeout(() => {
      dispatch(fetchUserDetails(userId.sessionId));
    }, 1000);
  }, [userId.sessionId, dispatch]);

  return (
    <div className="container user-page">
      <div className="user-content">
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
});

export default connect(mapStateToProps, mapDipatchToProps)(User);
