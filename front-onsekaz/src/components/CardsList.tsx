import React, { useContext } from 'react';

import { AnnonceT } from '../types/AnnonceType';
import CardItem from './Card';

interface Props {
  cards: AnnonceT[];
}

const CardsList: React.FC<Props> = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      {cards.map((card) => (
        <div>
        <p>New card</p>
        <CardItem key={card.id} annonce={card} />

        </div>
      ))}
    </div>
  );
};

export default CardsList;
