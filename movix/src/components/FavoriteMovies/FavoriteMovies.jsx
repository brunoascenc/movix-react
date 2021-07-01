import React, { useEffect } from 'react';
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { fetchFavoriteMovies } from '../../redux/user-favorites/userFavoritesActions';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import { SwiperSlide } from 'swiper/react';
import useGenres from '../../hooks/useGenres';
import { removeFromFavorite } from '../../redux/user-favorites/favoritesUtils';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const FavoriteMovies = ({ userId, fetchFavoriteMovies }) => {
  const [genreName] = useGenres();
  const favorites = useSelector((state) => state.userFavorites.results);

  useEffect(() => {
    fetchFavoriteMovies(userId.sessionId);
  }, [userId.sessionId, fetchFavoriteMovies]);

  return (
    <div className="watchlist">
      <div className="title-section">
        <span></span>
        <h1>Your favorite movies </h1>
      </div>
      <MoviesSwiper>
        {favorites &&
          favorites.map((movie) => {
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
                  onClick={() => removeFromFavorite(userId.sessionId, movie.id)}
                >
                  <TiDeleteOutline />
                </button>
              </SwiperSlide>
            );
          })}
      </MoviesSwiper>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
});

const mapDipatchToProps = (dispatch) => ({
  fetchFavoriteMovies: (id) => dispatch(fetchFavoriteMovies(id)),
});

export default connect(mapStateToProps, mapDipatchToProps)(FavoriteMovies);
