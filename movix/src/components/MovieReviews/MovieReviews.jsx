import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieReviews } from '../../redux/movie-reviews/getMovieReviews';

const MovieReviews = ({ movieId }) => {
  const reviews = useSelector((state) => state.movieReview.results);
  const movieReviews = reviews.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieReviews(movieId));
  }, [movieId, dispatch]);

  const noReviews = () => {
    return (
      <div className="no-reviews">
        <p>
          Nothing Found <i className="far fa-sad-tear"></i>
        </p>
      </div>
    );
  };

  return (
    <div>
      {movieReviews && movieReviews.length === 0
        ? noReviews()
        : movieReviews &&
          movieReviews.map((review) => {
            return (
              <div key={review.id}>
                <h3>By: {review.author}</h3>
                <p>{review.content}</p>
                <a href={review.url}>official review</a>
              </div>
            );
          })}
    </div>
  );
};

export default MovieReviews;
