import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [movieName, setMovieName] = useState("");



  return (
    <>
      <input type="text" id="searchInput" placeholder="Search movie" onChange={(e) => setMovieName(e.target.value)}/>
      <Link to ={`/search-results/${movieName}`}>
      <button id="search" type="submit">
        <i className="fas fa-search"></i>
      </button>
      </Link>
    </>
  );
};

export default SearchInput;
