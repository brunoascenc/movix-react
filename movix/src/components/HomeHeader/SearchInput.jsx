import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider"


const SearchInput = () => {
  const value = useContext(DataContext);
  const [setMovieName] = value.movieName;
  const getSearch = value.getSearch


  return (
    <>
      <input type="text" id="searchInput" placeholder="Search movie" onChange={(e) => setMovieName(e.target.value)}/>
      <button id="search" type="submit" onClick={getSearch} >
        <i className="fas fa-search"></i>
      </button>
    </>
  );
};

export default SearchInput;
