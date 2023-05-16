import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

type ReservationCardProps = {
  annonceId: string;
  maxPeople: number;
};

const ReservationCard: React.FC<ReservationCardProps> = ({ annonceId, maxPeople }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(+new Date() + 86400000));
  const [numPeople, setNumPeople] = useState(1);

  const handleReserve = async () => {
    // Call your API to create the reservation...
    try {
        const response = await axios.post('http://localhost:3000/reservations', {
            annonce: annonceId,
            start_date: startDate,
            end_date: endDate,
            customer_nb: numPeople,
        }, { withCredentials: true });
        console.log(response.data);
        const successMsg = document.getElementById('successMsg');
        if (successMsg) {
            successMsg.textContent = 'Reservation created successfully!';
        }
    } catch (error) {
        const errorMsg = document.getElementById('errorMsg');
        if (errorMsg) {
            errorMsg.textContent = error.response.data.message;
        }
    }
    
  };

  return (
    <div className="card shadow-xl bg-base-300 w-full">
        <div className="card-body">
            <h2 className="text-2xl mb-4">Make a Reservation</h2>
            <div id="errorMsg" className="text-red-500 mb-4"></div>
            <div id="successMsg" className='text-green-500 mb-4'></div>
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">Start Date:</span>
                </label>
                <DatePicker selected={startDate} onChange={(date: Date)=> setStartDate(date)} className="input
                    input-bordered w-full" />
            </div>
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">End Date:</span>
                </label>
                <DatePicker selected={endDate} onChange={(date: Date)=> setEndDate(date)} className="input
                    input-bordered w-full" />
            </div>
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">Number of People:</span>
                </label>
                <input type="number" min="1" value={numPeople} onChange={(e)=> setNumPeople(Number(e.target.value))}
                className="input input-bordered w-full" max={maxPeople}
                />
            </div>
            <button onClick={handleReserve} className="btn btn-primary">Reserve</button>
        </div>
    </div>
  );
};

export default ReservationCard;
