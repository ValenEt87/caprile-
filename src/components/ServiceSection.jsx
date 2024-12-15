import React, { useState } from "react";

// Acordeón individual
const Accordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <div
        className={`accordion-header ${isOpen ? "active" : ""} flex justify-between items-center p-4 cursor-pointer`}
        onClick={toggleAccordion}
      >
        <h3 className="font-medium text-lg text-white">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className={`accordion-body ${isOpen ? "active" : ""}`}>
        <ul className="list-none">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 mb-2 text-sm text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-green-500"
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
};

// Componente principal con múltiples acordeones
const ServiceSection = () => {
    const accordionData = [
      {
        title: "Análisis y viabilidad del proyecto",
        items: ["Permisos", "Calidad de Suelos y Aguas", "Factibilidad técnica", "Topografía y vegetación", "Impacto ambiental"],
      },
      {
        title: "Construcción y gestión del proyecto",
        items: ["Routing Plan", "Ubicación de Club House", "Cart Paths", "Cart Paths", "Altimetría", "Movimiento de suelos", "Planos de detalle", "Drenajes", "Riegos", "Vistas", "Deforestación"],
      },
    ];
  
    return (
      <section className=" bg-green-950 lg:h-dvh bg-fixed bg-center bg-no-repeat text-white py-16 grid grid-cols-12 gap-5 px-5">
{/*         <div className=" items-center justify-center h-full"> */}
          <div className="col-span-12 lg:col-span-4 col-start-2 lg:col-start-2 flex flex-col justify-center items-start">
            {/* <h2 className="text-3xl lg:text-4xl font-medium mb-2">Brindamos un servicio integral</h2> */}
            <h2 className="text-3xl lg:text-4xl font-medium mb-2">Nuestra experiencia optimiza sus costos y le brinda los mejores resultados.</h2>
            <p className="lg:text-lg mb-8">
              Nuestra experiencia puede ayudarlo a optimiza sus costos y obtener los mejores resultados.
            </p>
            <a
              href="#contacto"
              className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 hover:text-green-800 transition duration-200 flex items-center gap-2"
            >
              Quiero saber más
            </a>
          </div>
  
          <div className="col-span-12 lg:col-span-4 col-start-2 lg:col-start-7 flex flex-col justify-center items-start">
            <div className="accordion w-full">
              {accordionData.map((accordion, index) => (
                <Accordion key={index} title={accordion.title} items={accordion.items} />
              ))}
            </div>
          </div>
       {/*  </div> */}
      </section>
    );
  };
  

export default ServiceSection;
