import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieReviews } from '../../redux/movie-reviews/movieReviewsActions';

const MovieReviews = ({ movieId }) => {
  const reviews = useSelector((state) => state.movieReview.results);
  const movieReviews = reviews.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieReviews(movieId));
  }, [movieId, dispatch]);

  return (
    <>
      {movieReviews &&
        movieReviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>By: {review.author}</h3>
              <p>{review.content}</p>
              <a href={review.url}>official review</a>
            </div>
          );
        })}
    </>
  );
};

export default MovieReviews;
