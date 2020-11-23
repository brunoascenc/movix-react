import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";


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
      <Slider
        dots
        slidesToShow={3}
        speed={500}
        slidesToShow={6}
        slidesToScroll={1}
        initialSlide={0}
        autoplay
        infinite
        pauseOnHover
        swipeToSlide
      >
        {similarMovies &&
          similarMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    className="movie-poster"
                    src={IMAGE_URL + movie.poster_path}
                    data-movie-id={movie.id}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </Link>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default SimilarMovies;
