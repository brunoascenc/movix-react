import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";

const SearchInput = () => {
  const value = useContext(DataContext);
  const [handleSearch] = value.movieName
  const [handleXd] = value.xd

  return (
    <>
      <input type="text" id="searchInput" placeholder="Search movie" onChange={handleSearch}/>
      <button id="search" type="submit" onClick={handleXd} >
        <i className="fas fa-search"></i>
      </button>
    </>
  );
};

export default SearchInput;
