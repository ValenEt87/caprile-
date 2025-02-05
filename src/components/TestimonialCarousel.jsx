import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import { testimonialImages } from '../constants';

const TestimonialCarousel = () => {
  return (
    <section className="py-16 mb-20 px-5 lg:px-20"  data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8">
        {/* Texto */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-6 order-2 lg:order-1">
          <h2 className="text-3xl lg:text-5xl font-medium">
            Representantes exclusivos para Latinoamérica
          </h2>
          <p className="text-lg text-gray-700">
            Nos enorgullece ser los representantes oficiales de{" "}
            <span className="font-semibold">Gary Player Design</span> en
            Latinoamérica. Con una trayectoria de excelencia en diseño de
            campos de golf, llevamos a la región la visión y experiencia de una
            leyenda del golf.
          </p>
          <blockquote className="border-l-4 border-green-950 pl-4 italic text-gray-600">
            "Diseñar campos de golf no es solo un arte, sino un legado para las
            futuras generaciones." - Gary Player
          </blockquote>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center order-1 lg:order-2">
          <ImageCarousel images={testimonialImages} alt="Testimonial" />
        </div>
      </div>
      
    </section>
  );
};

export default TestimonialCarousel