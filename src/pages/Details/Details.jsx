import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { fetchMovieDetail } from '../../redux/movie-details/movieDetailActions';
import { addToWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { addToFavorite } from '../../redux/user-favorites/favoritesUtils';
import { MovieBanner } from './DetailsPageStyles';
import MoviesCarousel from '../../components/MoviesCarousel/MoviesCarousel';

const Details = (props) => {
  //list buttons alert
  const alert = useAlert();
  const movieId = props.match.params.id;
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
          </div>
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
        </>
      )}
    </>
  );
};

export default Details;
