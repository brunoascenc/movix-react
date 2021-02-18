import React, { useContext } from "react";
import { DataContext } from "../../../data/DataProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import useGenres from '../../hooks/useGenres'
import { Link } from "react-router-dom";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const LandingPage = () => {
  const value = useContext(DataContext);
  const [nowPlaying] = value.nowPlaying;
  const [genreName] = useGenres();

  return (
    <section className="landing-page">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          type: "progressbar",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <SwiperSlide
                key={movie.id}
                className="swiper-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(14, 14, 13, 0.89)), url(${
                    "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                  })`,
                }}
              >
                <Link to={`/details/${movie.id}`}>
                  <div className="overlay"></div>

                  <div className="landing-txt">
                    <div className="txt-align">
                      <h1>Now Playing </h1>
                      <span className="movie-title">{movie.title}</span>
                      <div>
                        <p className="movie-genres">{genreName(movie)}</p> |
                        <div className="movie-rating">
                          <i className="far fa-star"></i>
                          <p>{movie.vote_average}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default LandingPage;
