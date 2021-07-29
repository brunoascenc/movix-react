import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPopularMovies,
  fetchPopularRequest,
} from '../../redux/popular-movies/popularMoviesAction';
import { Link } from 'react-router-dom';
import useGenres from '../../hooks/useGenres';
import usePagination from '../../hooks/usePagination';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import MoviesCard from '../MoviesCard/MoviesCard';
import {PopularContainer,MoviesContainer,SectionTitle, Image} from './PopularStyles';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

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
    <PopularContainer className="container" ref={scrollTop}>
      <SectionTitle>Popular Movies </SectionTitle>
      <MoviesSwiper>
      {popularMovie &&
          popularMovie.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-container">
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <div key={movie.id}>
                    <Image
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </MoviesSwiper>
      <MdKeyboardArrowLeft className="left-arrow" />
      <MdKeyboardArrowRight className="right-arrow" />
    </PopularContainer>
  );
};

export default PopularMovies;
