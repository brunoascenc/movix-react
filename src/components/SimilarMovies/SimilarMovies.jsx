import React from 'react';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { SimilarContainer } from './SimilarMoviesStyles';
import { SliderNav } from '../SliderNav/SliderNav';

const SimilarMovies = ({ similarMovies }) => {
  //loop do hide broken images
  let similarResults = [];
  for (let i in similarMovies) {
    if (similarMovies[i].poster_path) {
      similarResults.push(similarMovies[i]);
    }
  }

  return (
    <SimilarContainer
      className="container"
      similarLength={similarResults.length}
    >
      <h2 className="section-title">Similar Movies</h2>
      <MoviesSwiper
        movieData={similarResults}
        next={'.next-similar'}
        prev={'.prev-similar'}
      ></MoviesSwiper>
      <SliderNav
        movieslength={similarResults}
        next={'next-similar'}
        prev={'prev-similar'}
      />
    </SimilarContainer>
  );
};

export default SimilarMovies;
