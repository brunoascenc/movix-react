import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenres } from '../redux/movie-genres/getGenres';

const GenreList = () => {
  const genreList = useSelector((state) => state.genreList.results);
  const genre = genreList.genres;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const genreName = (movie) => {
    if (genre) {
      let genreArray = genre.filter((genre) =>
        movie.genre_ids[0] === genre.id || movie.genre_ids[1] === genre.id
          ? genre.name
          : null
      );
      return (
        <span key={movie.id}>
          {genreArray[0] ? genreArray[0].name : ''}
          {genreArray[1] ? ` / ` + genreArray[1].name : ''}
        </span>
      );
    }
  };

  return [genreName];
};

export default GenreList;
