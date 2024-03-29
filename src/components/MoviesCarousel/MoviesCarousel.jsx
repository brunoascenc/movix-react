import React from 'react';
import { SliderNav } from '../SliderNav/SliderNav';
import { CarouselContainer, CarouselTitle } from './MoviesCarouselStyles';
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import MoviePoster from '../MoviePoster/MoviePoster';
import MoviesSkeleton from '../MoviesSkeleton/MoviesSkeleton';

//Swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { SliderBreakpoints } from './BreakPoints';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

//Swiper
SwiperCore.use([Navigation]);

const MoviesCarousel = ({
  nextMovie,
  prevMovie,
  sectionTitle,
  movieData,
  carouselName,
  loading,
}) => {
  return (
    <CarouselContainer moviesLength={movieData && movieData.length}>
      <CarouselTitle>{sectionTitle}</CarouselTitle>

      <Swiper
        spaceBetween={15}
        slidesPerView
        navigation={{ nextEl: nextMovie, prevEl: prevMovie }}
        className="swiper-container"
        breakpoints={SliderBreakpoints}
      >
        {loading
          ? Array(20)
              .fill()
              .map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <MoviesSkeleton carouselImage />
                  </SwiperSlide>
                );
              })
          : movieData &&
            movieData
              .filter((movie) => movie.poster_path)
              .map((movie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <Link key={movie.id} to={`/details/${movie.id}`}>
                      <MoviePoster
                        url={IMAGE_URL + movie.poster_path}
                        title={movie.title}
                        movieId={movie.id}
                        carouselImage
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
      </Swiper>
      <SliderNav
        movieslength={movieData}
        carouselName={carouselName}
        prev={prevMovie}
      />
    </CarouselContainer>
  );
};

export default MoviesCarousel;
