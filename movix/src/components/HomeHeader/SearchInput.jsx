import React, { useState, useEffect } from "react";
import axios from 'axios'
import SearchActions from '../../actions/SearchActions'

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY

const SearchInput = () => {
  const [getSearch, setMovieName] = SearchActions()

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
