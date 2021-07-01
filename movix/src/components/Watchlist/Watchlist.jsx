import React, { useEffect } from 'react';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  fetchWatchlistMovies,
  fetchWatchlistRequest,
} from '../../redux/user-watchlist/userWatchlistActions';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import { SwiperSlide } from 'swiper/react';
import useGenres from '../../hooks/useGenres';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const Watchlist = ({ userId, fetchWatchlistMovies, fetchRequest }) => {
  const [genreName] = useGenres();
  const watchlist = useSelector((state) => state.userWatchlist.results);
  // const loading = useSelector((state) => state.userWatchlist.loading);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchRequest());
    // setTimeout(() => {
    //   dispatch(fetchWatchlistMovies(userId.sessionId));
    // }, 1000);
    fetchWatchlistMovies(userId.sessionId);
  }, [userId.sessionId, fetchWatchlistMovies]);

  return (
    <div className="watchlist">
      <div className="title-section">
        <span></span>
        <h1>Your watchlist </h1>
      </div>
      <MoviesSwiper>
        {watchlist &&
          watchlist.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="swiper-card">
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <div className="list-card" key={movie.id}>
                    <img
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                    <span className="movie-title">{movie.title}</span>
                    <span className="movie-genres">{genreName(movie)}</span>
                  </div>
                </Link>
                <button
                  onClick={() =>
                    removeFromWatchlist(userId.sessionId, movie.id)
                  }
                >
                  <TiDeleteOutline />
                </button>
              </SwiperSlide>
            );
          })}
      </MoviesSwiper>
      <MdKeyboardArrowLeft className="left-arrow" />
      <MdKeyboardArrowRight className="right-arrow" />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
});

const mapDipatchToProps = (dispatch) => ({
  fetchWatchlistMovies: (id) => dispatch(fetchWatchlistMovies(id)),
  fetchRequest: () => dispatch(fetchWatchlistRequest()),
});

export default connect(mapStateToProps, mapDipatchToProps)(Watchlist);
