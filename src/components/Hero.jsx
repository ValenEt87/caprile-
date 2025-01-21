import React from 'react'
/* const Hero = () => {
  return (
    <div>
        <section className="bg-center bg-no-repeat bg-hero h-dvh flex flex-col justify-center">
            <div className="px-4 lg:px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-medium text-white md:text-5xl lg:text-6xl">Golf Course Design & Construction</h1>
                <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-40">Mas de 50 años y tres generaciones construyendo y remodelando campos de golf.</p>
                <div className="flex flex-col space-y-4 sm:flex-row items-center justify-center sm:space-y-0" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                    <a href='#contacto' className="color-blue-bmr font-bold bg-yellow-bmr transition duration-300 ease-in-out focus:ring-2 focus:outline-none focus:ring-white dark:focus:ring-yellow-800 rounded-md text-base py-3 px-6 lg:px-5 text-center me-2 w-fit">
                        Contactanos
                    </a>
                    <a href='#proyectos' className="text-white font-bold transition duration-300 ease-in-out focus:ring-2 focus:outline-none focus:ring-white dark:focus:ring-yellow-800 rounded-md text-base py-3 px-6 lg:px-5 text-center me-2 mb-2 w-fit flex items-center gap-2">
                        Ver proyectos
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
} */
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
  
    /* return (
      <div className="relative">
        <section
          className="bg-center bg-no-repeat bg-hero bg-fixed h-dvh flex flex-col justify-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="px-4 lg:px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-3 text-4xl font-medium text-white md:text-5xl lg:text-6xl">
              {slides[currentSlide].title}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-40">
              Más de 50 años y tres generaciones construyendo y remodelando campos de golf.
            </p>
            <div className='flex justify-center items-center gap-1'>
              <a
                href="#contacto"
                className="color-blue-bmr font-bold bg-yellow-bmr transition duration-300 ease-in-out focus:ring-1 focus:outline-none focus:ring-white dark:focus:ring-yellow-800 rounded-md text-base py-3 px-6 lg:px-8 text-center w-fit"
              >
                Contactanos
              </a>
              <a
                href="#proyectos"
                className="text-white font-bold bg-transparent transition duration-300 ease-in-out focus:ring-1 focus:outline-none focus:ring-white dark:focus:ring-yellow-800 rounded-md text-base py-3 px-6 text-center w-fit flex items-center gap-2"
              >
                Ver proyectos
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <img src='/public/scroll-icon2.svg'
                alt="Scroll down"
                className="w-10 h-10">
              </img>
            </div>
          </div>
        </section>
      </div>
    );
  }; */


  return (
    <div className=" text-white">
      <section className="grid grid-cols-12 mt-16 lg:mt-20 mx-5 lg:mx-8 items-center h-[670px] lg:h-[720px] bg-hero bg-fixed">
        {/* Título Fijo Izquierdo */}
        <div className="col-span-10 col-start-2 lg:col-start-2 md:col-span-5 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-medium">
            Golf Course Design & Construction
          </h1>
          <p className="text-base font-normal lg:text-lg lg:pr-28">
            Más de 50 años y tres generaciones construyendo y remodelando campos de golf.
          </p>
          <div className="flex items-center md:gap-3">
            <a
              href="#contacto"
              className="font-bold bg-green-950 transition duration-300 ease-in-out rounded-md text-base py-3 px-6 lg:px-8 hover:bg-green-900"
            >
              Contactanos
            </a>
            <a
              href="#proyectos"
              className="sr-only md:not-sr-only text-white font-bold bg-white bg-opacity-25 transition duration-300 ease-in-out rounded-md text-base py-3 px-6 lg:px-4 lg:py-3 flex items-center"
            >
              Ver proyectos
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contenedor de Imágenes (Cuadrado Perfecto) */}
      {/*   <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            ></div>
          </div>
        </div> */}
      </section>
    </div>
  );
};







  /* const Hero = () => {
    const slides = [
      {
        image: "/imgs/ascochinga.jpg",
        title: "Golf Course Design & Construction",
      },
      {
        image: "/imgs/ascochinga2.jpg",
        title: "Innovación en Campos de Golf",
      },
      {
        image: "/imgs/ascochinga3.jpg",
        title: "Experiencia y Excelencia",
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      // Timer to update the progress bar
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 0));
      }, 80); // Adjust the speed of the progress bar
  
      // Change slide when progress reaches 100
      if (progress === 100) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
  
      return () => clearInterval(interval);
    }, [progress, slides.length]);
  
    return (
      <div className="relative">
        <section
          className="bg-center bg-no-repeat bg-hero h-dvh flex flex-col justify-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="px-4 lg:px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-3 text-4xl font-medium text-white md:text-5xl lg:text-6xl">
              {slides[currentSlide].title}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-40">Mas de 50 años y tres generaciones construyendo y remodelando campos de golf.</p>
            <a href='#contacto' className="color-blue-bmr font-bold bg-yellow-bmr transition duration-300 ease-in-out focus:ring-2 focus:outline-none focus:ring-white dark:focus:ring-yellow-800 rounded-md text-base py-3 px-6 lg:px-8 text-center w-fit">
                Contactanos
            </a>
          </div>
        </section>
  
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-500">
          <div
            className="h-full bg-yellow-500 transition-all duration-50"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }; */
  
  

export default Hero
// import React from 'react'

// const Hero = () => {
//     return (
//       <div className="h-dvh grid grid-cols-12 bg-green-950">
//         <div className="col-span-12 lg:col-span-6 flex items-center grid grid-cols-12">
//           <div className="col-span-10 lg:col-start-3 lg:col-span-8 text-white">
//             <h1 className="text-4xl font-medium md:text-5xl lg:text-7xl leading-tight mb-3">
//               Golf Course <span>Design & Construction</span> 
//             </h1>
//             <p className="text-lg lg:text-lg mb-8">
//               Más de 50 años y tres generaciones construyendo y remodelando campos de golf.
//             </p>
//             <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
//               <a
//                 href="#contacto"
//                 className="bg-yellow-500 text-green-950 text-lg font-extrabold py-3 px-6 w-full rounded-md shadow-md hover:bg-yellow-600 transition flex items-center justify-between"
//               >
//                 Contactanos
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
//                 </svg>
//               </a>
//               {/* <a
//                 href="#proyectos"
//                 className="text-white font-bold flex items-center gap-2 py-3 px-6 rounded-md hover:bg-white hover:text-green-950 transition"
//               >
//                 Ver proyectos
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="currentColor"
//                   className="bi bi-chevron-down"
//                   viewBox="0 0 16 16"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
//                   />
//                 </svg>
//               </a> */}
//             </div>
//           </div>
//         </div>
//         <div
//           className="col-span-12 lg:col-span-6 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/imgs/Martindale 10.jpg')",
//           }}
//         />
//       </div>
//     );
//   };
  

// export default Hero