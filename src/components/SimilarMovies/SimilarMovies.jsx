import React, { useEffect } from 'react';
// import { SwiperSlide } from 'swiper/react';
// import useGenres from '../../hooks/useGenres';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSimilarMovies } from '../../redux/similar-movies/similarMoviesActions';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { SimilarContainer } from './SimilarMoviesStyles';
import { SliderNav } from '../SliderNav/SliderNav';

// const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SimilarMovies = ({ movieId }) => {
  // const [genreName] = useGenres();
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
    <SimilarContainer
      className="container"
      similarLength={similarResults.length}
    >
      <h2 className="section-title">Similar Movies</h2>
      <MoviesSwiper
        movieData={similarResults}
        next={'.next-similar'}
        prev={'.prev-similar'}
      ></MoviesSwiper>
      <SliderNav next={'next-similar'} prev={'prev-similar'} />
    </SimilarContainer>
  );
};

export default SimilarMovies;
