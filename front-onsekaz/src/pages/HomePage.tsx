import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import { AnnonceT } from '../types/AnnonceType';
import Title from '../components/Title';
import {propertyHouse, typeHouse} from '../types/AnnonceEnum'
import CarouselComponent from '../components/Carousel';
import Header from '../components/Header';
import Hero from '../components/Hero';
  


const HomePage: React.FC = () => {

  const [lastHouses, setLastHouses] = useState([]);
  const [bestRatedHouses, setBestRatedHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const lastHousesResponse = await fetch('http://localhost:3000/annonces/newest');
      const lastHousesData = await lastHousesResponse.json();
      setLastHouses(lastHousesData);

      const bestRatedHousesResponse = await fetch('http://localhost:3000/annonces/best-rated');
      const bestRatedHousesData = await bestRatedHousesResponse.json();
      setBestRatedHouses(bestRatedHousesData);
    };

    fetchHouses();
  }, []);
  
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <Hero />
        <section>
          <h2 className="text-2xl font-bold mb-4">Last 4 Posted Houses</h2>
          <CardsList cards={lastHouses} />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Top 4 Best Rated Houses</h2>
          <CardsList cards={bestRatedHouses} />
        </section>
      </main>
    </div>
  );
}

export default HomePage;