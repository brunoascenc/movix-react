import React from "react";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";
import Header from "../HomeHeader/Header";
import SearchResults from '../SearchedMovies/SearchResults'
// import SearchActions from '../../actions/SearchActions'
import "../../App.css";


const Home = () => {
  // const [getSearch, setMovieName] = SearchActions()

  return (
    <div>
      <Header />
      {/* <SearchResults/> */}
      <UpcomingMovies />
      <PopularMovies />
    </div>
  );
};

export default Home;
