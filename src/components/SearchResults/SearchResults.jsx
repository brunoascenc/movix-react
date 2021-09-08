import React, { useEffect } from 'react';
import NothingFound from '../Error/NothingFound';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSearchRequest,
  fetchSearchResults,
} from '../../redux/movies-search/searchMovieActions';
import { SearchContainer } from './SearchResultsStyles';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../MoviesCard/MoviesCard';
import Pagination from '../Pagination/Pagination';
import usePagination from '../../hooks/usePagination';

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const searchResults = useSelector((state) => state.searchResults.results);
  const pages = searchResults.total_pages;
  const [pageNumber, nextPage, prevPage, setPageNumber] = usePagination();
  const loading = useSelector((state) => state.searchResults.loading);
  const search = searchResults.results;
  const dispatch = useDispatch();
  console.log(loading);

  const searchQuery = props.match.params.pathname;

  useEffect(() => {
    dispatch(fetchSearchRequest());
    setTimeout(() => {
      dispatch(fetchSearchResults(searchQuery, pageNumber));
    }, 800);
  }, [searchQuery, dispatch, pageNumber, setPageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchQuery, setPageNumber]);

  //loop to hide broken images
  let searchedMovie = [];
  for (let i in search) {
    if (search[i].poster_path) {
      searchedMovie.push(search[i]);
    }
  }

  return (
    <SearchContainer id="movies-component" className="container">
      {searchQuery === undefined ? (
        <NothingFound />
      ) : (
        <>
          <h2 className="section-title">You searched for {searchQuery}</h2>

          <MoviesCard
            movies={searchedMovie}
            genreName={genreName}
            loading={loading}
          />
          {searchResults.total_results > 20 ? (
            <Pagination
              pages={pages}
              pageNumber={pageNumber}
              nextPage={nextPage}
              prevPage={prevPage}
              setPageNumber={setPageNumber}
            />
          ) : (
            ''
          )}
        </>
      )}
    </SearchContainer>
  );
};

export default SearchResults;
