import React, { useEffect, useState } from "react";
import { golfCourses } from "../constants/index.js";

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

  return (
    <>
      <section className="mx-5 grid grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2 col-span-12 flex flex-col lg:items-center lg:justify-center">
        {/*   <svg
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
          </svg> */}
          <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">Proyectos desarrollados</h2>
        </div>

        {Object.keys(projectsByCategory).map((category, idx) => (
          <div key={idx} className="mb-12 col-span-12 lg:col-span-10 lg:col-start-2" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-medium">{formatCategoryTitle(category)}</h3>
             {/*  <a
                href={`/proyectos?categoria=${category.toLowerCase().replace(/ /g, "-")}`}
                className="color-blue-bmr font-bold hover:underline text-sm lg:text-base"
              >
                Ver todos &#x279C;
              </a> */}
              <a
                href={`/proyectos?categoria=${category.toLowerCase().replace(/ /g, "-")}`}
                className="relative color-blue-bmr font-bold text-sm lg:text-base group"
              >
                Ver todos &#x279C;
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-900 transition-all duration-300 ease-in-out group-hover:w-full"
                ></span>
              </a>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
              {projectsByCategory[category].map((project, index) => (
                <div
                  key={index}
                  className="bg-cover bg-center h-40 lg:h-48 rounded-lg overflow-hidden relative cursor-pointer"
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
        <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-screen-lg max-h-[70vh] md:max-h-[80vh] lg:max-h-[80vh] rounded-lg"
          />
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

export default ProjectsSection;
