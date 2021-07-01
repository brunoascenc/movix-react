import React, { useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import useGenres from '../../hooks/useGenres';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSimilarMovies } from '../../redux/similar-movies/similarMoviesActions';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

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
      <MoviesSwiper>
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
                    <p>{movie.vote_average.toFixed(1)}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </MoviesSwiper>
      <MdKeyboardArrowLeft
        className={similarResults.length > 5 ? 'left-arrow' : 'hide-nav'}
      />
      <MdKeyboardArrowRight
        className={similarResults.length > 5 ? 'right-arrow' : 'hide-nav'}
      />
    </>
  );
};

export default SimilarMovies;
