import React, { useContext }  from 'react'
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import '../App.css'

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
        {upcoming &&
          upcoming.map((movie) => {
            return (
              <div className="upcoming-card" key={movie.id}>
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
    </div>
    )
}

export default UpcomingMovies
