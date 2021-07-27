import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import useGenres from '../../hooks/useGenres';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../redux/movie-playing/nowPlayingActions';
import {LandingPageContainer, Overlay} from './LandingPageStyles'
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
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
      >
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <SwiperSlide
                key={movie.id}
                className="swiper-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(31, 28, 28, 0.2),#121212), url(${
                    'https://image.tmdb.org/t/p/original' + movie.backdrop_path
                  })`,
                }}
              >
                <Link to={`/details/${movie.id}`}>
                  <Overlay></Overlay>

                  <div className="landing-txt">
                    <div className="txt-align">
                      <h1>Now Playing </h1>
                      <span className="movie-title">{movie.title}</span>
                      <div>
                        <p className="movie-genres">{genreName(movie)}</p> |
                        <div className="movie-rating">
                          <i className="far fa-star"></i>
                          <p>{movie.vote_average}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </LandingPageContainer>
  );
};

export default LandingPage;
