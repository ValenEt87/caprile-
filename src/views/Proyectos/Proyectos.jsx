// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "./../../components/Navbar.jsx";
// import Footer from "./../../components/Footer.jsx";
// import { golfCourses } from "../../constants";

// const Proyectos = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const selectedCategory = queryParams.get("categoria");

//   const [projects, setProjects] = useState([]);
  
//   useEffect(() => {
//     // Normaliza la categoría seleccionada (minúsculas y sin espacios)
//     const normalizedCategory = selectedCategory ? selectedCategory.toLowerCase().replace(/ /g, "-") : "";

//     // Filtra los proyectos según la categoría seleccionada
//     const filteredProjects = golfCourses.find(
//       (course) =>
//         course.category.toLowerCase().replace(/ /g, "-") === normalizedCategory
//     );
    
//     setProjects(filteredProjects ? filteredProjects.courses : []);
//   }, [selectedCategory]);

//   return (
//     <>
//       <Navbar />
//       <section className="mx-5 mb-12 mt-12 grid grid-cols-12">
//         <h2 className="text-3xl font-bold mb-8 text-center col-span-10 col-start-2">
//           {selectedCategory ? selectedCategory.replace(/-/g, " ") : "Proyectos desarrollados"}
//         </h2>
//         <Category projects={projects} />
//       </section>
//       <Footer />
//     </>
//   );
// };

// const Category = ({ projects }) => {
//   return (
//     <div className="mb-5 col-span-10 col-start-2">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} title={project.title} coverImage={project.coverImage} />
          
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProjectCard = ({ title, coverImage  }) => {
//   return (
//     <div className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative" style={{ backgroundImage: `url(${coverImage})` }}>
//        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white  flex items-center justify-between">
//           <h4 className="font-semibold">{title}</h4>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
//             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
//           </svg>
//        </div>
//       {/* <div className="grid grid-cols-3 gap-2 p-4">
//         {images && images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             className="rounded-md w-full h-24 object-cover"
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export { Proyectos };
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./../../components/Navbar.jsx";
import ProjectsSection from "./../../components/ProjectsSection.jsx";
import ContactForm from "./../../components/ContactForm.jsx";
import Footer from "./../../components/Footer.jsx";
import { golfCourses } from "../../constants";

/* const Proyectos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("categoria");

  const [projects, setProjects] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    // Normalize the selected category (lowercase and replace spaces with dashes)
    const normalizedCategory = selectedCategory
      ? selectedCategory.toLowerCase().replace(/ /g, "-")
      : "";

    // Filter projects based on the selected category
    const filteredProjects = golfCourses.find(
      (course) =>
        course.category.toLowerCase().replace(/ /g, "-") === normalizedCategory
    );

    setProjects(filteredProjects ? filteredProjects.courses : []);
  }, [selectedCategory]);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  return (
    <>
      <Navbar />
      <section className="mx-5 mb-12 mt-12 grid grid-cols-12">
        <h2 className="text-3xl font-bold mb-8 text-center col-span-10 col-start-2">
          {selectedCategory
            ? selectedCategory.replace(/-/g, " ").toUpperCase()
            : "Proyectos desarrollados"}
        </h2>
        <Category projects={projects} onCardClick={openLightbox} />
      </section>
      {lightboxOpen && (
        <Lightbox image={currentImage} onClose={closeLightbox} />
      )}
      <Footer />
    </>
  );
};

const Category = ({ projects, onCardClick }) => {
  return (
    <div className="mb-5 col-span-10 col-start-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            coverImage={project.coverImage}
            images={project.images}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, coverImage, images, onClick }) => {
  return (
    <div
      onClick={() => onClick(images[0]?.src)}
      className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative cursor-pointer"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
        <h4 className="font-semibold">{title}</h4>
      </div>
    </div>
  );
};

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <img
          src={image}
          alt="Lightbox"
          className="max-w-screen-lg max-h-screen-lg rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black rounded-full p-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}; */
const Proyectos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("categoria");

  const [projects, setProjects] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Normalize the selected category (lowercase and replace spaces with dashes)
    const normalizedCategory = selectedCategory
      ? selectedCategory.toLowerCase().replace(/ /g, "-")
      : "";

    // Filter projects based on the selected category
    const filteredProjects = golfCourses.find(
      (course) =>
        course.category.toLowerCase().replace(/ /g, "-") === normalizedCategory
    );

    setProjects(filteredProjects ? filteredProjects.courses : []);
  }, [selectedCategory]);

  const openLightbox = (images, index = 0) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImages([]);
    setCurrentIndex(0);
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
      <Navbar />
      <section className="mx-5 pb-28 pt-28 grid grid-cols-12">
        {/* <div className="col-span-12 text-3xl font-bold mb-8 text-center">
          {selectedCategory
            ? selectedCategory.replace(/-/g, " ").toLowerCase()
            : ""}
        </div> */}

        {!selectedCategory && (
          <div className="col-span-12">
            <ProjectsSection />
          </div>
        )}

        <Category projects={projects} onCardClick={openLightbox} />
      </section>
      {lightboxOpen && (
        <Lightbox
          images={currentImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      )}
      <ContactForm />
      <Footer />
    </>
  );
};

const Category = ({ projects, onCardClick }) => {
  return (
    <div className="mb-5 col-span-10 col-start-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            coverImage={project.coverImage}
            images={project.images}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, coverImage, images, onClick }) => {
  return (
    <div
      onClick={() => onClick(images)}
      className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative cursor-pointer"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
        <h4 className="font-semibold">{title}</h4>
      </div>
    </div>
  );
};

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="absolute bottom-8 text-white text-center">
        {currentIndex + 1} / {images.length}
      </div>
      <div className="absolute top-8 text-white text-center">
        <span>Título</span>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>
      <div className="relative flex items-center">
        <button
          onClick={onPrevious}
          className="absolute left-0 text-white text-3xl px-4 py-4 bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-screen-lg max-h-screen-lg rounded-lg"
        />
        <button
          onClick={onNext}
          className="absolute right-0 text-white text-3xl px-4 py-4 bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export {Proyectos};
