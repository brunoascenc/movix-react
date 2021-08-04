import React, { useEffect } from 'react';
import NothingFound from '../../components/Error/NothingFound';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSearchResults,
  fetchSearchRequest,
} from '../../redux/movies-search/searchMovieActions';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import MovieBanner from '../../components/MovieBanner/MovieBanner';
import { SearchContainer } from './SearchPageStyles';
import useGenres from '../../hooks/useGenres';
import MoviesCard from '../../components/MoviesCard/MoviesCard';

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const searchResults = useSelector((state) => state.searchResults.results);
  const loading = useSelector((state) => state.searchResults.loading);
  const search = searchResults.results;
  const dispatch = useDispatch();

  const searchQuery = props.match.params.pathname;

  useEffect(() => {
    dispatch(fetchSearchRequest());
    setTimeout(() => {
      dispatch(fetchSearchResults(searchQuery));
    }, 700);
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
        <>
          <MovieBanner movieInfo={searchedMovie} />
          <SearchContainer className="container">
            <h2 className="section-title">You searched for {searchQuery}</h2>
            <div>
              <MoviesCard movies={searchedMovie} genreName={genreName} />
            </div>
          </SearchContainer>
        </>
      )}
    </>
  );
};

export default SearchResults;
