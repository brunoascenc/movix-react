import React from 'react';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../MoviesCard/MoviesCard';
import {SearchContainer, SectionTitle} from './SearchStyles'

const ResultsContainer = ({ search, searchQuery }) => {
  const [genreName] = useGenres();

  return (
    <SearchContainer className="container">
        <SectionTitle>You searched for {searchQuery}</SectionTitle>
        <div className="xdd">
          <MoviesCard movies={search} genreName={genreName} />
        </div>
    </SearchContainer>
  );
};

export default ResultsContainer;
