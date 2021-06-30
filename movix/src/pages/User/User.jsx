import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchUserDetails } from '../../redux/user-details/userDetailsAction';
import { selectUserDetails } from '../../redux/user-details/userDetailsSelector';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';

const User = ({
  userId,
  fetchUserDetails,
  userDetails,
  fetchFavoriteMovies,
  fetchWatchlistMovies,
}) => {
  const username = userDetails.details.username;
  useEffect(() => {
    fetchUserDetails(userId.sessionId);
    fetchFavoriteMovies(userId.sessionId);
    fetchWatchlistMovies(userId.sessionId);
  }, [userId.sessionId, fetchUserDetails]);

  return (
    <div>
      <h1>Olá {username}</h1>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
  userDetails: selectUserDetails,
});

const mapDipatchToProps = (dispatch) => ({
  fetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
  fetchFavoriteMovies: (id) => dispatch(fetchFavoriteMovies(id)),
  fetchWatchlistMovies: (id) => dispatch(fetchWatchlistMovies(id)),
});

export default connect(mapStateToProps, mapDipatchToProps)(User);
