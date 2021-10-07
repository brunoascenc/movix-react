import React, { useEffect } from 'react';
import { fetchPopularMovies } from '../../redux/popular-movies/popularMoviesAction';
import { fetchUpcomingMovies } from '../../redux/upcoming-movies/upcomingActions';
import { fetchTopRatedMovies } from '../../redux/top-rated/topRatedActions';

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
  const topRated = useSelector((state) => state.topRated.data.results);
  const upcomingLoading = useSelector((state) => state.upcomingMovies.loading);
  const popularLoading = useSelector((state) => state.popularMovies.loading);
  const topRatedLoading = useSelector((state) => state.topRated.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
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
      <MoviesCarousel
        movieData={topRated}
        sectionTitle={'Top Rated'}
        nextMovie={'.next-toprated'}
        prevMovie={'.prev-toprated'}
        carouselName={'toprated'}
        loading={topRatedLoading}
      />
    </TrendingMoviesContainer>
  );
};

export default LandingMovies;
