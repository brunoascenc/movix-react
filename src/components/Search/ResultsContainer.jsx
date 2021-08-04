import React from 'react';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../MoviesCard/MoviesCard';
import { SearchContainer, SectionTitle } from './SearchStyles';

const ResultsContainer = ({ search, searchQuery }) => {
  const [genreName] = useGenres();

  return (
    <SearchContainer className="container">
      <h2 className="section-title">You searched for {searchQuery}</h2>
      <div>
        <MoviesCard movies={search} genreName={genreName} />
      </div>
    </SearchContainer>
  );
};

export default ResultsContainer;
