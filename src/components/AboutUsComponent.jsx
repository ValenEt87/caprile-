import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import { AboutUsImages } from '../constants';

const AboutUsComponent = () => {
    return (
      <section className="grid grid-cols-12 pb-28 lg:gap-5 items-center mx-5 lg:mx-0">
        <h2 className="sr-only">Sobre nosotros</h2>
  
        {/* Contenedor del carrusel */}
        <div
          className="col-span-12 lg:col-span-5 lg:col-start-2 flex justify-center lg:ps-4 mb-3 lg:mb-0"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <ImageCarousel images={AboutUsImages} alt="Testimonial" />
        </div>
  
        {/* Contenedor del texto */}
        <div
          className="col-span-12 lg:col-span-5 lg:ps-6"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <h3 className="text-3xl lg:text-5xl font-medium mb-3">
            Contamos con un staff de shapers y operarios especializados.
          </h3>
          <p className="lg:text-lg">
          Y con equipos propios de construcción, para garantizar el mejor resultado. Muchos proyectos han sido trabajados en conjunto con renombrados diseñadores internacionales.
          </p>
          <div className="mt-4 lg:mt-6 flex justify-start gap-2">
            <a
              href="/sobre-nosotros"
              className="bg-green-900 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800 transition duration-500 flex items-center gap-2"
            >
              Sobre nosotros
            </a>
          </div>
        </div>
      </section>
    );
  };
  

export default AboutUsComponent