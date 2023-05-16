import { AnnonceT } from '../types/AnnonceType';
import CarouselComponent from './Carousel';
import { Link } from 'react-router-dom';

type CardProps = {
  annonce: AnnonceT;
};

const CardItem: React.FC<CardProps> = ({ annonce }) => (
  <div className="card h-96 bg-base-300 shadow-xl">
    <figure className="px-0.5 pt-0.5">
      <CarouselComponent images ={annonce.photos}/>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{annonce.title}!</h2>
      <p>Posted by: {annonce.user.username}</p> 
      <div className="card-actions">
        <Link to={`/annonce/${annonce._id}`} className="btn btn-primary w-full">
          Voir plus
        </Link>
      </div>
    </div>
  </div>
);


export default CardItem;