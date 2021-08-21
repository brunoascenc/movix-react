import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import useGenres from '../../hooks/useGenres';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../redux/movie-playing/nowPlayingActions';
import {
  LandingPageContainer,
  LandingMovieTitle,
  LandingText,
  LandingInfo,
  LinkLanding,
} from './LandingPageStyles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { CustomButton } from '../CustomButton/CustomButton';
import { HorizontalOverlay } from '../HorizontalOverlay/HorizontalOverlay';
SwiperCore.use([Navigation, Autoplay, Pagination]);

const LandingPage = () => {
  const [genreName] = useGenres();
  const nowPlayingMovies = useSelector((state) => state.nowPlaying.results);
  const nowPlaying = nowPlayingMovies.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  return (
    <LandingPageContainer>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <SwiperSlide
                key={movie.id}
                className="swiper-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(7, 5, 8, 0.4),rgb(7, 5, 8)), url(${
                    'https://image.tmdb.org/t/p/original' + movie.backdrop_path
                  })`,
                }}
              >
                <LinkLanding to={`/details/${movie.id}`}>
                  <LandingText className="container">
                    <LandingMovieTitle>{movie.title}</LandingMovieTitle>
                    {/* <LandingInfo>
                      <p className="movie-genres">{genreName(movie)}</p>
                      <div className="movie-rating">
                        <i className="far fa-star"></i>
                        <p>{movie.vote_average}</p>
                      </div>
                    </LandingInfo> */}

                    <div>
                      <CustomButton primary>Details</CustomButton>
                      <CustomButton secondary>Watchlist</CustomButton>
                    </div>
                  </LandingText>
                </LinkLanding>
                <HorizontalOverlay
                  overlay={
                    'linear-gradient(to right, rgb(7, 5, 8, 0.5) 15%, transparent 55%)'
                  }
                ></HorizontalOverlay>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </LandingPageContainer>
  );
};

export default LandingPage;
