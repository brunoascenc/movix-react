import React from 'react';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../MoviesCard/MoviesCard';

const ResultsContainer = ({ search, searchQuery }) => {
  const [genreName] = useGenres();

  return (
    <div className="search-results">
      <div className="container">
        <div className="title-section">
          <span></span>
          <h1>You searched for {searchQuery}</h1>
        </div>
        <div id="movies-container">
          <MoviesCard movies={search} genreName={genreName} />
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
