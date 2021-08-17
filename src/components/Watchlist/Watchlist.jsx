import React from 'react';
import { Link } from 'react-router-dom';
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

const Watchlist = ({ userId, moviesWatchlist }) => {
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
                <div className="poster-card">
                  <Link to={`/details/${movie.id}`}>
                    <MoviePoster
                      url={IMAGE_URL + movie.poster_path}
                      title={movie.title}
                      movieId={movie.id}
                      data-movie-id={movie.id}
                      alt={movie.title}
                    />
                  </Link>
                  <Button
                    onClick={() =>
                      removeFromWatchlist(userId.sessionId, movie.id)
                    }
                  >
                    <AiOutlineDelete className="delete-icon" />
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </WatchlistContainer>
    </WatchlistSection>
  );
};

export default Watchlist;
