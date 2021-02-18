import React from "react";
import PopularMovies from "./PopularMovies/PopularMovies";
import UpcomingMovies from "./UpcomingMovies/UpcomingMovies";
import LandingPage from "./LandingPage/LandingPage";
import "../../App.css";

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
