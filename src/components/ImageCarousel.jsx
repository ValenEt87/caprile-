import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

   return (
    <div className="relative w-full">
      {/* Contenedor que usa aspect ratio para mantener proporciones */}
      <div className="relative overflow-hidden rounded-lg w-full aspect-[16/9]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100 z-10" : "hidden"
            }`}
          >
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Botones de navegación */}
        <div className="absolute inset-0 flex items-center justify-between z-30">
          <button
            onClick={prevSlide}
            className="text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
          >
            {/* Icono de flecha izquierda */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
          >
            {/* Icono de flecha derecha */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Indicadores de paginación achicados */}
     {/*  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              idx === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageCarousel;
