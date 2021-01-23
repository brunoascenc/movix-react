import React from "react";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
// import LandingTxt from "./LandingTxt";
// import Header from "../Header/Header";
import LandingPage from '../LandingPage/LandingPage'
import "../../App.css";

const Home = () => {

  return (
    <div>
     
      {/* <div> */}
        {/* <Header /> */}
        {/* <LandingTxt /> */}
        <LandingPage/>
      {/* </div> */}
      <UpcomingMovies />
      <PopularMovies />
    </div>
  );
};

export default Home;
