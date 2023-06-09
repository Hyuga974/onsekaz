import { ReservationT } from '../types/ReservationType';
import { Link } from 'react-router-dom';
import axios from 'axios';

type CardProps = {
  reservation: ReservationT;
  deleteReservation: (id: string) => void;
};

const ReservCard: React.FC<CardProps> = ({ reservation, deleteReservation }) => {

    return (
    <div className="card h-96 bg-base-300 shadow-xl">
        <div className="card-body items-center text-center">
        <h2 className="card-title">Reservation for {reservation.annonce.title}</h2>
        <p>Dates: {new Date(reservation.start_date).toLocaleDateString()} to {new Date(reservation.end_date).toLocaleDateString()}</p>
            <p>Number of people : {reservation.customer_nb}</p>
        <div className="card-actions">
            <div className="flex space-x-2">
                <Link to={`/annonce/${reservation.annonce._id}`} className="btn btn-primary w-1/2">
                Voir plus
                </Link>
                <button className='btn btn-error w-1/2' onClick={() => deleteReservation(reservation._id)}>Supprimer</button>
            </div>
        </div>
        </div>
    </div>
    );
}


export default ReservCard;