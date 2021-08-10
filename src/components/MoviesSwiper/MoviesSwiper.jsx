import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

//Swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import MoviePoster from '../MoviePoster/MoviePoster';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

//Swiper
SwiperCore.use([Navigation]);

const MoviesSwiper = ({ movieData, next, prev }) => {
  return (
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={7}
        navigation={{ nextEl: next, prevEl: prev }}
      >
        {movieData &&
          movieData.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-container">
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <MoviePoster
                    url={IMAGE_URL + movie.poster_path}
                    title={movie.title}
                    movieId={movie.id}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default MoviesSwiper;
