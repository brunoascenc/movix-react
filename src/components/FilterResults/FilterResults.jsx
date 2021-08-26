import React, { useEffect, useState } from 'react';
// import useGenres from '../../hooks/useGenres';
import NothingFound from '../Error/NothingFound';
// import FullPageLoader from '../FullPageLoader/FullPageLoader';
// import usePagination from '../../hooks/usePagination';
import { useDispatch } from 'react-redux';
import { fetchFilterResults } from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../MoviesCard/MoviesCard';
import { FilterContainer } from './FilterResultsStyles';
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchResults = (props) => {
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  // const filter = useSelector((state) => state.filterResults);
  // const loading = useSelector((state) => state.filterResults.loading);
  // const filterResults = filter.results;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchFilterResults(genreId, optionFilter, page, setData));
  }, [page, genreId, optionFilter, dispatch]);

  return (
    <>
      {!genreId ? (
        <NothingFound />
      ) : (
        <>
          <FilterContainer className="container">
            <h2 className="section-title">You searched for</h2>
            {data === undefined ? null : (
              <InfiniteScroll
                dataLength={data.length}
                next={() => setPage((prevPage) => prevPage + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                <MoviesCard movies={data} />
              </InfiniteScroll>
            )}
          </FilterContainer>
        </>
      )}
    </>
  );
};

export default SearchResults;
