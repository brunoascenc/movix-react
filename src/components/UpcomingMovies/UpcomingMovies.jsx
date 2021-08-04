import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/upcoming-movies/upcomingActions';
import useGenres from '../../hooks/useGenres';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import {
  UpcomingContainer,
  UpcomingCard,
  Image,
  MovieInfo,
} from './UpcomingStyles';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const UpcomingMovies = () => {
  const [genreName] = useGenres();
  const upcoming = useSelector((state) => state.upcomingMovies.results);
  const upcomingList = upcoming.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  //loop to hide broken images
  let upcomingMovies = [];
  for (let i in upcomingList) {
    if (upcomingList[i].poster_path) {
      upcomingMovies.push(upcomingList[i]);
    }
  }

  return (
    <UpcomingContainer className="upcoming-slide container">
      <h2 className="section-title">Coming soon</h2>
      <MoviesSwiper>
        {upcomingMovies &&
          upcomingMovies.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-container">
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <UpcomingCard key={movie.id}>
                    <Image
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                    {/* <MovieInfo className="movie-title">{movie.title}</MovieInfo>
                    <MovieInfo className="movie-date">
                      {movie.release_date}
                    </MovieInfo>
                    <MovieInfo className="movie-genres">
                      {genreName(movie)}
                    </MovieInfo> */}
                  </UpcomingCard>
                </Link>
              </SwiperSlide>
            );
          })}
      </MoviesSwiper>
      <MdKeyboardArrowLeft className="left-arrow" />
      <MdKeyboardArrowRight className="right-arrow" />
    </UpcomingContainer>
  );
};

export default UpcomingMovies;
