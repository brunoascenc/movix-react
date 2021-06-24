import React, { useEffect } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useGenres from '../../hooks/useGenres';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSimilarMovies } from '../../../redux/similar-movies/getSimilarMovies';

//Swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

//Swiper
SwiperCore.use([Navigation, Autoplay]);

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SimilarMovies = ({ movieId }) => {
  const [genreName] = useGenres();
  const similar = useSelector((state) => state.similarMovies.results);
  const similarMovies = similar.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSimilarMovies(movieId));
  }, [movieId, dispatch]);

  //loop do hide broken images
  let similarResults = [];
  for (let i in similarMovies) {
    if (similarMovies[i].poster_path) {
      similarResults.push(similarMovies[i]);
    }
  }

  return (
    <>
      <Swiper
        spaceBetween={65}
        slidesPerView={5}
        navigation
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          390: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          780: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          920: {
            slidesPerView: 5,
            spaceBetween: 65,
          },
        }}
      >
        {similarResults &&
          similarResults.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-card">
                <Link to={`/details/${movie.id}`}>
                  <img
                    className="movie-poster"
                    src={IMAGE_URL + movie.poster_path}
                    data-movie-id={movie.id}
                    alt={movie.title}
                  />
                  <span className="movie-title">{movie.title}</span>
                  <span className="movie-genres">{genreName(movie)}</span>
                  <div className="movie-rating">
                    <i className="far fa-star"></i>
                    <p>{movie.vote_average}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default SimilarMovies;