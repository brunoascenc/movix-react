import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SearchInput = () => {
  const [movieName, setMovieName] = useState('');

  const history = useHistory();
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      history.push(`/search=${movieName}`);
    }
  };

  return (
    <>
      <input
        onKeyPress={handleKeyPress}
        type="text"
        id="searchInput"
        placeholder="Search movie"
        onChange={(e) => setMovieName(e.target.value)}
      />
      <Link to={`/search=${movieName}`}>
        <button id="search" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </Link>
    </>
  );
};

export default SearchInput;
