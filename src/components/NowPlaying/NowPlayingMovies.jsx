import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../redux/movie-playing/nowPlayingActions';
import {
  NowPlayingContainer,
  PlayingMovieTitle,
  NowPlayingActions,
  DetailsLink,
  NowPlayingActionsContainer,
  Buttons,
} from './NowPlayingStyles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { HorizontalOverlay } from '../HorizontalOverlay/HorizontalOverlay';
import { addToWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { useAlert } from 'react-alert';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const NowPlayingSlider = () => {
  const nowPlayingMovies = useSelector((state) => state.nowPlaying.results);
  const nowPlaying = nowPlayingMovies.results;
  const alert = useAlert();
  const userId = useSelector((state) => state.sessionId.sessionId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  const handleWatchList = (movieId) => {
    if (!userId) return alert.show('You must login first...');
    if (userId)
      return addToWatchlist(
        userId,
        movieId,
        alert.show('Movie added to the list!')
      );
  };

  return (
    <NowPlayingContainer>
      <Swiper
        slidesPerView={1}
        className="swiper"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {nowPlaying &&
          nowPlaying
            .filter((movie) => movie.vote_count > 1500)
            .map((movie) => {
              return (
                <SwiperSlide
                  key={movie.id}
                  className="swiper-card"
                  style={{
                    backgroundImage: ` url(${
                      'https://image.tmdb.org/t/p/original' +
                      movie.backdrop_path
                    })`,
                  }}
                >
                  <NowPlayingActionsContainer>
                    <NowPlayingActions>
                      <DetailsLink to={`/details/${movie.id}`}>
                        <PlayingMovieTitle>{movie.title}</PlayingMovieTitle>
                      </DetailsLink>
                      <div>
                        <DetailsLink to={`/details/${movie.id}`}>
                          <Buttons primary>Details</Buttons>
                        </DetailsLink>
                        <Buttons
                          onClick={() => handleWatchList(movie.id)}
                          secondary
                        >
                          Watchlist
                        </Buttons>
                      </div>
                    </NowPlayingActions>
                  </NowPlayingActionsContainer>

                  <HorizontalOverlay
                    overlay={
                      'linear-gradient(to right, rgb(7, 5, 8, 0.6) 15%, transparent 55%)'
                    }
                  ></HorizontalOverlay>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </NowPlayingContainer>
  );
};

export default NowPlayingSlider;
