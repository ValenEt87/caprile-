/* import React, { useEffect, useState } from 'react';
import './Services.css'; // Archivo con las animaciones CSS

const Counter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let observer;
    const element = document.getElementById(`counter-${value}`);

    const startCounting = (entries) => {
      if (entries[0].isIntersecting) {
        const increment = value / (duration / 20);
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            current = value;
            clearInterval(interval);
          }
          setCount(Math.ceil(current));
        }, 20);
      }
    };

    observer = new IntersectionObserver(startCounting, { threshold: 0.1 });
    observer.observe(element);

    return () => {
      if (observer && element) observer.unobserve(element);
    };
  }, [value, duration]);

  return (
    <span
      id={`counter-${value}`}
      className="text-7xl font-bold color-blue-bmr number-animate"
    >
      +{count}
    </span>
  );
};

const Services = () => {
  const servicesData = [
    {
      value: 40,
      title: 'Canchas',
      description:
        'Con diseño propio y o en colaboración con otros diseñadores como Ken Dye, Bob Cupp, Gary Player Design y American Golf Design, entre otros.',
    },
    {
      value: 50,
      title: 'Años al servicio',
      description:
        'A fines de los años 60, los hermanos Diego y Alberto Caprile, deciden diseñar y construir su primer campo de golf en Buenos Aires.',
    },
    {
      value: 4,
      title: 'Países',
      description:
        'Con base en Buenos Aires, hemos trabajado en toda la Argentina asi como en Brasil, Uruguay y Chile.',
    },
  ];

  const duration = 2000; // Duración total sincronizada

  return (
    <section className="grid grid-cols-12 mx-5 pb-24 pt-24 gap-5">
      <h2 className="sr-only">Nuestros valores</h2>

      <div className="col-span-12 lg:col-start-2 lg:col-span-10 grid grid-cols-12 lg:grid-cols-9 gap-5 lg:gap-6 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
      >
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center"
          >
            <div className="w-28 flex justify-center items-center">
              <Counter value={service.value} duration={duration} />
            </div>
            <h3 className="text-2xl font-bold color-blue-bmr mb-3 text-animate">
              {service.title}
            </h3>
            <p className="text-gray-500 text-animate">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
 */
import React, { useEffect, useState } from 'react';
import './Services.css'; // Archivo con las animaciones CSS

const Counter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

 /*  useEffect(() => {
    let observer;
    const element = document.getElementById(`counter-${value}`);

    const startCounting = (entries) => {
      if (entries[0].isIntersecting) {
        const increment = value / (duration / 20);
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            current = value;
            clearInterval(interval);
          }
          setCount(Math.ceil(current));
        }, 20);
      }
    };

    observer = new IntersectionObserver(startCounting, { threshold: 0.1 });
    observer.observe(element);

    return () => {
      if (observer && element) observer.unobserve(element);
    };
  }, [value, duration]); */

  return (
    <span
      id={`counter-${value}`}
      className="lg:text-7xl text-4xl font-bold color-blue-bmr number-animate"
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
        'Con diseño propio y o en colaboración con otros diseñadores como Ken Dye, Bob Cupp, Gary Player Design y American Golf Design, entre otros.',
    },
    {
      value: 50,
      title: 'Años al servicio',
      description:
        'A fines de los años 60, los hermanos Diego y Alberto Caprile, deciden diseñar y construir su primer campo de golf en Buenos Aires.',
    },
    {
      value: 4,
      title: 'Países',
      description:
        'Con base en Buenos Aires, hemos trabajado en toda la Argentina asi como en Brasil, Uruguay y Chile.',
    },
  ];

  const duration = 3000; // Duración del contador ajustada

  return (
    <section className="grid grid-cols-12 mx-5 pb-32 pt-24 gap-5">
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
            <h3 className="lg:text-2xl text-lg font-bold color-blue-bmr mb-3 text-animate">
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
