import React, { useEffect } from 'react';
import useGenres from '../../hooks/useGenres';
import NothingFound from '../Error/NothingFound';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import usePagination from '../../hooks/usePagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilterResults } from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../MoviesCard/MoviesCard';
import { FilterContainer, Pagination, Button } from './FilterResultsStyles';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const [pageNumber, nextPage, prevPage, scrollTop, numberOfPages] =
    usePagination();
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  const filter = useSelector((state) => state.filterResults.results);
  const loading = useSelector((state) => state.filterResults.loading);
  const filterResults = filter.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterResults(genreId, optionFilter, pageNumber));
  }, [pageNumber, genreId, optionFilter, dispatch]);

  return (
    <FilterContainer
      id="movies-component"
      className="container"
      ref={scrollTop}
    >
      {!genreId ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <>
          <h2 className="section-title">You searched for</h2>
          <MoviesCard movies={filterResults} genreName={genreName} />

          <Pagination>
            <Button onClick={prevPage}>
              <MdKeyboardArrowLeft className="pagination-btn" />
            </Button>
            <p>Page {numberOfPages + ' of ' + filter.total_pages}</p>
            <Button onClick={nextPage}>
              <MdKeyboardArrowRight className="pagination-btn" />
            </Button>
          </Pagination>
          <Pagination pages={filter} />
        </>
      )}
    </FilterContainer>
  );
};
export default SearchResults;
