import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieReviews from '../../components/MovieDetails/MovieReviews';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import {
  fetchDetailsRequest,
  fetchMovieDetail,
} from '../../redux/movie-details/movieDetailActions';
import { addToWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { addToFavorite } from '../../redux/user-favorites/favoritesUtils';
import { MovieBanner, DetailsSection } from './DetailsPageStyles';
import MoviesCarousel from '../../components/MoviesCarousel/MoviesCarousel';
import { useParams } from 'react-router';

const Details = () => {
  //list buttons alert
  const alert = useAlert();
  const { movieId } = useParams();
  //redux data
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail.results);
  const movieDate = movieDetail.release_dates;
  const userId = useSelector((state) => state.sessionId.sessionId);
  const loading = useSelector((state) => state.movieDetail.loading);
  const dates = movieDate && movieDate.results;

  useEffect(() => {
    dispatch(fetchDetailsRequest());
    setTimeout(() => {
      dispatch(fetchMovieDetail(movieId));
    }, 500);
  }, [movieId, dispatch]);

  let genresList;
  if (movieDetail.genres) {
    genresList = movieDetail.genres.map((genre) => genre.name).join(', ');
  }

  return (
    <>
      <MovieBanner backdrop={movieDetail.backdrop_path} />
      {loading ? (
        <>
          <FullPageLoader />
        </>
      ) : (
        <DetailsSection>
          {/* <MovieBanner backdrop={movieDetail.backdrop_path} /> */}

          {loading ? (
            <FullPageLoader loading={loading} />
          ) : (
            <MovieDetails
              movieDetail={movieDetail}
              genres={genresList}
              movieCast={movieDetail.credits}
              dates={dates}
              movieTrailer={movieDetail.videos}
              addToFavorite={
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

          {/* similar movies */}
          <MoviesCarousel
            movieData={
              movieDetail.recommendations && movieDetail.recommendations.results
            }
            sectionTitle={'Similar Movies'}
            nextMovie={'.next-similar'}
            prevMovie={'.prev-similar'}
            carouselName={'similar'}
          />
          {/* movie reviews */}
          <MovieReviews
            movieReviews={movieDetail.reviews && movieDetail.reviews.results}
          />
        </DetailsSection>
      )}
    </>
  );
};

export default Details;
