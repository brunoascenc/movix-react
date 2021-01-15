import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";

import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const UpcomingMovies = () => {
  const value = useContext(DataContext);
  const [upcoming] = value.upcoming;

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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {upcoming &&
          upcoming.map((movie) => {
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
                    <span className="movie-date">{movie.release_date}</span>
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
