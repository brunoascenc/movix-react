import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/upcoming-movies/upcomingActions';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { UpcomingContainer } from './UpcomingStyles';
import { SliderNav } from '../SliderNav/SliderNav';

const UpcomingMovies = () => {
  const upcoming = useSelector((state) => state.upcomingMovies.results);
  const upcomingList = upcoming.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  //loop to hide broken images
  let upcomingMovies = [];
  for (let i in upcomingList) {
    if (upcomingList[i].poster_path) {
      upcomingMovies.push(upcomingList[i]);
    }
  }

  return (
    <UpcomingContainer className="upcoming-slide container">
      <h2 className="section-title">Coming soon</h2>
      <MoviesSwiper
        movieData={upcomingMovies}
        next={'.next-similar'}
        prev={'.prev-similar'}
      ></MoviesSwiper>
      <SliderNav
        movieslength={upcomingMovies}
        next={'next-similar'}
        prev={'prev-similar'}
      />
    </UpcomingContainer>
  );
};

export default UpcomingMovies;
