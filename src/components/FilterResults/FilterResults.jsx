import React, { useEffect, useState } from 'react';
import useGenres from '../../hooks/useGenres';
import NothingFound from '../Error/NothingFound';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import usePagination from '../../hooks/usePagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilterResults } from '../../redux/movies-filter/filterMoviesAction';
import MoviesCard from '../MoviesCard/MoviesCard';
import { FilterContainer, Pagination, Button } from './FilterResultsStyles';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import axios from 'axios';

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const [pageNumber, nextPage, prevPage, scrollTop, numberOfPages] =
    usePagination();
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  const filter = useSelector((state) => state.filterResults);
  const loading = useSelector((state) => state.filterResults.loading);
  const filterResults = filter.results;
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  console.log(filterResults);
  // const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchFilterResults(genreId, optionFilter, pageNumber));
  }, [pageNumber, genreId, optionFilter, dispatch]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=4a5e130486cb63a2caff652d783f6a36&page=${page}`
  //     )
  //     .then((res) => {
  //       const filterResults = res.data;
  //       const pop = filterResults.results;
  //       setData((prevpop) => [...prevpop, ...pop]);
  //     })
  //     .catch((err) => {
  //       const error = err.message;
  //     });
  // }, [page]);

  return (
    <>
      {!genreId ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <>
          <FilterContainer className="container" ref={scrollTop}>
            <h2 className="section-title">You searched for</h2>
            {/* {data === undefined ? null : (
              <InfiniteScroll
                dataLength={data.length} //This is important field to render the next data
                next={() => setPage((prevPage) => prevPage + 1)}
                // next={handleFetch}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                <MoviesCard movies={data} genreName={genreName} />
              </InfiniteScroll>
            )} */}
            <MoviesCard movies={filterResults.results} genreName={genreName} />

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
          </FilterContainer>
        </>
      )}
    </>
  );
};

export default SearchResults;
