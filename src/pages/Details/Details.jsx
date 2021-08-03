import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
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
  HorizontalOverlay,
  SimilarContainer,
  SectionTitle,
  ReviewsContainer,
  ReviewsSection,
} from './DetailsPageStyles';

const Details = (props) => {
  const movieId = props.match.params.id;
  const movieDetail = useSelector((state) => state.movieDetail.results);
  const userId = useSelector((state) => state.sessionId.sessionId);
  const loading = useSelector((state) => state.movieDetail.loading);
  const similar = useSelector((state) => state.similarMovies.results);
  const reviews = useSelector((state) => state.movieReview.results);
  const movieReviews = reviews.results;
  const alert = useAlert();
  const similarMovies = similar.results;
  const dispatch = useDispatch();

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
            <HorizontalOverlay></HorizontalOverlay>
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

          {similarMovies && similarMovies.length === 0 ? (
            ''
          ) : (
            <SimilarContainer className="container">
              <SectionTitle>Similar Movies</SectionTitle>
            </SimilarContainer>
          )}

          <SimilarContainer className="container">
            <SimilarMovies movieId={movieId} />
          </SimilarContainer>

          <ReviewsSection className="container">
            {movieReviews && movieReviews.length <= 0 ? (
              ''
            ) : (
              <>
                <SectionTitle>Reviews</SectionTitle>
              </>
            )}
            <ReviewsContainer>
              <MovieReviews movieId={movieId} />
            </ReviewsContainer>
          </ReviewsSection>
        </>
      )}
    </>
  );
};

export default Details;
