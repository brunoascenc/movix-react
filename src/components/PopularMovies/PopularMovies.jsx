import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPopularMovies,
  fetchPopularRequest,
} from '../../redux/popular-movies/popularMoviesAction';
import useGenres from '../../hooks/useGenres';
import usePagination from '../../hooks/usePagination';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import MoviesCard from '../MoviesCard/MoviesCard';

const PopularMovies = () => {
  const [genreName] = useGenres();
  const popularMovies = useSelector((state) => state.popularMovie.results);
  const loading = useSelector((state) => state.popularMovie.loading);
  const popularMovie = popularMovies.results;
  const dispatch = useDispatch();

  const [pageNumber, nextPage, prevPage, scrollTop] = usePagination();

  useEffect(() => {
    dispatch(fetchPopularRequest());
    setTimeout(() => {
      dispatch(fetchPopularMovies(pageNumber));
    }, 700);
  }, [pageNumber, dispatch]);

  return (
    <div className="container hehe" ref={scrollTop}>
      <div className="title-section">
        <span></span>
        <h1>Popular Movies </h1>
      </div>
      <div id="movies-container">
        {loading ? (
          <FullPageLoader />
        ) : (
          <MoviesCard movies={popularMovie} genreName={genreName} />
        )}
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
  );
};

export default PopularMovies;
