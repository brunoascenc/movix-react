import React from 'react';
import { BsHeart, BsListTask } from 'react-icons/bs';
import {
  DetailsContainer,
  MovieImage,
  ImageContainer,
  MovieInfo,
  ButtonStyle,
  ButtonsContainer,
} from './MovieDetailsStyles';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MovieDetails = ({
  movieDetail,
  genres,
  addToWatchlist,
  addToFavorite,
}) => {
  return (
    <DetailsContainer>
      <ImageContainer>
        <MovieImage
          src={movieDetail.poster_path && IMAGE_URL + movieDetail.poster_path}
          alt={movieDetail.title}
        />
      </ImageContainer>
      <MovieInfo>
        {/* <h1>{movieDetail.title}</h1> */}
        <div className="overview">
          <h1>Movie overview</h1>
          <article>
            <p>{movieDetail.overview}</p>
          </article>
        </div>

        <div className="detail-info">
          <h1>Details</h1>
          <ul>
            <li>
              <span className="contrast">Title:</span> {movieDetail.title}
            </li>
            <li>
              <span className="contrast">Release Date: </span>
              {movieDetail.release_date}
            </li>
            <li>
              <span className="contrast">Genre:</span> {genres}
            </li>

            <li>
              <span className="contrast">Duration:</span> {movieDetail.runtime}{' '}
              min
            </li>
            <li>
              <span className="contrast">Rating:</span>{' '}
              {movieDetail.vote_average}
            </li>
          </ul>
        </div>
        <ButtonsContainer>
          <ButtonStyle onClick={addToFavorite} primary>
            <BsHeart className="list-icons" /> Favorite
          </ButtonStyle>
          <ButtonStyle onClick={addToWatchlist} secondary>
            <BsListTask className="list-icons" />
            Watchlist
          </ButtonStyle>
        </ButtonsContainer>
      </MovieInfo>
    </DetailsContainer>
  );
};

export default MovieDetails;
