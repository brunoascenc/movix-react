import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import MoviesSkeleton from '../MoviesSkeleton/MoviesSkeleton';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import {
  ListContainer,
  ListSection,
  Button,
  ListHeader,
  Filter,
  Select,
  Pagination,
  PaginationButton,
  EmptyList,
  PosterCard,
} from './UserListsStyles';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const UserLists = ({
  movies,
  onClick,
  userId,
  title,
  handleChange,
  loading,
  totalResults,
  setCurrentPage,
  currentPage,
  totalPages,
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
          <EmptyList>
            <p>Add movies to your list</p>
          </EmptyList>
        ) : loading ? (
          Array(20)
            .fill()
            .map((item, index) => {
              return (
                <PosterCard key={index}>
                  <MoviesSkeleton userList />
                </PosterCard>
              );
            })
        ) : (
          movies &&
          movies.map((movie) => {
            return (
              <PosterCard key={movie.id}>
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
              </PosterCard>
            );
          })
        )}
      </ListContainer>
      {totalResults ? (
        <Pagination>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => prev - 1)}
            firstPage={currentPage === 1 ? true : false}
          >
            <MdKeyboardArrowLeft className="prev-arrow" /> Prev
          </PaginationButton>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => prev + 1)}
            lastPage={currentPage === totalPages ? true : false}
          >
            Next <MdKeyboardArrowRight className="next-arrow" />
          </PaginationButton>
        </Pagination>
      ) : (
        ''
      )}
    </ListSection>
  );
};

export default UserLists;
