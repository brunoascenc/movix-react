import React, { useEffect, useState } from 'react';
import NothingFound from '../Error/NothingFound';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterResults } from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../MoviesCard/MoviesCard';
import { FilterContainer, Button } from './FilterResultsStyles';
import InfiniteScroll from 'react-infinite-scroll-component';
import FullPageLoader from '../FullPageLoader/FullPageLoader';

const SearchResults = (props) => {
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const tese = useSelector((state) => state.filterResults.results);

  // console.log(tese.results);

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
                <MoviesCard movies={tese.results} />
                <Button onClick={loadMore} primary>
                  Load More
                </Button>
              </>
            ) : (
              <InfiniteScroll
                dataLength={data.length}
                next={startScroll}
                hasMore={true}
                endMessage={<h4>end</h4>}
                loader={<FullPageLoader />}
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
