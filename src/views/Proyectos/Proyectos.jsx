import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./../../components/Navbar.jsx";
import ProjectsSection from "./../../components/ProjectsSection.jsx";
import ProjectsWithoutImagesList from "./../../components/ProjectsWithoutImagesList.jsx";
import ContactForm from "./../../components/ContactForm.jsx";
import Footer from "./../../components/Footer.jsx";
import { golfCourses } from "../../constants";

const Proyectos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("categoria");

  const [projects, setProjects] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [projectsByCategory, setProjectsByCategory] = useState({});

  useEffect(() => {
    const normalizedCategory = selectedCategory
      ? selectedCategory
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/ /g, "-")
      : "";

    const collator = new Intl.Collator("es", { sensitivity: "base" });

    const filteredCategory = golfCourses.find((course) =>
      collator.compare(
        course.category
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/ /g, "-"),
        normalizedCategory
      ) === 0
    );

    if (filteredCategory) {
      setProjects(filteredCategory.courses);
      setCategoryTitle(filteredCategory.category.replace(/-/g, " "));
    } else {
      setProjects([]);
      setCategoryTitle("");
    }
  }, [selectedCategory]);

  useEffect(() => {
    const loadProjects = () => {
      const limitedProjects = {};
      golfCourses.forEach((categoryObj) => {
        // Puedes limitar la cantidad de proyectos por categoría si lo requieres
        limitedProjects[categoryObj.category] = categoryObj.courses.slice(0, 3);
      });
      setProjectsByCategory(limitedProjects);
    };
    loadProjects();
  }, []);

  const openLightbox = (images, title, index = 0) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
    setCurrentTitle(title);
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

  const formatCategoryTitle = (title) => {
    return decodeURIComponent(title.replace(/-/g, " ")).replace(/n~|ñ/g, "ñ");
  };

  return (
    <>
      <Navbar />
      <section className="pt-20 lg:py-20 grid grid-cols-12">
        <div className="col-span-12 flex justify-center mt-6">
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 975.35 119.75"
            className="w-24 mb-6"
            style={{ fill: "url(#gradient)" }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#1E5631" }} />
                <stop offset="100%" style={{ stopColor: "#7ec480" }} />
              </linearGradient>
            </defs>
            <path d="M975.2,119.57c-157.3-58.66-319.79-88.72-487.61-88C320.44,32.35,158,60.14,1.23,119.71a.75.75,0,0,1-1-.49l-.1-.34A.75.75,0,0,1,.51,118c3.73-2.08,7.42-4.23,11.2-6.21C50.11,91.7,90,75.1,130.91,60.78,181.24,43.15,232.55,29,285,19.59c31.37-5.63,63-10,94.64-13.78C421.32.85,463.23-.55,505.18.18A1096,1096,0,0,1,625.52,8.9,1071.71,1071.71,0,0,1,886.23,76,753,753,0,0,1,971.74,116c1.15.63,2.26,1.33,3.38,2a.74.74,0,0,1,.32.87Z" />
          </svg>
        </div>
        {selectedCategory && (
          <div className="col-span-12 text-3xl font-bold mb-8 text-center">
            {categoryTitle}
          </div>
        )}
        {!selectedCategory && (
          <div className="col-span-12">
            <ProjectsSection />
          </div>
        )}
        <Category
          projects={projects}
          onCardClick={openLightbox}
          selectedCategory={selectedCategory}
        />
      </section>
      {lightboxOpen && (
        <Lightbox
          images={currentImages}
          currentIndex={currentIndex}
          title={currentTitle}
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

const Category = ({ projects, onCardClick, selectedCategory }) => {
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
      {/* Solo se muestra la lista cuando se ha seleccionado una categoría (detalle) */}
      {selectedCategory && (
        <div className="col-span-12">
          <ProjectsWithoutImagesList selectedCategory={selectedCategory} />
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ title, coverImage, images, onClick }) => {
  return (
    <div
      onClick={() => onClick(images, title)}
      className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative cursor-pointer"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
        <h4 className="font-semibold">{title}</h4>
      </div>
    </div>
  );
};


const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious, title }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <div className="absolute bottom-8 text-white text-center">
        {currentIndex + 1} / {images.length}
      </div>
      <div className="absolute top-8 text-white text-center">
        <span className="font-semibold">{title}</span>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>
      <div className="relative flex items-center">
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

export {Proyectos};

