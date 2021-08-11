import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWatchlistMovies } from '../../redux/user-watchlist/userWatchlistActions';
import { createStructuredSelector } from 'reselect';
import { selectSessionId } from '../../redux/user-session/userSessionSelector';
import Empty from '../EmptyList/Empty';
import {
  WatchlistContainer,
  WatchlistSection,
  Button,
  WatchlistHeader,
  Filter,
  Select,
} from './WatchlistStyles';
import MoviePoster from '../MoviePoster/MoviePoster';
import { removeFromWatchlist } from '../../redux/user-watchlist/watchlistUtils';
import { AiOutlineDelete } from 'react-icons/ai';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const Watchlist = ({ userId, fetchWatchlistMovies }) => {
  const watchlist = useSelector((state) => state.userWatchlist.results);
  const moviesWatchlist = watchlist.results;

  useEffect(() => {
    fetchWatchlistMovies(userId.sessionId);
  }, [userId.sessionId, fetchWatchlistMovies]);

  return (
    <WatchlistSection>
      <WatchlistHeader>
        <h2 className="section-title">My Watchlist</h2>
        <Filter>
          <h4>Sort by: </h4>
          <Select>
            <option value=""> Ascending </option>
            <option value=""> Descending </option>
          </Select>
        </Filter>
      </WatchlistHeader>

      <WatchlistContainer>
        {moviesWatchlist && moviesWatchlist.length === 0 ? (
          <Empty />
        ) : (
          moviesWatchlist &&
          moviesWatchlist.map((movie) => {
            return (
              <div className="poster-container" key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <div className="poster-card">
                    <MoviePoster
                      url={IMAGE_URL + movie.poster_path}
                      title={movie.title}
                      movieId={movie.id}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                  </div>
                </Link>
                <Button
                  onClick={() =>
                    removeFromWatchlist(userId.sessionId, movie.id)
                  }
                >
                  Remove <AiOutlineDelete className="delete-icon" />
                </Button>
              </div>
            );
          })
        )}
      </WatchlistContainer>
      <span>Total: {watchlist.total_results}</span>
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
