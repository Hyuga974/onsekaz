import { AnnonceT } from '../types/AnnonceType';

type CardProps = {
  annonce: AnnonceT;
};

const CardItem: React.FC<CardProps> = ({ annonce }) => (
    <div className="shadow-md rounded bg-gradient-to-br from-amber-200 to-amber-300 p-4 text-gray-700 h-60 flex flex-col justify-between">
    <div>
      <div className="card-body">
            <p className="card-text">{annonce.description}</p>
            <p className="card-text"><strong>Prix:</strong> {annonce.price.toString()} €</p>
            <p className="card-text"><strong>Nombre de chambres:</strong> {annonce.rooms_nb.toString()}</p>
            <p className="card-text"><strong>Nombre de lits:</strong> {annonce.beds_nb.toString()}</p>
            <p className="card-text"><strong>Nombre de salles de bains:</strong> {annonce.br_number.toString()}</p>
            <p className="card-text"><strong>Type de propriété:</strong> {annonce.property}</p>
            <p className="card-text"><strong>Type de logement:</strong> {annonce.type}</p>
            <p className="card-text"><strong>Maximum de clients:</strong> {annonce.max_customer.toString()}</p>
        </div>
    </div>
  </div>
);

export default CardItem;