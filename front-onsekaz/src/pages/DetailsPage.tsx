import React from 'react';

import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import { AnnonceT } from '../types/AnnonceType';
import Title from '../components/Title';
import CarouselComponent from '../components/Carousel';


const DetailsPage: React.FC = () => (
  <div className="container mx-auto text-3xl font-bold underline">
    <Title text="On se Kaze" />
    {/* <CarouselComponent images={[a.photos, b.photos]} /> */}
    <Link to="/profils">
      Me
    </Link>
    <CardsList cards={[a, b]}/>

  </div>
);

export default DetailsPage;