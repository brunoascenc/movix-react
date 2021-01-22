import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import GenreList from "../Genres/GenreList";
import { Link } from "react-router-dom";
import "../../App.css";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Autoplay]);

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const LandingPage = () => {
  const value = useContext(DataContext);
  const [nowPlaying] = value.nowPlaying;
  const [genreName] = GenreList();

  return (
    <section className="landing-page">
      <Swiper
        // spaceBetween={65}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-card">
                <Link to={`/details/${movie.id}`}>
                  <img
                    className="movie-poster"
                    src={
                      "https://image.tmdb.org/t/p/original" +
                      movie.backdrop_path
                    }
                    data-movie-id={movie.id}
                    alt={movie.title}
                  />
                  <div className="overlay"></div>

                  <div className="landing-txt">
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
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default LandingPage;
