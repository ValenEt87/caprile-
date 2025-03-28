import React, { useState } from "react";

const Accordion = ({ title, items, isOpen, onClick }) => (
  <div className={`accordion-item ${isOpen ? "active" : ""}`}>
    <div
      className={`accordion-header ${isOpen ? "active" : ""} flex justify-between items-center p-4 cursor-pointer`}
      onClick={onClick}
    >
      <h3 className="font-medium text-lg lg:text-xl color-white-bmr">{title}</h3>
      {/* {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-dash text-white"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus text-white"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      )} */}
    </div>
    <div className={`accordion-body ${isOpen ? "active" : ""}`}>
      <ul className="list-none">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 mb-2 text-sm text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-white"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const ServiceSection = () => {
  const accordionData = [
    {
      title: "Análisis y viabilidad del proyecto",
      items: ["Permisos", "Calidad de Suelos y Aguas", "Factibilidad técnica", "Topografía y vegetación", "Impacto ambiental"],
    },
    {
      title: "Construcción y gestión del proyecto",
      items: ["Routing Plan", "Ubicación de Club House", "Cart Paths", "Altimetría", "Movimiento de suelos", "Planos de detalle", "Drenajes", "Riegos", "Vistas", "Deforestación"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(1); // El segundo acordeón estará abierto por defecto.

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index); // Abre/cierra el acordeón.
  };

  return (
    <section className="py-8 lg:pb-20 lg:pt-12 bg-fixed bg-center bg-no-repeat grid grid-cols-12 mx-5 md:px-5 lg:px-0"  data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
      <div className="col-span-12 lg:col-span-5 lg:col-start-2 flex flex-col justify-center items-start order-2 lg:order-1">
        <h2 className="text-3xl lg:text-5xl font-medium mb-3 lg:pe-20">
           Un buen diseño integra el paisaje existente con la cancha a construir.
        </h2>
        <p className="lg:text-lg mb-8 text-green-950">
        Abarcamos la construccion integral de una cancha desde su planificacion inicial hasta su puesta en funcionamiento. Intervenimos en canchas en juego para mejorar aspectos como el drenaje, riego, reconstruccion de greens, nuevos bunkers y tees.
        </p>
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-green-950 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-900 transition duration-500 flex items-center gap-2"
        >
          Quiero saber más
        </a>
      </div>

      <div className="bg-fixed col-span-12 lg:col-span-5 lg:col-start-7 flex flex-col justify-center items-start order-1 lg:order-2order-1 lg:order-2 mb-3 lg:mb-0">
        <div className="accordion w-full flex flex-col items-center justify-center">
          <div className="w-full lg:w-5/6">
            {accordionData.map((accordion, index) => (
              <Accordion
                key={index}
                title={accordion.title}
                items={accordion.items}
                isOpen={true}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
  

export default ServiceSection;
