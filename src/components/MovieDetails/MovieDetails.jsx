import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import MovieTrailer from '../MovieTrailer/MovieTrailer';
import {
  DetailsContainer,
  MovieImage,
  ImageContainer,
  MovieInfo,
  ButtonStyle,
  ButtonsContainer,
  MovieTitle,
  MovieActions,
  MovieCast,
} from './MovieDetailsStyles';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MovieDetails = ({
  movieDetail,
  genres,
  addToWatchlist,
  addToFavorite,
  movieCast,
  dates,
  movieTrailer,
}) => {
  const timeConvert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}m`;
  };

  const releaseInfo =
    dates && dates.filter((dates) => dates.iso_3166_1 === 'US');

  return (
    <DetailsContainer>
      <ImageContainer
        overviewLength={movieDetail.overview && movieDetail.overview.length}
      >
        <MovieImage
          src={movieDetail.poster_path && IMAGE_URL + movieDetail.poster_path}
          alt={movieDetail.title}
          overviewLength={movieDetail.overview && movieDetail.overview.length}
        />
      </ImageContainer>
      <MovieInfo>
        <MovieTitle
          certification={
            releaseInfo && releaseInfo[0]
              ? releaseInfo[0].release_dates[0].certification
              : ''
          }
        >
          <h1>{movieDetail.title}</h1>
          <div>
            <div className="release-date">
              <span className="certification">
                {releaseInfo && releaseInfo[0]
                  ? releaseInfo[0].release_dates[0].certification
                  : ''}
              </span>
              <span className="movie-date">
                {movieDetail && movieDetail.release_date + ' (US)'}
              </span>
            </div>
            <ul>
              <li>{genres}</li>
              <li>{timeConvert(movieDetail.runtime)}</li>
            </ul>
          </div>
        </MovieTitle>
        <MovieActions>
          <div className="vote-average">
            <span className="vote">{movieDetail.vote_average}</span>
            <p>Vote Average</p>
          </div>
          <ButtonsContainer>
            <ButtonStyle onClick={addToFavorite} primary>
              <AiOutlineStar className="list-icons" /> Favorite
            </ButtonStyle>
            <ButtonStyle onClick={addToWatchlist} secondary>
              <BsBookmark className="list-icons" />
              Watchlist
            </ButtonStyle>

            <MovieTrailer movieTrailer={movieTrailer && movieTrailer.results} />
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
        <MovieCast>
          {movieCast &&
            movieCast.cast.slice(0, 6).map((cast) => {
              return (
                <div key={cast.id}>
                  <span className="name">{cast.name}</span>
                  <span className="character">{cast.character}</span>
                </div>
              );
            })}
        </MovieCast>
      </MovieInfo>
    </DetailsContainer>
  );
};

export default MovieDetails;
