import React from 'react'
import { useState, useEffect } from "react";
  const Hero = () => {
    const slides = [
      {
        image: "/imgs/ascochinga.jpg",
      },
      {
        image: "/imgs/ascochinga2.jpg",
      },
      {
        image: "/imgs/ascochinga3.jpg",
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      // Cambiar el slide cada 5 segundos
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 10000); // Cambia cada 5 segundos
  
      return () => clearInterval(interval);
    }, [slides.length]);
  
  return (
    <div className=" text-white">
      <section className="grid grid-cols-12 mt-16 lg:mt-20 mx-5 lg:mx-8 items-center h-[670px] lg:h-[720px] bg-hero bg-fixed">
        {/* Título Fijo Izquierdo */}
        <div className="col-span-10 col-start-2 lg:col-start-2 md:col-start-2 md:col-span-5" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
          <h1 className="text-5xl lg:text-7xl font-medium mb-3">
            Golf Course Design & Construction
          </h1>
          <p className="text-base font-normal lg:text-lg lg:pe-12 mb-6">
            Más de 50 años y tres generaciones construyendo y remodelando campos de golf. Con base en Buenos Aires, hemos trabajado en toda la Argentina asi como en Brasil, Uruguay y Chile.
          </p>
          <div className="flex items-center md:gap-3">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-bold bg-green-950 transition duration-300 ease-in-out rounded-lg text-base py-3 px-6 lg:px-6 hover:bg-green-900"
            >
              Contactanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero