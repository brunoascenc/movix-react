import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";

const GenreSelect = () => {
  const value = useContext(DataContext);
  const [genres] = value.genres;
  const genreName = genres.genres;

  return (
    <select name="genres" id="select-genre">
      {genreName &&
        genreName.map((genre) => {
          return (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          );
        })}
    </select>
  );
};

export default GenreSelect;
