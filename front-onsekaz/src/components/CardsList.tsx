import React, { useContext } from 'react';

import { AnnonceT } from '../types/AnnonceType';
import CardItem from './CardItem';

interface Props {
  cards: AnnonceT[];
}

const CardsList: React.FC<Props> = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      {cards.map((card) => (
        <div className="grid grid-flow-row-dense">
        <CardItem key={card.id} annonce={card} />

        </div>
      ))}
    </div>
  );
};

export default CardsList;
