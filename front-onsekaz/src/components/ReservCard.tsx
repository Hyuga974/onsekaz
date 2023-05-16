import { ReservationT } from '../types/ReservationType';
import { Link } from 'react-router-dom';

type CardProps = {
  reservation: ReservationT;
};

const ReservCard: React.FC<CardProps> = ({ reservation }) => (
  <div className="card h-96 bg-base-300 shadow-xl">
    <div className="card-body items-center text-center">
      <h2 className="card-title">Reservation for {reservation.annonce.title}</h2>
      <p>Dates: {new Date(reservation.start_date).toLocaleDateString()} to {new Date(reservation.end_date).toLocaleDateString()}</p>
        <p>Number of people : {reservation.customer_nb}</p>
      <div className="card-actions">
        <Link to={`/annonce/${reservation.annonce._id}`} className="btn btn-primary w-full">
          Voir plus
        </Link>
      </div>
    </div>
  </div>
);


export default ReservCard;