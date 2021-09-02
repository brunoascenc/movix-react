import React, { useEffect } from 'react';
import NothingFound from '../Error/NothingFound';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchResults } from '../../redux/movies-search/searchMovieActions';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import { SearchContainer } from './SearchResultsStyles';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../MoviesCard/MoviesCard';

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const searchResults = useSelector((state) => state.searchResults.results);
  const loading = useSelector((state) => state.searchResults.loading);
  const search = searchResults.results;
  const dispatch = useDispatch();

  const searchQuery = props.match.params.pathname;

  useEffect(() => {
    dispatch(fetchSearchResults(searchQuery));
  }, [searchQuery, dispatch]);

  //loop to hide broken images
  let searchedMovie = [];
  for (let i in search) {
    if (search[i].poster_path) {
      searchedMovie.push(search[i]);
    }
  }

  return (
    <SearchContainer id="component" className="container">
      {searchQuery === undefined ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <>
          <h2 className="section-title">You searched for {searchQuery}</h2>
          <div>
            <MoviesCard movies={searchedMovie} genreName={genreName} />
          </div>
        </>
      )}
    </SearchContainer>
  );
};

export default SearchResults;
