import React, { useEffect } from 'react';
import useGenres from '../../hooks/useGenres';
import NothingFound from '../../components/Error/NothingFound';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import usePagination from '../../hooks/usePagination';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFilterResults,
  fetchFilterRequest,
} from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import {
  FilterContainer,
  // SectionTitle,
  Pagination,
  Button,
} from './FilterPageStyles';
import MovieBanner from '../../components/MovieBanner/MovieBanner';
// import { CustomButton } from '../../components/CustomButton/CustomButton';

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const [pageNumber, nextPage, prevPage, scrollTop] = usePagination();
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  const filter = useSelector((state) => state.filterResults.results);
  const loading = useSelector((state) => state.filterResults.loading);
  const filterResults = filter.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterRequest());
    setTimeout(() => {
      dispatch(fetchFilterResults(genreId, optionFilter, pageNumber));
    }, 700);
  }, [pageNumber, genreId, optionFilter, dispatch]);

  return (
    <>
      {!genreId ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <>
          <MovieBanner movieInfo={filterResults} />
          <FilterContainer className="container" ref={scrollTop}>
            <h2 className="section-title">You searched for</h2>
            <MoviesCard movies={filterResults} genreName={genreName} />
            <Pagination>
              <Button onClick={prevPage}>
                <i className="fas fa-chevron-left"></i>
              </Button>
              <Button onClick={nextPage}>
                <i className="fas fa-chevron-right"></i>
              </Button>
            </Pagination>
          </FilterContainer>
        </>
      )}
    </>
  );
};

export default SearchResults;
