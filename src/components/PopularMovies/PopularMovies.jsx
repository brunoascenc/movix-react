import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPopularMovies,
  fetchPopularRequest,
} from '../../redux/popular-movies/popularMoviesAction';
import { PopularContainer } from './PopularStyles';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { SliderNav } from '../SliderNav/SliderNav';

const PopularMovies = () => {
  const popularMovies = useSelector((state) => state.popularMovie.results);

  const popularMovie = popularMovies.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularRequest());
    setTimeout(() => {
      dispatch(fetchPopularMovies());
    }, 700);
  }, [dispatch]);

  return (
    <PopularContainer className="container">
      <h2 className="section-title">Popular Movies </h2>
      <MoviesSwiper
        movieData={popularMovie}
        next={'.next-popular'}
        prev={'.prev-popular'}
      ></MoviesSwiper>
      <SliderNav
        movieslength={popularMovie}
        next={'next-popular'}
        prev={'prev-popular'}
      />
    </PopularContainer>
  );
};

export default PopularMovies;
