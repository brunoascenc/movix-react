import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LandingPage from '../../components/LandingPage/LandingPage';
import '../../App.css';
import styled from 'styled-components';
import MoviesCarousel from '../../components/MoviesCarousel/MoviesCarousel';
import { fetchPopularMovies } from '../../redux/popular-movies/popularMoviesAction';
import { fetchUpcomingMovies } from '../../redux/upcoming-movies/upcomingActions';

const HomeContainer = styled.div``;

const Home = () => {
  const popular = useSelector((state) => state.popularMovies.data.results);
  const upcoming = useSelector((state) => state.upcomingMovies.data.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <HomeContainer>
      <LandingPage />
      {/* <UpcomingMovies /> */}
      <MoviesCarousel
        movieData={upcoming}
        sectionTitle={'Coming soon'}
        nextMovie={'.next-upcoming'}
        prevMovie={'.prev-upcoming'}
        carouselName={'upcoming'}
      />
      {/* <PopularMovies /> */}
      <MoviesCarousel
        movieData={popular}
        sectionTitle={'Popular Movies'}
        nextMovie={'.next-popular'}
        prevMovie={'.prev-popular'}
        carouselName={'popular'}
      />
    </HomeContainer>
  );
};

export default Home;
