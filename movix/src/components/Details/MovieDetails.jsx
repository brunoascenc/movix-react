import React from "react";
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MovieDetails = ({movieDetail, genres}) => {

  return (
    <div id="movie-detail">
      <div className="poster-movie">
        <img
          src={IMAGE_URL + movieDetail.poster_path}
          alt={movieDetail.title}
        />
        <div className="bgimg"></div>
      </div>
      <div className="details-container">
        <div className="movie-title">
          <span></span>
          <h1>{movieDetail.title}</h1>
        </div>
        <div className="overview">
          <div className="title-section">
            <span></span>
            <h1>Movie overview</h1>
          </div>
          <article>
            <p>{movieDetail.overview}</p>
          </article>
        </div>

        <div className="detail-info">
          <div className="title-section">
            <span></span>
            <h1>Movie Details</h1>
          </div>
          <ul>
            <li>
              <span className="contrast">Title:</span> {movieDetail.title}
            </li>
            <li>
              <span className="contrast">Release Date:</span>
              {movieDetail.release_date}
            </li>
            <li>
              <span className="contrast">Genre:</span> {genres}
            </li>

            <li>
              <span className="contrast">Duration:</span> {movieDetail.runtime}{" "}
              min
            </li>
            <li>
              <span className="contrast">Rating</span>{" "}
              {movieDetail.vote_average}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
