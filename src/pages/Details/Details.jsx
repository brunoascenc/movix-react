import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import MovieTrailer from '../../components/MovieTrailer/MovieTrailer';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import {
  fetchMovieDetail,
  fetchDetailsRequest,
} from '../../redux/movie-details/movieDetailActions';
import { addToWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { addToFavorite } from '../../redux/user-favorites/favoritesUtils';
import {
  MovieBanner,
  // SimilarContainer,
  // ReviewsContainer,
  // ReviewsSection,
  // Video,
} from './DetailsPageStyles';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';

const Details = (props) => {
  const movieId = props.match.params.id;
  const movieDetail = useSelector((state) => state.movieDetail.results);
  const userId = useSelector((state) => state.sessionId.sessionId);
  const loading = useSelector((state) => state.movieDetail.loading);
  const alert = useAlert();
  const dispatch = useDispatch();

  console.log(movieDetail);

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
          <MovieBanner backdrop={movieDetail.backdrop_path}>
            <div>
              <MovieTrailer movieId={props.match.params.id} />
            </div>
          </MovieBanner>

          <div className="about-movie container">
            {loading ? (
              <FullPageLoader />
            ) : (
              <MovieDetails
                movieDetail={movieDetail}
                genres={genreOptions}
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
          <SimilarMovies movieId={movieId} />

          <MovieReviews movieId={movieId} />
        </>
      )}
    </>
  );
};

export default Details;
