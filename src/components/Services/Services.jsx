import React, { useEffect, useState } from 'react';
import './Services.css'; // Archivo con las animaciones CSS

const Counter = ({ value, duration }) => {
  const [count, setCount] = useState(0);
  return (
    <span
      id={`counter-${value}`}
      className="lg:text-7xl text-5xl font-bold text-green-900 number-animate"
    >
      +{value}
    </span>
  );
};

const Services = () => {
  const servicesData = [
    {
      value: 40,
      title: 'Canchas',
      description:
        'Desarrolladas con diseño propio y o en colaboración con otros diseñadores hemos remodelado e intervenido numerosas canchas.',
    },
    {
      value: 50,
      title: 'Años de experiencia',
      description:
        'A fines de los años 60, los hermanos Diego y Alberto Caprile, deciden diseñar y construir su primer campo de golf en Buenos Aires.',
    },
    {
      value: 4,
      title: 'Países',
      description:
        'Con base en Buenos Aires, hemos desarrollado proyectos en toda la Argentina asi como en Brasil, Uruguay y Chile.',
    },
  ];

  const duration = 3000; // Duración del contador ajustada

  return (
    <section className="grid grid-cols-12 mx-5 py-20 lg:py-28 gap-5">
      <h2 className="sr-only">Nuestros valores</h2>
      <div
        className="col-span-12 lg:col-start-2 lg:col-span-10 grid grid-cols-12 lg:grid-cols-9 gap-5 lg:gap-6 text-center"
        data-aos="fade-up"
        data-aos-duration="2000" // Duración más larga para animaciones suaves
        data-aos-easing="ease-in-out"
      >
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 300} // Espaciado entre bloques
          >
            <div className="w-28 flex justify-center items-center">
              <Counter value={service.value} duration={duration} />
            </div>
            <h3 className="lg:text-2xl text-lg font-bold text-green-900 mb-1 lg:mb-3 text-animate">
              {service.title}
            </h3>
            <p className="text-gray-500 text-animate">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
