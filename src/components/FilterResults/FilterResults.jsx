import React, { useEffect } from 'react';
import useGenres from '../../hooks/useGenres';
import NothingFound from '../Error/NothingFound';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import usePagination from '../../hooks/usePagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilterResults } from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../MoviesCard/MoviesCard';
import { FilterContainer } from './FilterResultsStyles';
import Pagination from '../Pagination/Pagination';

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const [pageNumber, nextPage, prevPage, setPageNumber] = usePagination();
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  const filter = useSelector((state) => state.filterResults.results);
  const loading = useSelector((state) => state.filterResults.loading);
  const filterResults = filter.results;
  const dispatch = useDispatch();
  const pages = filter.total_pages;

  useEffect(() => {
    dispatch(fetchFilterResults(genreId, optionFilter, pageNumber));
  }, [pageNumber, genreId, optionFilter, dispatch, setPageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [optionFilter, genreId]);

  return (
    <FilterContainer id="movies-component" className="container">
      {!genreId ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <>
          <h2 className="section-title">You searched for</h2>
          <MoviesCard movies={filterResults} genreName={genreName} />
          <Pagination
            pages={pages}
            pageNumber={pageNumber}
            nextPage={nextPage}
            prevPage={prevPage}
            setPageNumber={setPageNumber}
          />
        </>
      )}
    </FilterContainer>
  );
};
export default SearchResults;
