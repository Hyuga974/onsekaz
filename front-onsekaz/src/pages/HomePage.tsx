import React from 'react';

import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import { AnnonceT } from '../types/AnnonceType';
import Title from '../components/Title';
import CarouselComponent from '../components/Carousel';

// Créer une annonce exemple à utiliser avec le composant CardItem
let a: AnnonceT = {
    id: 1,
    title: "Annonce 1",
    location: 0,
    latitude: 0,
    description: "Description de l'annonce 1",
    price: 100,
    rooms_nb: 2,
    beds_nb: 5,
    br_number: 1,
    property: 'appartement',
    type: 'full_housing',
    max_customer: 6,
    photos: ['https://example.com/image.jpg'],
  };
  let b: AnnonceT = {
    id: 2,
    title: "Annonce 1",
    location: 0,
    latitude: 0,
    description: "Description de l'annonce 1",
    price: 100,
    rooms_nb: 2,
    beds_nb: 5,
    br_number: 1,
    property: 'appartement',
    type: 'full_housing',
    max_customer: 6,
    photos: ["https://example.com/image.jpg"],
  };
  


const HomePage: React.FC = () => (
  <div className="container mx-auto text-3xl font-bold underline">
    <Title text="On se Kaze" />
    {/* <CarouselComponent images={[a.photos, b.photos]} /> */}
    <Link to="/profils">
      Me
    </Link>

  </div>
);

export default HomePage;