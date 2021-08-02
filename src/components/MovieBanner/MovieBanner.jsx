import React from 'react';
import {
  MovieImage,
  BannerContent,
  MovieTitle,
  Button,
} from './MovieBannerStyles';

function MovieBanner({ movieInfo }) {
  let firstMovie = movieInfo && movieInfo[0];

  return (
    <>
      {firstMovie ? (
        <MovieImage
          style={{
            backgroundImage: `linear-gradient(rgba(17, 16, 16, 0.3),rgb(10, 10, 14)), url(${
              'https://image.tmdb.org/t/p/original' + firstMovie.backdrop_path
            })`,
          }}
        >
          <BannerContent className="container">
            <MovieTitle>{firstMovie.title}</MovieTitle>
            <p>{firstMovie.overview}</p>

            <div>
              <Button primary>Details</Button>
              <Button secondary>Watchlist</Button>
            </div>
          </BannerContent>
        </MovieImage>
      ) : null}
    </>
  );
}

export default MovieBanner;