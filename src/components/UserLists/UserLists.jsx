import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Empty from '../EmptyList/Empty';
import MoviePoster from '../MoviePoster/MoviePoster';
import MoviesSkeleton from '../MoviesSkeleton/MoviesSkeleton';
import {
  ListContainer,
  ListSection,
  Button,
  ListHeader,
  Filter,
  Select,
} from './UserListsStyles';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const UserLists = ({
  movies,
  onClick,
  userId,
  title,
  handleChange,
  loading,
}) => {
  return (
    <ListSection>
      <ListHeader>
        <h2 className="section-title">{title}</h2>
        <Filter>
          <h4>Sort by: </h4>
          <Select onChange={(e) => handleChange(e.target.value)}>
            <option value="desc"> Descending </option>
            <option value="asc"> Ascending </option>
          </Select>
        </Filter>
      </ListHeader>

      <ListContainer>
        {movies && movies.length === 0 ? (
          <Empty />
        ) : loading ? (
          Array(7)
            .fill()
            .map((item, index) => {
              return <MoviesSkeleton key={index} userList />;
            })
        ) : (
          movies &&
          movies.map((movie) => {
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
                  <Button onClick={() => onClick(userId.sessionId, movie.id)}>
                    <AiOutlineDelete className="delete-icon" />
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </ListContainer>
    </ListSection>
  );
};

export default UserLists;
