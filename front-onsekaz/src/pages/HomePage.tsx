import React from 'react';

import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import { AnnonceT } from '../types/AnnonceType';
import Title from '../components/Title';
import CarouselComponent from '../components/Carousel';
import Navbar from '../components/Navbar';

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
    photos: ['https://www.milletoursreceptifreunion.com/images/upload/receptif/box-seo/chambres-hotes-reunion.jpeg'],
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
    photos: ["https://images.unsplash.com/photo-1580910727537-e4c80c6a6a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"],
  };
  


const HomePage: React.FC = () => (
  <div>
    <Navbar images={[]} />
  <div className="container mx-auto text-3xl font-bold underline">
    <Title text="On se Kaze" />
    {/* <CarouselComponent images={[a.photos, b.photos]} /> */}
    <Link to="/profils">
      Me
    </Link>
    <CardsList cards={[a, b]}/>

  </div>
  </div>
);

export default HomePage;