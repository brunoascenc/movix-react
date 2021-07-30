import React from 'react';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../MoviesCard/MoviesCard';
import {SearchResultsMovies} from './SearchStyles'

const ResultsContainer = ({ search, searchQuery }) => {
  const [genreName] = useGenres();

  return (
    <SearchResultsMovies>
        <h2>You searched for {searchQuery}</h2>
        <div className="xdd">
          <MoviesCard movies={search} genreName={genreName} />
        </div>
    </SearchResultsMovies>
  );
};

export default ResultsContainer;
