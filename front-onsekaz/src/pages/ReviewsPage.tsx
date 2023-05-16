import React, { useEffect, useState } from 'react';
import CardsList from '../components/CardsList';
import Header from '../components/Header';
import ReviewCard from '../components/ReviewCard';
import axios from 'axios';

const ReviewsPage: React.FC = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsResponse = await axios(`http://localhost:3000/reviews`, { withCredentials: true });
      const reviewsData = await reviewsResponse.data;
    setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  console.log(reviews);

  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <h1 className="text-2xl font-bold m-4">Reviews</h1>
        <section>
        <div className="flex flex-wrap -mx-auto">
            {reviews.map((review: any) => (
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 my-2 ">
                <ReviewCard key={review.id} review={review} />

            </div>
            ))}
        </div>
        </section>
      </main>
    </div>
  );
}

export default ReviewsPage;
