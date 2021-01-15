import React, { useContext, useState } from "react";

import { DataContext } from "../../data/DataProvider";

import { Link } from "react-router-dom";


const GenreSelect = () => {
  const value = useContext(DataContext);
  const [genres] = value.genres;
  const genreName = genres.genres;

  const [selectGenre, setSelectGenre] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const handleGenre = (e) => {
    setSelectGenre(e.target.value);
  };

  const handleOption = (e) => {
    setSelectOption(e.target.value);
  };

  return (
    <>
      <select name="genres" id="select-genre" onChange={handleGenre}>
        <option value=""> Selecione </option>
        {genreName &&
          genreName.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
      </select>

      <select name="popular" id="filter-movie" onChange={handleOption}>
        <option value=""> Selecione </option>
        <option value="popularity.desc" defaultValue>
          Popularity
        </option>
        <option value="revenue.desc">Revenue</option>
        <option value="vote_count.desc">Most voted</option>
        <option value="vote_average.desc">Top Rated</option>
        <option value="primary_release_date.desc">Release Date</option>
      </select>

      <Link className="filter-btn" to={`/filter=${selectGenre}&${selectOption}`}>
          Search
      </Link>
    </>
  );
};

export default GenreSelect;
