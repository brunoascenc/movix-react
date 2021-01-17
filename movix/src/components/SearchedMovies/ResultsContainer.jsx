import React from 'react'
import GenreList from '../Genres/GenreList'
import { Link } from "react-router-dom";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const ResultsContainer = ({search, searchQuery}) => {
  const [genreName] = GenreList()

    return (
     <div className="search-results">
      <div className="container">
      <div className="title-section">
        <span></span>
        <h1>You searched for {searchQuery}</h1>
      </div>
      <div id="movies-container">
         {search &&
          search.map((movie) => {
            return (
              <div key={movie.id} className="movie-item">
                <Link to={`/details/${movie.id}`}>
                  <div className="img-container">
                    <img
                    //   onError={handleImgErr}
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      alt={IMAGE_URL}
                      data-movie-id={movie.id}
                    />
                    <div className="details-btn">
                      <button>Details</button>
                    </div>
                  </div>
                </Link>
                <span className="movie-title">{movie.title}</span>
                <span className="movie-genres">{genreName(movie)}</span>
                <div className="movie-rating">
                  <i className="far fa-star"></i>
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            );
          }) } 
      </div>
    </div>
    </div>
    )
}

export default ResultsContainer
