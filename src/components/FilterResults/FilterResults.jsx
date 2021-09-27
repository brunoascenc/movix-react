import React, { useEffect } from 'react';
import useGenres from '../../hooks/useGenres';
import NothingFound from '../Error/NothingFound';
import usePagination from '../../hooks/usePagination';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFilterRequest,
  fetchFilterResults,
} from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../MoviesCard/MoviesCard';
import { FilterContainer } from './FilterResultsStyles';
import Pagination from '../Pagination/Pagination';
import { useParams } from 'react-router';

const SearchResults = () => {
  const [genreName] = useGenres();
  const [pageNumber, nextPage, prevPage, setPageNumber] = usePagination();
  const { genreId } = useParams();
  const { orderBy } = useParams();
  const filter = useSelector((state) => state.filterResults.results);
  const loading = useSelector((state) => state.filterResults.loading);
  const filterResults = filter.results;
  const dispatch = useDispatch();
  const pages = filter.total_pages;

  useEffect(() => {
    dispatch(fetchFilterRequest());
    setTimeout(() => {
      dispatch(fetchFilterResults(genreId, orderBy, pageNumber));
    }, 600);
  }, [pageNumber, genreId, orderBy, dispatch, setPageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [orderBy, genreId, setPageNumber]);

  return (
    <FilterContainer id="movies-component" className="container">
      {!genreId ? (
        <NothingFound />
      ) : (
        <>
          <h2 className="section-title">You searched for</h2>
          <MoviesCard
            movies={filterResults}
            genreName={genreName}
            loading={loading}
          />
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
