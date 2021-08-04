import React from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import {
  MovieImage,
  BannerContent,
  MovieTitle,
  HorizontalOverlay,
  BannerContainer,
} from './MovieBannerStyles';

function MovieBanner({ movieInfo }) {
  let firstMovie = movieInfo && movieInfo[0];

  return (
    <BannerContainer>
      {firstMovie ? (
        <MovieImage
          style={{
            backgroundImage: `linear-gradient(rgba(7, 5, 8, 0.4),rgb(7, 5, 8)), url(${
              'https://image.tmdb.org/t/p/original' + firstMovie.backdrop_path
            })`,
          }}
        >
          <BannerContent className="container">
            <MovieTitle>{firstMovie.title}</MovieTitle>
            <p>{firstMovie.overview}</p>

            <div>
              <CustomButton primary>Details</CustomButton>
              <CustomButton secondary>Watchlist</CustomButton>
            </div>
          </BannerContent>
        </MovieImage>
      ) : null}
      <HorizontalOverlay></HorizontalOverlay>
    </BannerContainer>
  );
}

export default MovieBanner;
