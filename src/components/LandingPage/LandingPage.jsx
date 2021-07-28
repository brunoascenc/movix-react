import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import useGenres from '../../hooks/useGenres';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../redux/movie-playing/nowPlayingActions';
import {
  LandingPageContainer,
  Overlay,
  LandingMovieTitle,
  LandingText,
  LandingInfo,
} from './LandingPageStyles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

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
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        //   type: 'progressbar',
        // }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <SwiperSlide
                key={movie.id}
                className="swiper-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(17, 16, 16, 0.034),rgb(10, 10, 14)), url(${
                    'https://image.tmdb.org/t/p/original' + movie.backdrop_path
                  })`,
                }}
              >
                <Link to={`/details/${movie.id}`}>
                  <Overlay></Overlay>

                  <LandingText>
                    <div className="txt-align">
                      {/* <h1>Now Playing </h1> */}
                      <LandingMovieTitle>{movie.title}</LandingMovieTitle>
                        <a>
                          Details
                        </a>
                      {/* <LandingInfo>
                        <p className="movie-genres">{genreName(movie)}</p> |
                        <div className="movie-rating">
                          <i className="far fa-star"></i>
                          <p>{movie.vote_average}</p>
                        </div>
                      </LandingInfo> */}
                    </div>
                  </LandingText>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </LandingPageContainer>
  );
};

export default LandingPage;
