import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenres } from '../../../redux/movie-genres/genreActions';
import { Link } from 'react-router-dom';
import { Select } from '../HeaderStyles';

const GenreSelect = ({ closeMenu }) => {
  const genreList = useSelector((state) => state.genreList.results);
  const genreName = genreList.genres;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const [selectGenre, setSelectGenre] = useState('');
  const [selectOption, setSelectOption] = useState('');

  const handleGenre = (e) => {
    setSelectGenre(e.target.value);
  };

  const handleOption = (e) => {
    setSelectOption(e.target.value);
  };

  return (
    <>
      <Select name="genres" id="select-genre" onChange={handleGenre}>
        <option value=""> Selecione </option>
        {genreName &&
          genreName.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
      </Select>

      <Select name="popular" id="filter-movie" onChange={handleOption}>
        <option value=""> Selecione </option>
        <option value="popularity.desc" defaultValue>
          Popularity
        </option>
        <option value="revenue.desc">Revenue</option>
        <option value="vote_count.desc">Most voted</option>
        <option value="vote_average.desc">Top Rated</option>
        <option value="primary_release_date.desc">Release Date</option>
      </Select>

      <Link
        onClick={closeMenu}
        className="filter-btn"
        to={`/filter=${selectGenre}&${selectOption}`}
      >
        Search
      </Link>
    </>
  );
};

export default GenreSelect;
