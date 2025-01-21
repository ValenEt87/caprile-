import React, { useEffect, useState } from "react";
import { golfCourses } from "../constants/index.js";

// const ProjectsSection = () => {
//   return (
//     <section className="mx-5 pb-24 grid grid-cols-12" id="proyectos" data-aos="fade-up"
//     data-aos-duration="800"
//     data-aos-easing="ease-in-out"
//     data-aos-delay="400">

      
//       <div className='lg:col-span-10 lg:col-start-2 col-span-12 flex flex-col items-center justify-center'>
//         <svg
//           id="Capa_1"
//           data-name="Capa 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 975.35 119.75"
//           className="w-24 mb-6"
//           style={{
//             fill: "url(#gradient)", // Aplicar degradado
//           }}
//         >
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" style={{ stopColor: "#1E5631" }} />
//               <stop offset="100%" style={{ stopColor: "#7ec480" }} />
//             </linearGradient>
//           </defs>
//           <path d="M975.2,119.57c-157.3-58.66-319.79-88.72-487.61-88C320.44,32.35,158,60.14,1.23,119.71a.75.75,0,0,1-1-.49l-.1-.34A.75.75,0,0,1,.51,118c3.73-2.08,7.42-4.23,11.2-6.21C50.11,91.7,90,75.1,130.91,60.78,181.24,43.15,232.55,29,285,19.59c31.37-5.63,63-10,94.64-13.78C421.32.85,463.23-.55,505.18.18A1096,1096,0,0,1,625.52,8.9,1071.71,1071.71,0,0,1,886.23,76,753,753,0,0,1,971.74,116c1.15.63,2.26,1.33,3.38,2a.74.74,0,0,1,.32.87Z" />
//         </svg>
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Proyectos desarrollados
//         </h2>
//       </div>

//       {/* Categoría Diseñados y construidos */}
//       <div className="mb-12 col-span-12 lg:col-span-10 lg:col-start-2" 
//           data-aos="fade-up"
//           data-aos-duration="800"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="400">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-bold">Diseñados y construidos</h3>
//           <a 
//             href={`/proyectos?categoria=disenados-y-construidos`} 
//             className="color-blue-bmr font-bold hover:underline"
//           >
//             Ver todos →
//           </a>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           <ProjectCard title="Ascochinga Golf Club" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksNAnnGkZW1jW313QeZRUTjpIWOPReXpJog&s" />
//           <ProjectCard title="Valle de Tandil" imageSrc="/imgs/ascochinga.jpg" />
//           <ProjectCard title="La Reserva - Cardales" imageSrc="/imgs/ascochinga3.jpg" />
//         </div>
//       </div>

//       {/* Categoría Remodelados e intervenidos */}
//       <div className="mb-12 col-span-12 lg:col-span-10 lg:col-start-2"
//           data-aos="fade-up"
//           data-aos-duration="800"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="400"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-bold">Remodelados e intervenidos</h3>
//           <a 
//             href={`/proyectos?categoria=remodelados-e-intervenidos`} 
//             className="color-blue-bmr font-bold hover:underline"
//           >
//             Ver todos →
//           </a>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           <ProjectCard title="Jockey Club Argentino - San Isidro" imageSrc="/imgs/ascochinga4.jpg" />
//           <ProjectCard title="San Diego Country Club - Moreno" imageSrc="/imgs/ascochinga2.jpg" />
//           <ProjectCard title="Newman C.C. - Benavídez" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksNAnnGkZW1jW313QeZRUTjpIWOPReXpJog&s" />
//         </div>
//       </div>

//       {/* Categoría Urbanizaciones */}
//       <div className="mb-12 col-span-12 lg:col-span-10 lg:col-start-2" 
//           data-aos="fade-up"
//           data-aos-duration="800"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="400"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-bold">Urbanizaciones</h3>
//           <a 
//             href={`/proyectos?categoria=urbanizaciones`} 
//             className="color-blue-bmr font-bold hover:underline"
//           >
//             Ver todos →
//           </a>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           <ProjectCard title="El Nacional Golf Club - Gral. Rodríguez" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksNAnnGkZW1jW313QeZRUTjpIWOPReXpJog&s" />
//           <ProjectCard title="Los Lagartos C.C. - Pilar Bs. As" imageSrc="/imgs/ascochinga3.jpg" />
//           <ProjectCard title="La Cañada Golf - Open Door - Bs. As" imageSrc="/imgs/ascochinga.jpg" />
//         </div>
//       </div>
//     </section>
//   );
// };

// // Componente de tarjeta de proyecto
// const ProjectCard = ({ title, imageSrc }) => {
//   return (
//     <div
//       className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative"
//       style={{ backgroundImage: `url(${imageSrc})` }}
//     >
//       <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white flex items-center justify-between">
//         <h4 className="font-semibold">{title}</h4>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
//           <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
//         </svg>
//       </div>
//     </div>
//   );
// };
// const ProjectsSection = () => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [currentTitle, setCurrentTitle] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openLightbox = (images, index, title = 0) => {
//     setCurrentImages(images);
//     setCurrentIndex(index);
//     setCurrentTitle(title);
//     setLightboxOpen(true);
//   };

//   const closeLightbox = () => {
//     setLightboxOpen(false);
//     setCurrentImages([]);
//     setCurrentIndex(0);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
//     );
//   };

//   const projectsByCategory = {
//     "Disenados y construidos": [
//       { title: "Ascochinga Golf Club", images: [{ src: "/imgs/ascochinga.jpg" }] },
//       { title: "Valle de Tandil", images: [{ src: "/imgs/ascochinga2.jpg" }] },
//       { title: "La Reserva - Cardales", images: [{ src: "/imgs/ascochinga3.jpg" }] },
//     ],
//     "Remodelados e intervenidos": [
//       { title: "Jockey Club Argentino - San Isidro", images: [{ src: "/imgs/ascochinga4.jpg" }] },
//       { title: "San Diego Country Club - Moreno", images: [{ src: "/imgs/ascochinga2.jpg" }] },
//       { title: "Newman C.C. - Benavídez", images: [{ src: "/imgs/ascochinga3.jpg" }] },
//     ],
//     Urbanizaciones: [
//       { title: "El Nacional Golf Club", images: [{ src: "/imgs/ascochinga.jpg" }] },
//       { title: "Los Lagartos C.C.", images: [{ src: "/imgs/ascochinga2.jpg" }] },
//       { title: "La Cañada Golf", images: [{ src: "/imgs/ascochinga3.jpg" }] },
//     ],
//   };

//   return (
//     <>
//     <section
//       className="mx-5 pb-12 grid grid-cols-12"
//       data-aos="fade-up"
//       data-aos-duration="800"
//       data-aos-easing="ease-in-out"
//       data-aos-delay="400"
//     >
//       <div className="lg:col-span-10 lg:col-start-2 col-span-12 flex flex-col items-center justify-center">
//         <svg
//           id="Capa_1"
//           data-name="Capa 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 975.35 119.75"
//           className="w-24 mb-6"
//           style={{
//             fill: "url(#gradient)", // Aplicar degradado
//           }}
//         >
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" style={{ stopColor: "#1E5631" }} />
//               <stop offset="100%" style={{ stopColor: "#7ec480" }} />
//             </linearGradient>
//           </defs>
//           <path d="M975.2,119.57c-157.3-58.66-319.79-88.72-487.61-88C320.44,32.35,158,60.14,1.23,119.71a.75.75,0,0,1-1-.49l-.1-.34A.75.75,0,0,1,.51,118c3.73-2.08,7.42-4.23,11.2-6.21C50.11,91.7,90,75.1,130.91,60.78,181.24,43.15,232.55,29,285,19.59c31.37-5.63,63-10,94.64-13.78C421.32.85,463.23-.55,505.18.18A1096,1096,0,0,1,625.52,8.9,1071.71,1071.71,0,0,1,886.23,76,753,753,0,0,1,971.74,116c1.15.63,2.26,1.33,3.38,2a.74.74,0,0,1,.32.87Z" />
//         </svg>
//         <h2 className="text-3xl font-bold mb-8 text-center">Proyectos desarrollados</h2>
//       </div>

//       {Object.keys(projectsByCategory).map((category, idx) => (
//         <div
//           key={idx}
//           className="mb-12 col-span-12 lg:col-span-10 lg:col-start-2"
//           data-aos="fade-up"
//           data-aos-duration="800"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="400"
//         >
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold">{category}</h3>
//             <a
//               href={`/proyectos?categoria=${category.toLowerCase().replace(/ /g, "-")}`}
//               className="color-blue-bmr font-bold hover:underline"
//             >
//               Ver todos →
//             </a>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {projectsByCategory[category].map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative cursor-pointer"
//                 style={{ backgroundImage: `url(${project.images[0].src})` }}
//                 onClick={() => openLightbox(project.images)}
//               >
//                 <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
//                   <h4 className="font-semibold">{project.title}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
    
//     {lightboxOpen && (
//         <Lightbox
//           images={currentImages}
//           currentIndex={currentIndex}
//           onClose={closeLightbox}
//           onNext={goToNext}
//           onPrevious={goToPrevious}
//         />
//       )}
//     </>
//   );
// };

// /* const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
//       >
//          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
//           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
//         </svg>
//       </button>
//       <div className="flex items-center">
//         <button onClick={onPrevious} className="text-white px-4 py-2">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
//               <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
//             </svg>
//         </button>
//         <img
//           src={images[currentIndex].src}
//           alt={`Image ${currentIndex + 1}`}
//           className="max-w-full max-h-screen"
//         />
//         <button onClick={onNext} className="text-white px-4 py-2">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//             <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }; */
// const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious, title }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
//       {/* Contador de imágenes */}
//       <div className="absolute bottom-8 text-white text-center">
//         {currentIndex + 1} / {images.length}
//       </div>

//       {/* Título del proyecto */}
//       <div className="absolute top-8 text-white text-center">
//         <span className="font-semibold">{title}</span>
//       </div>

//       {/* Botón de cerrar */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30"
//         aria-label="Cerrar lightbox"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
//           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
//         </svg>
//       </button>

//       {/* Navegación y la imagen principal */}
//       <div className="relative flex items-center">
//         {/* Botón de anterior */}
//         <button
//           onClick={onPrevious}
//           className="absolute left-3 text-white text-3xl px-4 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full"
//           aria-label="Imagen anterior"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
//           </svg>
//         </button>

//         {/* Imagen */}
//         <img
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt || "Imagen del proyecto"}
//           className="max-w-screen-lg max-h-screen-lg rounded-lg"
//         />

//         {/* Botón de siguiente */}
//         <button
//           onClick={onNext}
//           className="absolute right-3 text-white text-3xl px-4 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full"
//           aria-label="Imagen siguiente"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

const ProjectsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsByCategory, setProjectsByCategory] = useState({});

  useEffect(() => {
    const loadProjects = () => {
      const limitedProjects = {};
  
      golfCourses.forEach((categoryObj) => {
        // Limitar a tres proyectos por categoría
        limitedProjects[categoryObj.category] = categoryObj.courses.slice(0, 3);
      });
  
      setProjectsByCategory(limitedProjects);
    };
  
    loadProjects();
  }, []);
  
  const formatCategoryTitle = (title) => {
    return decodeURIComponent(title.replace(/-/g, " ")).replace(/n~|ñ/g, "ñ");
  };

  const openLightbox = (images, index, title) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setCurrentTitle(title); // Aseguramos que el título se pase al Lightbox
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImages([]);
    setCurrentIndex(0);
    setCurrentTitle(""); // Reinicia el título
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

 /*  const projectsByCategory = {
    "Diseñados y construidos": [
      { title: "Ascochinga Golf Club", images: [{ src: "/imgs/ascochinga.jpg" }] },
      { title: "Valle de Tandil", images: [{ src: "/imgs/ascochinga2.jpg" }] },
      { title: "La Reserva - Cardales", images: [{ src: "/imgs/ascochinga3.jpg" }] },
    ],
    "Remodelados e intervenidos": [
      { title: "Jockey Club Argentino - San Isidro", images: [{ src: "/imgs/ascochinga4.jpg" }] },
      { title: "San Diego Country Club - Moreno", images: [{ src: "/imgs/ascochinga2.jpg" }] },
      { title: "Newman C.C. - Benavídez", images: [{ src: "/imgs/ascochinga3.jpg" }] },
    ],
    Urbanizaciones: [
      { title: "El Nacional Golf Club", images: [{ src: "/imgs/ascochinga.jpg" }] },
      { title: "Los Lagartos C.C.", images: [{ src: "/imgs/ascochinga2.jpg" }] },
      { title: "La Cañada Golf", images: [{ src: "/imgs/ascochinga3.jpg" }] },
    ],
  }; */

  return (
    <>
      <section className="mx-5 grid grid-cols-12" data-aos="fade-up">
        <div className="lg:col-span-10 lg:col-start-2 col-span-12 flex flex-col lg:items-center lg:justify-center">
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 975.35 119.75"
            className="w-24 mb-6"
            style={{
              fill: "url(#gradient)", // Aplicar degradado
            }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#1E5631" }} />
                <stop offset="100%" style={{ stopColor: "#7ec480" }} />
              </linearGradient>
            </defs>
            <path d="M975.2,119.57c-157.3-58.66-319.79-88.72-487.61-88C320.44,32.35,158,60.14,1.23,119.71a.75.75,0,0,1-1-.49l-.1-.34A.75.75,0,0,1,.51,118c3.73-2.08,7.42-4.23,11.2-6.21C50.11,91.7,90,75.1,130.91,60.78,181.24,43.15,232.55,29,285,19.59c31.37-5.63,63-10,94.64-13.78C421.32.85,463.23-.55,505.18.18A1096,1096,0,0,1,625.52,8.9,1071.71,1071.71,0,0,1,886.23,76,753,753,0,0,1,971.74,116c1.15.63,2.26,1.33,3.38,2a.74.74,0,0,1,.32.87Z" />
          </svg>
          <h2 className="text-3xl lg:text-4xl font-medium mb-6">Proyectos desarrollados</h2>
        </div>

        {/* {Object.keys(projectsByCategory).map((category, idx) => (
          <div key={idx} className="mb-12 col-span-12 lg:col-span-10 lg:col-start-2">
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projectsByCategory[category].map((project, index) => (
                <div
                  key={index}
                  className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative cursor-pointer"
                  style={{ backgroundImage: `url(${project.images[0].src})` }}
                  onClick={() => openLightbox(project.images, 0, project.title)} // Pasar el título
                >
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                    <h4 className="font-semibold">{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))} */}
        {Object.keys(projectsByCategory).map((category, idx) => (
          <div key={idx} className="mb-12 col-span-12 lg:col-span-10 lg:col-start-2" data-aos="fade-up">
            <div className="flex justify-between items-center mb-3 border border-neutral-200">
              <h3 className="text-xl font-medium">{formatCategoryTitle(category)}</h3>
              <a
                href={`/proyectos?categoria=${category.toLowerCase().replace(/ /g, "-")}`}
                className="color-blue-bmr font-bold hover:underline text-sm lg:text-base"
              >
                Ver todos →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
              {projectsByCategory[category].map((project, index) => (
                <div
                  key={index}
                  className="bg-cover bg-center h-32 lg:h-48 rounded-lg overflow-hidden relative cursor-pointer"
                  style={{ backgroundImage: `url(${project.images[0].src})` }}
                  onClick={() => openLightbox(project.images, 0, project.title)} // Pasar el título
                >
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                    <h4 className="font-semibold">{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {lightboxOpen && (
        <Lightbox
          images={currentImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          title={currentTitle} // Pasar el título al Lightbox
        />
      )}
    </>
  );
};

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious, title }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <div className="absolute bottom-8 text-white text-center">
        {currentIndex + 1} / {images.length}
      </div>
      <div className="absolute top-8 text-white text-center font-bold">
        {title}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>
      <div className="flex items-center">
        <button
          onClick={onPrevious}
          className="absolute left-3 text-white text-3xl px-4 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
        </button>
        <img src={images[currentIndex].src} alt="Imagen" className="max-h-screen max-w-screen-lg rounded-lg" />
        <button
          onClick={onNext}
          className="absolute right-3 text-white text-3xl px-4 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      </div>
    </div>
  );
};


// const ProjectsSection = () => {
//   return (
//     <>
//       <section className="grid grid-cols-12 mx-5 pb-24 gap-5 items-center">
//       <div
//           className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-span-5 lg:col-start-2 px-2 flex flex-col items-center"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="0"
//       >
//           <div className='col-span-10 col-start-2 lg:col-start-2 lg:col-span-5 rounded-lg lg:mb-0' data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
//           <img src="/imgs/jockeyclubsalta 2.jpg" alt="" className='rounded-lg' />
//       </div>
//       </div>

//       <div
//           className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-start-7 lg:col-span-5 px-2"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="300"
//       >
//           <h3 className="text-xl lg:text-4xl font-medium mb-3">
//               Proyectos diseñados y construídos
//           </h3>
//           {/* <p className="px-1 lg:text-lg">
//               Muchos de estos proyectos fueron con diseño propio y otros en
//               colaboración.
//           </p> */}
//           <div className="mt-4 lg:mt-6 flex justify-center md:justify-start gap-2">
//           <a href="/sobre-nosotros" className="font-medium hover:text-green-700 py-3 underline decoration-green-700 underline-offset-4 rounded-lg flex items-center gap-2">
//               Ver todos
//               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//                   <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//               </svg>
//           </a>
//           </div>
//       </div>
//       </section>
//       <section className="grid grid-cols-12 mx-5 gap-5 items-center">
//         <div
//             className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-span-5 lg:col-start-2 px-2 flex flex-col items-start"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             data-aos-easing="ease-in-out"
//             data-aos-delay="0"
//         >
//             <h3 className="text-xl lg:text-4xl font-medium mb-3">
//                 Proyectos remodelados e intervenidos
//             </h3>
//             {/* <p className="px-1 lg:text-lg">
//                 Muchos de estos proyectos fueron con diseño propio y otros en
//                 colaboración.
//             </p> */}
//             <div className="mt-4 lg:mt-6 flex justify-center md:justify-start gap-2">
//             <a href="/sobre-nosotros" className="font-medium hover:text-green-700 py-3 underline decoration-green-700 underline-offset-4 rounded-lg flex items-center gap-2">
//                 Ver todos
//                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                 </svg>
//             </a>
//             </div>
//         </div>

//         <div
//             className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-start-7 lg:col-span-5 px-2"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             data-aos-easing="ease-in-out"
//             data-aos-delay="300"
//         >
            
//             <div className='col-span-10 col-start-2 lg:col-start-2 lg:col-span-5 rounded-lg lg:mb-0' data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
//               <img src="/imgs/ascochinga.jpg" alt="" className='rounded-lg' />
//             </div>
//       </div>
//       </section>
//       <section className="grid grid-cols-12 mx-5 pt-24 gap-5 items-center">
//       <div
//           className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-span-5 lg:col-start-2 px-2 flex flex-col items-center"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="0"
//       >
//           <div className='col-span-10 col-start-2 lg:col-start-2 lg:col-span-5 rounded-lg lg:mb-0' data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
//           <img src="/imgs/jockeyclubsalta 2.jpg" alt="" className='rounded-lg' />
//       </div>
//       </div>

//       <div
//           className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-start-7 lg:col-span-5 px-2"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-easing="ease-in-out"
//           data-aos-delay="300"
//       >
//           <h3 className="text-xl lg:text-4xl font-medium mb-3">
//               Urbanizaciones
//           </h3>
//           {/* <p className="px-1 lg:text-lg">
//               Muchos de estos proyectos fueron con diseño propio y otros en
//               colaboración.
//           </p> */}
//           <div className="mt-4 lg:mt-6 flex justify-center md:justify-start gap-2">
//           <a href="/sobre-nosotros" className="font-medium hover:text-green-700 py-3 underline decoration-green-700 underline-offset-4 rounded-lg flex items-center gap-2">
//               Ver todos
//               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//                   <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//               </svg>
//           </a>
//           </div>
//       </div>
//       </section>
//     </>
//     );
// };


export default ProjectsSection;
