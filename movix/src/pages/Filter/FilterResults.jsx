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
        <div className="search-results" ref={scrollTop}>
          <div className="container">
            <div className="title-section">
              <span></span>
              <h1>You searched for</h1>
            </div>
            <div id="movies-container">
              <MoviesCard movies={filterResults} genreName={genreName} />
            </div>
            <div className="pagination-btn">
              <button onClick={prevPage} className="filter-prev">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button onClick={nextPage} className="filter-next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
