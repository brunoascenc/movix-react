import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorite } from '../../redux/user-favorites/favoritesUtils';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import UserLists from './UserLists';

const FavoriteList = ({ userId }) => {
  const [order, setOrder] = useState('desc');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.userFavorites.results.results);
  const favoritesLoading = useSelector((state) => state.userFavorites.loading);
  const totalResults = useSelector(
    (state) => state.userFavorites.results.total_results
  );
  const totalPages = useSelector(
    (state) => state.userFavorites.results.total_pages
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchFavoriteMovies(userId.sessionId, order, currentPage));
  }, [userId.sessionId, dispatch, order, currentPage]);

  return (
    <UserLists
      userId={userId}
      movies={favorites}
      onClick={removeFromFavorite}
      title={'My Favorite Movies'}
      handleChange={setOrder}
      loading={favoritesLoading}
      totalResults={totalResults}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default FavoriteList;
