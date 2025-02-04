import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Avanza automáticamente cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative w-full max-w-md">
      {/* Contenedor con aspect ratio cuadrado */}
      <div className="relative overflow-hidden rounded-lg aspect-square">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicadores de paginación achicados */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              idx === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
