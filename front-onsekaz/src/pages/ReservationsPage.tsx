import React, { useEffect, useState } from 'react';
import CardsList from '../components/CardsList';
import Header from '../components/Header';
import ReviewCard from '../components/ReviewCard';
import axios from 'axios';
import ReservationCard from '../components/ReservationCard';
import ReservCard from '../components/ReservCard';

const ReservationsPage: React.FC = () => {

  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    const reservationsResponse = await axios(`http://localhost:3000/reservations`, { withCredentials: true });
    const reservationsData = await reservationsResponse.data;
    setReservations(reservationsData);
  };

  useEffect(() => {

    fetchReservations();
  }, []);

  const deleteReservation = async (id: string) => {
    try {
      const response = await axios.post('http://localhost:3000/reservations/delete', {
          id: id
      }, { withCredentials: true });
      // After a successful delete, refetch the reservations
      fetchReservations();
    } catch (error) {
      const errorMsg = document.getElementById('errorMsg');
      if (errorMsg) {
          errorMsg.textContent = error.response.data.message;
      }
    }
  }

  console.log(reservations);

  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <h1 className="text-2xl font-bold m-4">Reservations</h1>
        <section>
        <div className="flex flex-wrap -mx-auto">
            {reservations.map((reservation: any) => (
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 my-2 ">
                <ReservCard key={reservation.id} reservation={reservation} deleteReservation={deleteReservation} />
            </div>
            ))}
        </div>
        </section>
      </main>
    </div>
  );
}

export default ReservationsPage;
