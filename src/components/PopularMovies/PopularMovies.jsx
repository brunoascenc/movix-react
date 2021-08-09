import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPopularMovies,
  fetchPopularRequest,
} from '../../redux/popular-movies/popularMoviesAction';
// import { Link } from 'react-router-dom';
// import useGenres from '../../hooks/useGenres';
// import usePagination from '../../hooks/usePagination';
// import FullPageLoader from '../FullPageLoader/FullPageLoader';
// import MoviesCard from '../MoviesCard/MoviesCard';
import { PopularContainer } from './PopularStyles';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
// import { SwiperSlide } from 'swiper/react';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { SliderNav } from '../SliderNav/SliderNav';

// const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const PopularMovies = () => {
  // const [genreName] = useGenres();
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
        moviesLength={popularMovie}
        next={'next-popular'}
        prev={'prev-popular'}
      />
    </PopularContainer>
  );
};

export default PopularMovies;
