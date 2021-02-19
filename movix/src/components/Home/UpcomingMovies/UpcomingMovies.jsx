import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingMovies } from "../../../actions/getUpcomingMovies";
import useGenres from "../../hooks/useGenres";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Autoplay, Pagination]);

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
      </Swiper>
    </div>
  );
};

export default UpcomingMovies;
