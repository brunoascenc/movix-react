import React from "react";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
import LandingTxt from "./LandingTxt";
import Header from "../Header/Header";
import "../../App.css";

const Home = () => {

  return (
    <div>
      <div id="landing-page">
        <Header />
        <LandingTxt />
      </div>
      <UpcomingMovies />
      <PopularMovies />
    </div>
  );
};

export default Home;
