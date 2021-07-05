import React from 'react';
import PopularMovies from '../../components/PopularMovies/PopularMovies';
import UpcomingMovies from '../../components/UpcomingMovies/UpcomingMovies';
import LandingPage from '../../components/LandingPage/LandingPage';
import '../../App.css';

const Home = () => {
  return (
    <div>
      <LandingPage />
      <UpcomingMovies />
      <PopularMovies />
    </div>
  );
};

export default Home;
