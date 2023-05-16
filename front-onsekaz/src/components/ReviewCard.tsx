import { ReviewT } from '../types/ReviewType';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

type CardProps = {
  review: ReviewT;
};

const ReviewCard: React.FC<CardProps> = ({ review }) => (
  <div className="card h-64 bg-base-300 shadow-xl">
    <div className="card-body items-center text-center">
      <h2 className="card-title">Posted on: {review.annonce.title}</h2>
      <p><StarRating score={review.score} reviewId={review._id} /></p>
      <div className="card-actions">
        <Link to={`/annonce/${review.annonce._id}`} className="btn btn-primary w-full">
          Voir plus
        </Link>
      </div>
    </div>
  </div>
);


export default ReviewCard;