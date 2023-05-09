import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import Calendar from './Calendar';

const Hero: React.FC = () => {
  const [searchInput, setSearchInput] = useState("")

  const [calendarVisibility, setCalendarVisibility] = useState(false)
  const handleSearchFocus = () => {
    setCalendarVisibility(true);
  };

  const handleSearchBlur = () => {
    setCalendarVisibility(false);
  };

  return (
    <div className="relative bg-cover bg-center h-[600px] w-full"
        style={{ backgroundImage: "url('src/assets/hero.jpg')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-base-100 backdrop-filter backdrop-blur-sm"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 text-white">
            <h1 className="text-4xl font-bold mb-4">Explore French DOM-TOM</h1>
            <form className="bg-white rounded-md p-4 flex">
                <input type="text" placeholder="Search for a location" className="flex-grow rounded-md border-2 p-2" 
                        onChange={(e) => setSearchInput(e.target.value)}
/>
                <button type="submit" className="bg-blue-500 rounded-md text-white px-4 py-2 ml-4">Search</button>
            </form>
            { searchInput && 
              <div className='absolute'>
                <Calendar/>
              </div>

            }
            {calendarVisibility && (
              <div className="absolute " style= {{zIndex: 9999}}>
                <Calendar />
              </div>
            )}
        </div>
    </div>
  );
};

export default Hero;
