import React from "react";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
import LandingPage from "../LandingPage/LandingPage";
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
