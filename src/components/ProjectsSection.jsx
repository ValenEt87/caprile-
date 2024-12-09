import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="mx-5 pb-24 grid grid-cols-12" id="proyectos" data-aos="fade-up"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-delay="400">

      
      <div className='col-span-10 col-start-2 flex flex-col items-center justify-center'>
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
        <h2 className="text-3xl font-bold mb-8 text-center">
          Proyectos desarrollados
        </h2>
      </div>

      {/* Categoría Diseñados y construidos */}
      <div className="mb-12 col-span-10 col-start-2" 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-delay="400">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Diseñados y construidos</h3>
          <a 
            href={`/proyectos?categoria=disenados-y-construidos`} 
            className="color-blue-bmr font-bold hover:underline"
          >
            Ver todos →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard title="Ascochinga Golf Club" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksNAnnGkZW1jW313QeZRUTjpIWOPReXpJog&s" />
          <ProjectCard title="Valle de Tandil" imageSrc="/imgs/ascochinga.jpg" />
          <ProjectCard title="La Reserva - Cardales" imageSrc="/imgs/ascochinga3.jpg" />
        </div>
      </div>

      {/* Categoría Remodelados e intervenidos */}
      <div className="mb-12 col-span-10 col-start-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Remodelados e intervenidos</h3>
          <a 
            href={`/proyectos?categoria=remodelados-e-intervenidos`} 
            className="color-blue-bmr font-bold hover:underline"
          >
            Ver todos →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard title="Jockey Club Argentino - San Isidro" imageSrc="/imgs/ascochinga4.jpg" />
          <ProjectCard title="San Diego Country Club - Moreno" imageSrc="/imgs/ascochinga2.jpg" />
          <ProjectCard title="Newman C.C. - Benavídez" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksNAnnGkZW1jW313QeZRUTjpIWOPReXpJog&s" />
        </div>
      </div>

      {/* Categoría Urbanizaciones */}
      <div className="mb-12 col-span-10 col-start-2" 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Urbanizaciones</h3>
          <a 
            href={`/proyectos?categoria=urbanizaciones`} 
            className="color-blue-bmr font-bold hover:underline"
          >
            Ver todos →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard title="El Nacional Golf Club - Gral. Rodríguez" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksNAnnGkZW1jW313QeZRUTjpIWOPReXpJog&s" />
          <ProjectCard title="Los Lagartos C.C. - Pilar Bs. As" imageSrc="/imgs/ascochinga3.jpg" />
          <ProjectCard title="La Cañada Golf - Open Door - Bs. As" imageSrc="/imgs/ascochinga.jpg" />
        </div>
      </div>
    </section>
  );
};

// Componente de tarjeta de proyecto
const ProjectCard = ({ title, imageSrc }) => {
  return (
    <div
      className="bg-cover bg-center h-48 rounded-lg overflow-hidden relative"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </div>
    </div>
  );
};

export default ProjectsSection;
