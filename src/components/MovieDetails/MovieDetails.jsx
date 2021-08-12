import React from 'react';
import { BsHeart, BsListTask } from 'react-icons/bs';
import {
  DetailsContainer,
  MovieImage,
  ImageContainer,
  MovieInfo,
  ButtonStyle,
  ButtonsContainer,
  MovieTitle,
  MovieActions,
} from './MovieDetailsStyles';
import { BsPlayFill } from 'react-icons/bs';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MovieDetails = ({
  movieDetail,
  genres,
  addToWatchlist,
  addToFavorite,
}) => {
  const timeConvert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <DetailsContainer>
      <ImageContainer>
        <MovieImage
          src={movieDetail.poster_path && IMAGE_URL + movieDetail.poster_path}
          alt={movieDetail.title}
        />
      </ImageContainer>
      <MovieInfo>
        <MovieTitle>
          <h1>{movieDetail.title}</h1>
          <div>
            <span className="release-date">
              {movieDetail.release_date} (US)
            </span>
            <ul>
              <li>{genres}</li>
              <li>{timeConvert(movieDetail.runtime)}</li>
            </ul>
          </div>
        </MovieTitle>
        <MovieActions>
          <div>
            <span className="vote">{movieDetail.vote_average}</span>
            <p>Vote Average</p>
          </div>
          <ButtonsContainer>
            <ButtonStyle onClick={addToFavorite} primary>
              <BsHeart className="list-icons" /> Favorite
            </ButtonStyle>
            <ButtonStyle onClick={addToWatchlist} secondary>
              <BsListTask className="list-icons" />
              Watchlist
            </ButtonStyle>

            <ButtonStyle className="trailer-btn">
              <BsPlayFill className="trailer-icon" />
              Play Trailer
            </ButtonStyle>
          </ButtonsContainer>
        </MovieActions>
        <div className="tagline">
          <span>{movieDetail.tagline}</span>
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <article>
            <p>{movieDetail.overview}</p>
          </article>
        </div>
      </MovieInfo>
    </DetailsContainer>
  );
};

export default MovieDetails;
