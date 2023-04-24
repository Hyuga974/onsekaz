import React from 'react';

import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import { AnnonceT } from '../types/AnnonceType';
import Title from '../components/Title';
import {propertyHouse, typeHouse} from '../types/AnnonceEnum'
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
    property: propertyHouse.appartement,
    type: typeHouse.full_housing,
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
    property: propertyHouse.hotel,
    type: typeHouse.private_room,
    max_customer: 6,
    photos: ["https://images.unsplash.com/photo-1580910727537-e4c80c6a6a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"],
  };
  const c : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  const d : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  const e : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  const f : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  const g : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  const h : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  const i : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  const j : AnnonceT = {
    id : 3,
    title: "Parenthèse ensoleillée",
    location: 0,
    latitude: 0,
    description: `Situé aux Avirons La Parenthèse Ensoleillée, vous accueille pour votre séjour. Idéalement située à 8 minutes de la plage de l'Etang Salé et 15 minutes du petit village du Tévelave où les amateurs de randonnée et de beaux paysages pourront trouver leurs bonheurs.

    Logement jumelée à celle des propriétaires.
    Joliment décorée, le logement est moderne, fonctionnel et entièrement privatif. Il dispose d'une grande terrasse et d'un jaccuzzi privé de quoi vous ravir pendant vos vacances.`,
    price: 90,
    rooms_nb: 1,
    beds_nb: 2,
    br_number: 1,
    property: propertyHouse.house,
    type: typeHouse.full_housing,
    max_customer: 4,
    photos:[
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/76c5f458-8c8f-4f91-8fed-6ca591a55d01.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/d832a3f7-6fa1-4585-bdd4-2d7fe59dbf12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/2b6d7787-944b-4f13-8975-2d59b068cf13.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/6e5154f5-021d-4cb0-83d5-dc2d967e1a94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-704982674479340325/original/eaf44297-0130-4f77-8b98-78cbe6fffbe1.jpeg?im_w=1200"
    ]
  }
  


const HomePage: React.FC = () => (
  <div>
    <Navbar images={[]} />
  <div className="container mx-auto text-3xl font-bold underline">
    {/* <CarouselComponent images={[a.photos, b.photos]} /> */}
    <CardsList cards={[a, b, c, d, e, f, g, h, i, j]}/>

  </div>
  </div>
);

export default HomePage;