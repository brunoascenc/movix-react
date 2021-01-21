import React, {useContext} from 'react'
import { DataContext } from "../../data/DataProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import "../../App.css";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Autoplay]);

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const NowPlaying = () => {
    const value = useContext(DataContext);
    const [nowPlaying] = value.nowPlaying
    console.log(nowPlaying)


    return (
        <>
            <Swiper
        spaceBetween={65}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-card">
                <Link to={`/details/${movie.id}`}>
                  <img
                    className="movie-poster"
                    src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
                    data-movie-id={movie.id}
                    alt={movie.title}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
            
        </>
    )
}

export default NowPlaying
