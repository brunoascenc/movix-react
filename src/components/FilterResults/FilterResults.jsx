import React, { useEffect, useState } from 'react';
import NothingFound from '../Error/NothingFound';
import { useDispatch } from 'react-redux';
import { fetchFilterResults } from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../MoviesCard/MoviesCard';
import { FilterContainer } from './FilterResultsStyles';
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchResults = (props) => {
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchFilterResults(genreId, optionFilter, page, setData));
  }, [page, genreId, optionFilter, dispatch]);

  const startScroll = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadMore = () => {
    startScroll();
    setClick(!click);
  };

  return (
    <>
      {!genreId ? (
        <NothingFound />
      ) : (
        <>
          <FilterContainer className="container">
            <h2 className="section-title">You searched for</h2>
            {!data || !click ? (
              <>
                <MoviesCard movies={data} />
                <button onClick={loadMore}>Load More</button>
              </>
            ) : (
              <InfiniteScroll
                dataLength={data.length}
                next={startScroll}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                initialScrollY={10}
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
