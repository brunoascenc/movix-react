import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../App.css";

import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Autoplay]);

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`
      )
      .then((res) => {
        const response = res.data;
        setSimilarMovies(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                  <p>{movie.title}</p>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default SimilarMovies;
