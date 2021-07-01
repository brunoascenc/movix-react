import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import MovieTrailer from '../../components/MovieTrailer/MovieTrailer';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMovieDetail,
  fetchDetailsRequest,
} from '../../redux/movie-details/movieDetailActions';
import { addToWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { addToFavorite } from '../../redux/user-favorites/favoritesUtils';

const Details = (props) => {
  const movieId = props.match.params.id;
  const movieDetail = useSelector((state) => state.movieDetail.results);
  const userId = useSelector((state) => state.sessionId.sessionId);
  const loading = useSelector((state) => state.movieDetail.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsRequest());
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
              <MovieDetails
                movieDetail={movieDetail}
                genres={genreOptions}
                addToWatchlist={() => addToWatchlist(userId, movieId)}
                addToFavorite={() => addToFavorite(userId, movieId)}
              />
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
