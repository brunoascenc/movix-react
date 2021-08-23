import React from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { HorizontalOverlay } from '../HorizontalOverlay/HorizontalOverlay';
import {
  MovieImage,
  BannerContent,
  MovieTitle,
  BannerContainer,
} from './MovieBannerStyles';

function MovieBanner({ movieInfo }) {
  let firstMovie = movieInfo && movieInfo[0];
  return (
    <BannerContainer>
      {firstMovie ? (
        <MovieImage
          style={{
            backgroundImage: `linear-gradient(rgba(11, 9, 13, 0.4),rgb(11, 9, 13)), url(${
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
      <HorizontalOverlay
        overlay={
          'linear-gradient(to right, rgb(11, 9, 13, 0.7) 30%, transparent 65%)'
        }
      ></HorizontalOverlay>
    </BannerContainer>
  );
}

export default MovieBanner;
