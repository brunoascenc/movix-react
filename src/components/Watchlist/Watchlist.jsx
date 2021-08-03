import React, { useEffect } from 'react';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import { SwiperSlide } from 'swiper/react';
import useGenres from '../../hooks/useGenres';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Empty from '../EmptyList/Empty';
import { WatchlistContainer, SectionTitle, Image } from './WatchlistStyles';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const Watchlist = ({ userId, fetchWatchlistMovies }) => {
  const [genreName] = useGenres();
  const watchlist = useSelector((state) => state.userWatchlist.results);

  useEffect(() => {
    fetchWatchlistMovies(userId.sessionId);
  }, [userId.sessionId, fetchWatchlistMovies]);

  return (
    <>
      <SectionTitle>Your watchlist </SectionTitle>
      <WatchlistContainer>
        {/* <MoviesSwiper> */}
        {watchlist.length === 0 ? (
          <Empty />
        ) : (
          watchlist &&
          watchlist.map((movie) => {
            return (
              <>
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <div className="list-card" key={movie.id}>
                    <Image
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                    {/* <span className="movie-title">{movie.title}</span>
                    <span className="movie-genres">{genreName(movie)}</span> */}
                  </div>
                </Link>
                {/* <button
                  onClick={() =>
                    removeFromWatchlist(userId.sessionId, movie.id)
                  }
                >
                  <TiDeleteOutline />
                </button> */}
              </>
            );
          })
        )}
        {/* </MoviesSwiper>
      <MdKeyboardArrowLeft
        className={watchlist.length > 5 ? 'left-arrow' : 'hide-nav'}
      />
      <MdKeyboardArrowRight
        className={watchlist.length > 5 ? 'right-arrow' : 'hide-nav'}
      /> */}
      </WatchlistContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
});

const mapDipatchToProps = (dispatch) => ({
  fetchWatchlistMovies: (id) => dispatch(fetchWatchlistMovies(id)),
});

export default connect(mapStateToProps, mapDipatchToProps)(Watchlist);
