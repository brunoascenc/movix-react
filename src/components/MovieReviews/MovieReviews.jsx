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
                <h3>By: {review.author}</h3>
                <p>{review.content}</p>
                {/* <a href={review.url}>official review</a> */}
              </div>
            );
          })}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default MovieReviews;
