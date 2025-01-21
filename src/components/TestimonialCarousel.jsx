import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  return (
    <section className="py-16 mb-20 px-5 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8">
        {/* Texto */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-6 order-2 lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-950">
            Representantes Exclusivos para Latinoamérica
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
          {/* <a
            href="#contacto"
            className="inline-block bg-green-950 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-between"
          >
            Conoce más
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"/>
            </svg>
          </a> */}
        </div>

        {/* Imagen */}
        <div className="col-span-12 lg:col-span-6 flex justify-center order-1 lg:order-2">
          <img
            src="/imgs/gary-player.webp"
            alt="Gary Player Design"
            className="rounded-lg object-contain p-5"
          />
        </div>
      </div>
      
    </section>
  );
};

export default TestimonialCarousel