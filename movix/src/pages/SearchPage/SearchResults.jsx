import React, { useEffect } from 'react';
import ResultsContainer from '../../components/Search/ResultsContainer';
import NothingFound from '../../components/Error/NothingFound';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchResults } from '../../redux/movies-search/getSearchResults';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';

const SearchResults = (props) => {
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
    <>
      {searchQuery === undefined ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <ResultsContainer search={searchedMovie} searchQuery={searchQuery} />
      )}
    </>
  );
};

export default SearchResults;
