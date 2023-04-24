import React, { useContext } from 'react';

import { AnnonceT } from '../types/AnnonceType';
import CardItem from './CardItem';

interface Props {
  cards: AnnonceT[];
}

const CardsList: React.FC<Props> = ({ cards }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {cards.map((card) => (
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 my-2 ">
        <CardItem key={card.id} annonce={card} />

        </div>
      ))}
    </div>
  );
};

export default CardsList;
