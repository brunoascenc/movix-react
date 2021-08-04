import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

//Swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';

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
        // breakpoints={{
        //   100: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   390: {
        //     slidesPerView: 2,
        //     spaceBetween: 15,
        //   },
        //   640: {
        //     slidesPerView: 3,
        //     spaceBetween: 35,
        //   },
        //   780: {
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        //   },
        //   920: {
        //     slidesPerView: 5,
        //     spaceBetween: 65,
        //   },
        // }}
      >
        {movieData &&
          movieData.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-container">
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <div key={movie.id}>
                    <img
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
      </Swiper>
    </>
  );
};

export default MoviesSwiper;
