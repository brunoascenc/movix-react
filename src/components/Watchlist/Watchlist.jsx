import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchWatchlistMovies,
  fetchWatchlistRequest,
} from '../../redux/user-watchlist/userWatchlistActions';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import UserLists from '../UserLists/UserLists';

const Watchlist = ({ userId }) => {
  const [order, setOrder] = useState('desc');
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.userWatchlist.results.results);
  const loadingWatchlist = useSelector((state) => state.userWatchlist.loading);

  useEffect(() => {
    dispatch(fetchWatchlistRequest());
    setTimeout(() => {
      dispatch(fetchWatchlistMovies(userId.sessionId, order));
    }, 600);
  }, [userId.sessionId, dispatch, order]);

  return (
    <UserLists
      userId={userId}
      movies={watchlist}
      onClick={removeFromWatchlist}
      title={'My Watchlist'}
      handleChange={setOrder}
      loading={loadingWatchlist}
    />
  );
};

export default Watchlist;
