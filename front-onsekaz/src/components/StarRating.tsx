// StarRating.tsx
import React from 'react';

interface StarRatingProps {
  score: number;
  reviewId: string;
}

const StarRating: React.FC<StarRatingProps> = ({ score, reviewId }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <input
          key={starValue}
          type="radio"
          name={reviewId}
          className="mask mask-star-2 bg-orange-400"
          checked={score >= starValue}
          disabled
        />
      ))}
    </div>
  );
};

export default StarRating;
