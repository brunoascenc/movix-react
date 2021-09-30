import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import UserLists from './UserLists';

const Watchlist = ({ userId }) => {
  const [order, setOrder] = useState('desc');
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.userWatchlist.results.results);
  const totalResults = useSelector(
    (state) => state.userWatchlist.results.total_results
  );
  const totalPages = useSelector(
    (state) => state.userWatchlist.results.total_pages
  );
  const loadingWatchlist = useSelector((state) => state.userWatchlist.loading);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchWatchlistMovies(userId.sessionId, order, currentPage));
  }, [userId.sessionId, dispatch, order, currentPage]);

  return (
    <UserLists
      userId={userId}
      movies={watchlist}
      onClick={removeFromWatchlist}
      title={'My Watchlist'}
      handleChange={setOrder}
      loading={loadingWatchlist}
      totalResults={totalResults}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default Watchlist;
