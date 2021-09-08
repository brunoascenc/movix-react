import React, { useEffect } from 'react';
import { fetchPopularMovies } from '../../redux/popular-movies/popularMoviesAction';
import { fetchUpcomingMovies } from '../../redux/upcoming-movies/upcomingActions';
import { useSelector, useDispatch } from 'react-redux';
import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';

const LandingMovies = () => {
  const popular = useSelector((state) => state.popularMovies.data.results);
  const upcoming = useSelector((state) => state.upcomingMovies.data.results);
  const upcomingLoading = useSelector((state) => state.upcomingMovies.loading);
  const popularLoading = useSelector((state) => state.popularMovies.loading);
  // console.log(upcomingLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <>
      <MoviesCarousel
        movieData={upcoming}
        sectionTitle={'Coming soon'}
        nextMovie={'.next-upcoming'}
        prevMovie={'.prev-upcoming'}
        carouselName={'upcoming'}
        loading={upcomingLoading}
      />
      <MoviesCarousel
        movieData={popular}
        sectionTitle={'Popular Movies'}
        nextMovie={'.next-popular'}
        prevMovie={'.prev-popular'}
        carouselName={'popular'}
        loading={popularLoading}
      />
    </>
  );
};

export default LandingMovies;
