import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import {
  fetchMovieDetail,
  fetchDetailsRequest,
} from '../../redux/movie-details/movieDetailActions';
import { addToWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { addToFavorite } from '../../redux/user-favorites/favoritesUtils';
import { MovieBanner } from './DetailsPageStyles';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';

const Details = (props) => {
  const movieId = props.match.params.id;
  const movieDetail = useSelector((state) => state.movieDetail.results);
  const movieReviews = movieDetail.reviews;
  const movieTrailer = movieDetail.videos;
  const similarMovies = movieDetail.recommendations;
  const movieDate = movieDetail.release_dates;
  const userId = useSelector((state) => state.sessionId.sessionId);
  const loading = useSelector((state) => state.movieDetail.loading);
  const movieCast = movieDetail.credits;
  const alert = useAlert();
  const dispatch = useDispatch();
  const dates = movieDate && movieDate.results;

  // console.log(d && d.filter((xd) => xd.iso_3166_1 === 'US'));
  // console.log(d);
  useEffect(() => {
    dispatch(fetchDetailsRequest());
    setTimeout(() => {
      dispatch(fetchMovieDetail(movieId));
    }, 700);
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
          <MovieBanner backdrop={movieDetail.backdrop_path}></MovieBanner>

          <div className="about-movie container">
            {loading ? (
              <FullPageLoader />
            ) : (
              <MovieDetails
                movieDetail={movieDetail}
                genres={genreOptions}
                movieCast={movieCast}
                dates={dates}
                movieTrailer={movieTrailer}
                addToFavorite={
                  //check if theres no session id
                  !userId
                    ? () => {
                        alert.show('You must login first...');
                      }
                    : () =>
                        addToFavorite(
                          userId,
                          movieId,
                          alert.show('Movie added to the list!')
                        )
                }
                addToWatchlist={
                  //check if theres no session id
                  !userId
                    ? () => {
                        alert.show('You must login first...');
                      }
                    : () =>
                        addToWatchlist(
                          userId,
                          movieId,
                          alert.show('Movie added to the list!')
                        )
                }
              />
            )}
          </div>
          <SimilarMovies
            similarMovies={similarMovies && similarMovies.results}
          />

          <MovieReviews movieReviews={movieReviews && movieReviews.results} />
        </>
      )}
    </>
  );
};

export default Details;
