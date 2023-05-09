import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Calendar: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    

    const handleSelect = (ranges : any)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
    }

  return (
    <div>
        
        <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
        className="text-[#4e9bff]"
        />

        </div>
  );
};

export default Calendar;
