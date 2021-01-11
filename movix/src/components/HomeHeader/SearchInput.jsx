import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { DataContext } from "../../data/DataProvider"


const SearchInput = () => {
  const value = useContext(DataContext);
  const [setMovieName] = value.movieName;
  const getSearch = value.getSearch


  return (
    <>
      <input type="text" id="searchInput" placeholder="Search movie" onChange={(e) => setMovieName(e.target.value)}/>
      {/* <Link to ="/searchresults"> */}
      <button id="search" type="submit" onClick={getSearch} >
        <i className="fas fa-search"></i>
      </button>
      {/* </Link> */}
    </>
  );
};

export default SearchInput;
