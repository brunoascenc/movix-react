import React from 'react';
import LandingPage from '../../components/LandingPage/LandingPage';
import '../../App.css';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import FilterResults from '../../components/FilterResults/FilterResults';
import SearchResults from '../../components/SearchResults/SearchResults';
import LandingMovies from '../../components/LandingMovies/LandingMovies';

const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <LandingPage />
      <Switch>
        <Route exact path="/" component={LandingMovies} />

        <Route path="/filter/:genreId?/:orderBy?" component={FilterResults} />

        <Route path="/search=:searchQuery?" component={SearchResults} />
      </Switch>
    </HomeContainer>
  );
};

export default Home;
