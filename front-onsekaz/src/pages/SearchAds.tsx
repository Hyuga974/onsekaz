import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import { AnnonceT } from '../types/AnnonceType';
import Title from '../components/Title';
import {propertyHouse, typeHouse} from '../types/AnnonceEnum'
import CarouselComponent from '../components/Carousel';
import Header from '../components/Header';
import Hero from '../components/Hero';

const SearchAdsPage: React.FC = () => {

  const [lastHouses, setLastHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchHouses = async () => {
      const housesResponse = await fetch(`http://localhost:3000/annonces?search=${searchTerm}`);
      const housesData = await housesResponse.json();
      setLastHouses(housesData);
    };

    const timeoutId = setTimeout(() => fetchHouses(), 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <form className="bg-base-100 rounded-md p-4 flex">
            <input type="text" placeholder="Search for a location" className="input input-primary w-full" value={searchTerm} onChange={handleInputChange}/>
            <button type="submit" className="bg-blue-500 rounded-md text-white px-4 py-2 ml-4">Search</button>
        </form>
        <section>
          <CardsList cards={lastHouses} />
        </section>
      </main>
    </div>
  );
}

export default SearchAdsPage;
