import React from 'react';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../MoviesCard/MoviesCard';
import {SearchResultsMovies, SectionTitle} from './SearchStyles'

const ResultsContainer = ({ search, searchQuery }) => {
  const [genreName] = useGenres();

  return (
    <SearchResultsMovies className="container">
        <SectionTitle>You searched for {searchQuery}</SectionTitle>
        <div className="xdd">
          <MoviesCard movies={search} genreName={genreName} />
        </div>
    </SearchResultsMovies>
  );
};

export default ResultsContainer;
