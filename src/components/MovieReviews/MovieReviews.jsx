import React from 'react';
import { ReviewsContainer, ReviewsSection } from './MovieReviewsStyles';

const MovieReviews = ({ movieReviews }) => {
  return (
    <ReviewsSection
      className="container"
      reviewsLength={movieReviews && movieReviews.length}
    >
      <h2 className="section-title">Reviews</h2>
      <ReviewsContainer reviewsLength={movieReviews && movieReviews.length}>
        {movieReviews &&
          movieReviews.map((review) => {
            return (
              <div key={review.id}>
                <span>By: {review.author}</span>
                <p>{review.content}</p>
              </div>
            );
          })}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default MovieReviews;
