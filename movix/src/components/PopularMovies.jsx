import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";

export default function PopularMovies({popularMovies}) {

  return (
    <>
      {popularMovies.map((movie) => {
        return (
          <div class="movie-item">
            <div class="img-container">
              {/* <img
                class="movie-poster"
                src={IMAGE_URL + movie[i].poster_path}
                data-movie-id={movie.id}
              /> */}
              <div class="details-btn">
                <button>Details</button>
              </div>
            </div>
            <span class="movie-title">${movie.title}</span>
            <div class="movie-rating">
              <i class="far fa-star"></i>
              <p>${movie.vote_average}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
