import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import 'swiper/swiper.scss';


const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  const getSimilarMovie = () => {
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
  };

  useEffect(() => {
    getSimilarMovie();
  }, [movieId]);

  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={5}
      >
        {similarMovies &&
          similarMovies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
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
