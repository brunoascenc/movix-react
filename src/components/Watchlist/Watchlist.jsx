import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import Empty from '../EmptyList/Empty';
import { WatchlistContainer, WatchlistSection } from './WatchlistStyles';
import MoviePoster from '../MoviePoster/MoviePoster';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const Watchlist = ({ userId, fetchWatchlistMovies }) => {
  const watchlist = useSelector((state) => state.userWatchlist.results);

  useEffect(() => {
    fetchWatchlistMovies(userId.sessionId);
  }, [userId.sessionId, fetchWatchlistMovies]);

  return (
    <WatchlistSection>
      <h2 className="section-title">Your watchlist </h2>
      <WatchlistContainer>
        {watchlist.length === 0 ? (
          <Empty />
        ) : (
          watchlist &&
          watchlist.map((movie) => {
            return (
              <div key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <div className="list-card">
                    <MoviePoster
                      url={IMAGE_URL + movie.poster_path}
                      title={movie.title}
                      movieId={movie.id}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                  </div>
                </Link>
                {/* <button
                  onClick={() =>
                    removeFromWatchlist(userId.sessionId, movie.id)
                  }
                >
                  <TiDeleteOutline />
                </button> */}
              </div>
            );
          })
        )}
      </WatchlistContainer>
    </WatchlistSection>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectSessionId,
});

const mapDipatchToProps = (dispatch) => ({
  fetchWatchlistMovies: (id) => dispatch(fetchWatchlistMovies(id)),
});

export default connect(mapStateToProps, mapDipatchToProps)(Watchlist);
