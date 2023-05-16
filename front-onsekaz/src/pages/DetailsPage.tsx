import React, { useContext, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import { AnnonceT } from '../types/AnnonceType';
import Header from '../components/Header';
import StarRating from '../components/StarRating';
import { ReviewT } from '../types/ReviewType';
import axios from 'axios';
import ReservationCard from '../components/ReservationCard';
import AuthContext from '../context/AuthContext';

interface APIResponseT {
  annonce: AnnonceT;
  reviews: ReviewT[];
}

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = React.useState<APIResponseT | null>(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<APIResponseT>(`http://localhost:3000/annonces/${id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const annonce = data.annonce;
  const reviews = data.reviews;

  //calculate average score
  const averageScore = reviews.reduce((acc, review) => acc + review.score, 0) / reviews.length;


  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex mb-4">
          <div className="lg:w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-96">
              <div className="relative">
                <img src={'.'+annonce.photos[0]} alt={annonce.title} className="rounded-lg w-full h-96 object-cover" />
              </div>
              <div className="flex flex-col h-96">
                <div className="flex flex-row h-1/2">
                  <div className="flex-1 p-1 relative">
                    <img src={'.'+annonce.photos[1]} alt={`${annonce.title}-1`}
                      className="rounded-lg w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-1 relative">
                    <img src={'.'+annonce.photos[2]} alt={`${annonce.title}-2`}
                      className="rounded-lg w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-row h-1/2">
                  <div className="flex-1 p-1 relative">
                    <img src={'.'+annonce.photos[3]} alt={`${annonce.title}-1`}
                      className="rounded-lg w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-1 relative">
                    <img src={'.'+annonce.photos[4]} alt={`${annonce.title}-2`}
                      className="rounded-lg w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pl-8">
          <h1 className="text-3xl font-bold mb-4">{annonce.title} • <StarRating score={averageScore} reviewId='annonce' /> ({averageScore})</h1>
          <p className="text-xl mb-4">{annonce.location}</p>
          <p className="text-gray-600 mb-4">{annonce.description}</p>
          <div className="flex">
            <div className="w-2/3">
              <section className="my-8">
                <h2 className="text-2xl font-semibold">Hosted by {annonce.user.username}</h2>
                <p>Email: {annonce.user.email}</p>
              </section>
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <p className="font-bold">{annonce.price}€</p>
                  <p>per night</p>
                </div>
                <div>
                  <p className="font-bold">{annonce.rooms_nb}</p>
                  <p>Rooms</p>
                </div>
                <div>
                  <p className="font-bold">{annonce.beds_nb}</p>
                  <p>Beds</p>
                </div>
                <div>
                  <p className="font-bold">{annonce.br_number}</p>
                  <p>Bathrooms</p>
                </div>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-bold">Property: </span>
                  {annonce.property}
                </p>
                <p>
                  <span className="font-bold">Type: </span>
                  {annonce.type}
                </p>
                <p>
                  <span className="font-bold">Max guests: </span>
                  {annonce.max_customer}
                </p>
              </div>
            </div>
            { authContext?.isLoggedIn === true ? (
            <div className="flex-1 w-1/3">
              <ReservationCard annonceId={annonce._id} maxPeople={annonce.max_customer} />
            </div>
            ) : (
              <div className="flex-1 w-1/3">
                <p className="text-xl font-bold">You must be logged in to make a reservation</p>
              </div>
            )}
          </div>
        </div>
        <section className="my-8">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="card-bordered w-full mx-auto border-gray-400 rounded-md mt-4">
              <div className="card-body">
                <h2 className="card-title">
                  {review.user.username} • <StarRating score={review.score} reviewId={review._id} />
                </h2>
                <p className="text-sm text-white">
                  {review.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default DetailsPage;
