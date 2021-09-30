import React from 'react';
import NowPlayingSlider from '../../components/NowPlaying/NowPlayingMovies';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import FilterResults from '../../components/FilterResults/FilterResults';
import SearchResults from '../../components/SearchResults/SearchResults';
import LandingMovies from '../../components/TrendingMovies/TrendingMovies';
const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <NowPlayingSlider />
      <Switch>
        <Route exact path="/" component={LandingMovies} />

        <Route path="/filter/:genreId?/:orderBy?" component={FilterResults} />

        <Route path="/search=:searchQuery?" component={SearchResults} />
      </Switch>
    </HomeContainer>
  );
};

export default Home;
