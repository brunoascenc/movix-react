import React from "react";

const SearchInput = () => {
  return (
    <>
      <input type="text" id="searchInput" placeholder="Search movie" />
      <button id="search" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </>
  );
};

export default SearchInput;
