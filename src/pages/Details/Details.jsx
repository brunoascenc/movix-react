import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieReviews from '../../components/MovieDetails/MovieReviews';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieDetail } from '../../redux/movie-details/movieDetailActions';
import { MovieBanner, DetailsSection } from './DetailsPageStyles';
import MoviesCarousel from '../../components/MoviesCarousel/MoviesCarousel';
import { useParams } from 'react-router';
import AlertMessage from '../../hooks/useAlertMessage';

const Details = () => {
  //list buttons alert
  const [addToFavoriteList, addMovieToWatchlist] = AlertMessage();
  const { movieId } = useParams();
  //redux data
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail.results);
  const movieDate = movieDetail.release_dates;
  const userId = useSelector((state) => state.sessionId.sessionId);
  const loading = useSelector((state) => state.movieDetail.loading);
  const dates = movieDate && movieDate.results;

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
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
          {loading ? (
            <FullPageLoader loading={loading} />
          ) : (
            <MovieDetails
              movieDetail={movieDetail}
              genres={genresList}
              movieCast={movieDetail.credits}
              dates={dates}
              movieTrailer={movieDetail.videos}
              addToFavorite={() => addToFavoriteList(movieId, userId)}
              addToWatchlist={() => addMovieToWatchlist(movieId, userId)}
            />
          )}
          <MoviesCarousel
            movieData={
              movieDetail.recommendations && movieDetail.recommendations.results
            }
            sectionTitle={'Similar Movies'}
            nextMovie={'.next-similar'}
            prevMovie={'.prev-similar'}
            carouselName={'similar'}
          />
          <MovieReviews
            movieReviews={movieDetail.reviews && movieDetail.reviews.results}
          />
        </DetailsSection>
      )}
    </>
  );
};

export default Details;
