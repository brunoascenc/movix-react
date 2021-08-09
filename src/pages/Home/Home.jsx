import React from 'react';
import PopularMovies from '../../components/PopularMovies/PopularMovies';
import UpcomingMovies from '../../components/UpcomingMovies/UpcomingMovies';
import LandingPage from '../../components/LandingPage/LandingPage';
import '../../App.css';
import styled from 'styled-components';

const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <LandingPage />
      <UpcomingMovies />
      <PopularMovies />
    </HomeContainer>
  );
};

export default Home;
