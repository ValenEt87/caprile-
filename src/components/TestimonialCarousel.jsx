import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import { testimonialImages } from '../constants';

const TestimonialCarousel = () => {
  return (
    <section
      className="grid grid-cols-12 pb-24 pt-24 lg:gap-5 items-center mx-5 lg:mx-0"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      {/* Contenedor del texto */}
      <div className="col-span-12 lg:col-span-5 lg:col-start-2 lg:px-4 order-2 lg:order-1">
        <h2 className="text-3xl lg:text-5xl font-medium mb-3">
          Somos representantes exclusivos de Gary Player Design en latinoamérica.
        </h2>
        <p className="lg:text-lg text-gray-700 mb-2">
          Nos enorgullece ser representantes oficiales de{" "}
          <span className="font-semibold">Gary Player Design</span>. Con una trayectoria de excelencia en diseño de campos de golf, llevamos a la región la visión y experiencia de una leyenda del golf.
        </p>
        <blockquote className="border-l-4 border-green-950 pl-4 italic text-gray-600">
          "Diseñar campos de golf no es solo un arte, sino un legado para las futuras generaciones." - Gary Player
        </blockquote>
      </div>

      {/* Contenedor del carrusel */}
      <div className="col-span-12 lg:col-span-5 lg:col-start-7 flex justify-center lg:pe-4 order-1 lg:order-2 mb-3 lg:mb-0">
        <ImageCarousel images={testimonialImages} alt="Testimonial" />
      </div>
    </section>
  );
};


export default TestimonialCarousel