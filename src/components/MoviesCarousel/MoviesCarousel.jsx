import React from 'react';
import { SliderNav } from '../SliderNav/SliderNav';
import { CarouselContainer } from './MoviesCarouselStyles';
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import MoviePoster from '../MoviePoster/MoviePoster';
//Swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

//Swiper
SwiperCore.use([Navigation]);

const MoviesCarousel = ({
  nextMovie,
  prevMovie,
  sectionTitle,
  movieData,
  carouselName,
}) => {
  return (
    <CarouselContainer
      className="container"
      moviesLength={movieData && movieData.length}
      id="component"
    >
      <h2 className="section-title">{sectionTitle}</h2>
      <Swiper
        spaceBetween={15}
        slidesPerView={7}
        navigation={{ nextEl: nextMovie, prevEl: prevMovie }}
        className="swiper-container"
      >
        {movieData &&
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
