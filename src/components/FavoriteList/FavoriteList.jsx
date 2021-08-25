import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorite } from '../../redux/user-favorites/favoritesUtils';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import UserLists from '../UserLists/UserLists';

const FavoriteList = ({ userId }) => {
  const [order, setOrder] = useState('desc');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.userFavorites.results.results);

  useEffect(() => {
    dispatch(fetchFavoriteMovies(userId.sessionId, order));
  }, [userId.sessionId, dispatch, order]);
  return (
    <UserLists
      userId={userId}
      movies={favorites}
      onClick={removeFromFavorite}
      title={'My Favorite Movies'}
      handleChange={setOrder}
    />
  );
};

export default FavoriteList;
