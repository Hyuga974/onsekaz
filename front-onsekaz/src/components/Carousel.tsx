import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  images: string[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`carousel item ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;