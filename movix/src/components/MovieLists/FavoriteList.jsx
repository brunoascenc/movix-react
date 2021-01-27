import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import GenreList from "../Genres/GenreList";
import "../../App.scss";


import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;


const FavoriteList = () => {
  const value = useContext(DataContext);
  const [favoriteMovies] = value.favoriteMovies
  const [genreName] = GenreList();

  return (
    <>
    <Swiper
        spaceBetween={65}
        slidesPerView={5}
        navigation={favoriteMovies.length > 5 ? true : false}
      >
        {favoriteMovies &&
          favoriteMovies.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-card">
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <div className="list-card" key={movie.id}>
                    <img
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                    <span className="movie-title">{movie.title}</span>
                    <span className="movie-genres">{genreName(movie)}</span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  )
};

export default FavoriteList;
