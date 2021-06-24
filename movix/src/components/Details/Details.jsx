import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails/MovieDetails';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import MovieReviews from './MovieReviews/MovieReviews';
import MovieTrailer from './MovieTrailer/MovieTrailer';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMovieDetail,
  fetchMoviesRequest,
} from '../../redux/movie-details/getMovieDetail';

const Details = (props) => {
  const [loading] = useState(false);
  const movieId = props.match.params.id;

  const movieDetail = useSelector((state) => state.movieDetail.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesRequest());
    setTimeout(() => {
      dispatch(fetchMovieDetail(movieId));
    }, 1000);
  }, [movieId, dispatch]);

  const genres = movieDetail.genres;
  let genreOptions;
  if (genres) {
    genreOptions = genres.map((genre) => genre.name).join(', ');
  }

  return (
    <>
      {loading ? (
        <FullPageLoader />
      ) : (
        <>
          <div
            id="movie-banner"
            style={{
              backgroundImage: `url('${
                movieDetail.backdrop_path &&
                'https://image.tmdb.org/t/p/original' +
                  movieDetail.backdrop_path
              }')`,
            }}
          >
            <div>
              <MovieTrailer movieId={props.match.params.id} />
            </div>
          </div>

          <div className="about-movie container">
            {loading ? (
              <FullPageLoader />
            ) : (
              <MovieDetails movieDetail={movieDetail} genres={genreOptions} />
            )}
          </div>

          <div className="similar-section container">
            <div className="title-section">
              <span></span>
              <h1>Similar Movies</h1>
            </div>
          </div>

          <div className="similar-movies container">
            <SimilarMovies movieId={movieId} />
          </div>

          <div className="reviews-section container">
            <div className="title-section">
              <span></span>
              <h1>Reviews</h1>
            </div>
            <div className="movie-reviews">
              <MovieReviews movieId={movieId} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
