import { AnnonceT } from '../types/AnnonceType';

type CardProps = {
  annonce: AnnonceT;
};

const CardItem: React.FC<CardProps> = ({ annonce }) => (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={annonce.photos[0]} alt="Appartement" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      MAISON!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"><strong>Prix:</strong> {annonce.price.toString()} €</div>
      <div className="badge badge-outline"><strong>Maximum de clients:</strong> {annonce.max_customer.toString()}</div>
    </div>
  </div>
</div>
);

export default CardItem;