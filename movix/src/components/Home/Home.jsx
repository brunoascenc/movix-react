import React from "react";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
import Header from "../HomeHeader/Header";
import "../../App.css";


const Home = () => {
  return (
    <div>
      <Header />
      <UpcomingMovies />
      <PopularMovies />
    </div>
  );
};

export default Home;
