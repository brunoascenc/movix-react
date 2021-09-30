import React, { useEffect } from 'react';
import { fetchPopularMovies } from '../../redux/popular-movies/popularMoviesAction';
import { fetchUpcomingMovies } from '../../redux/upcoming-movies/upcomingActions';
import { useSelector, useDispatch } from 'react-redux';
import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';
import styled from 'styled-components';

const TrendingMoviesContainer = styled.section`
  max-width: 1400px;
  width: 100%;
  padding: 0 3% 0 3%;
  margin: 0 auto;
`;

const LandingMovies = () => {
  const popular = useSelector((state) => state.popularMovies.data.results);
  const upcoming = useSelector((state) => state.upcomingMovies.data.results);
  const upcomingLoading = useSelector((state) => state.upcomingMovies.loading);
  const popularLoading = useSelector((state) => state.popularMovies.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <TrendingMoviesContainer>
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
    </TrendingMoviesContainer>
  );
};

export default LandingMovies;
