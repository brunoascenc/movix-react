import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";

const GenreList = () => {
  const value = useContext(DataContext);
  const [genres] = value.genres;
  const genre = genres.genres;

  const genreName = (movie) => {
    if (genre) {
      let genreArray = genre.filter((genre) =>
        movie.genre_ids[0] === genre.id || movie.genre_ids[1] === genre.id
          ? genre.name
          : null
      );
      return (
        <span key={movie.id}>
          {genreArray[0] ? genreArray[0].name : ""}
          {genreArray[1] ? ` / ` + genreArray[1].name : ""}
        </span>
      );
    }
  };

  return [genreName];
};

export default GenreList;
