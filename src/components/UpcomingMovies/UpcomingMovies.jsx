import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/upcoming-movies/upcomingActions';
import useGenres from '../../hooks/useGenres';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';

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
    <div className="upcoming-slide container">
      <div className="title-section">
        <span></span>
        <h1>Upcoming Movies</h1>
      </div>
      <MoviesSwiper>
        {upcomingMovies &&
          upcomingMovies.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-card">
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <div className="upcoming-card" key={movie.id}>
                    <img
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                    <span className="movie-title">{movie.title}</span>
                    <span className="movie-date">{movie.release_date}</span>
                    <span className="movie-genres">{genreName(movie)}</span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </MoviesSwiper>
      <MdKeyboardArrowLeft className="left-arrow" />
      <MdKeyboardArrowRight className="right-arrow" />
    </div>
  );
};

export default UpcomingMovies;
