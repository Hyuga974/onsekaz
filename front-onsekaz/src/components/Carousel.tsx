import React from 'react';

interface CarouselProps {
  images: string[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = React.useState(0);

  function previous(){
      setCurrent(current - 1 < 0 ? images.length - 1 : current - 1)
  }

  function next(){
      setCurrent(current === images.length - 1 ? 0 : current + 1)
  }
  return (
    <div>
          <div className="carousel w-full">
            <div key = {current} id={"slide-" + current} className="carousel-item relative w-full">
              <img src={images[current]} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={previous} className="btn btn-circle border-gray-400 text-black hover:text-white backdrop-blur-md bg-white/30 ">❮</button> 
                <button onClick={next} className="btn btn-circle border-gray-400 text-black hover:text-white backdrop-blur-md bg-white/30 ">❯</button>
              </div>
            </div> 
          </div>
    </div>

  );
};

export default CarouselComponent;