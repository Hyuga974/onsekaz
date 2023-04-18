import { AnnonceT } from '../types/AnnonceType';
import CarouselComponent from './Carousel';

type CardProps = {
  annonce: AnnonceT;
};

const CardItem: React.FC<CardProps> = ({ annonce }) => (
<div className="card w-96 h-96  bg-base-300 shadow-xl">
  <figure>
    <CarouselComponent images={annonce.photos} />
  </figure>
  <div className="card-body">
    <h2 className="card-title underline-offset-0">
      {annonce.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions flex flex-grow">
      <div className="badge badge-outline"><strong>Prix:</strong> {annonce.price.toString()} €</div>
      <div className="badge badge-outline"><strong>Maximum de clients:</strong> {annonce.max_customer.toString()}</div>
    </div>
  </div>
</div>
);

export default CardItem;