import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import UserLists from '../UserLists/UserLists';

const Watchlist = ({ userId }) => {
  const [order, setOrder] = useState('desc');
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.userWatchlist.results.results);

  useEffect(() => {
    dispatch(fetchWatchlistMovies(userId.sessionId, order));
  }, [userId.sessionId, dispatch, order]);
  return (
    <UserLists
      userId={userId}
      movies={watchlist}
      onClick={removeFromWatchlist}
      title={'My Watchlist'}
      handleChange={setOrder}
    />
  );
};

export default Watchlist;
