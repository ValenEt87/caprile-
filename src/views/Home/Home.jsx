import React from 'react'
import Navbar from './../../components/Navbar.jsx'
import Footer from './../../components/Footer.jsx'
import './../../App.css'
import Hero from './../../components/Hero.jsx'
import Card from './../../components/Card.jsx'
import TestimonialCarousel from './../../components/TestimonialCarousel.jsx'
import Services from './../../components/Services/Services.jsx'
// import About_us from './../../views/About_us/About_us.jsx'
import { NavLink } from 'react-router-dom';
import ProjectsSection from './../../components/ProjectsSection.jsx'
import ServiceSection from '../../components/ServiceSection.jsx'
import WhatsAppButton from '../../components/WhatsAppButton.jsx';
import ContactForm from '../../components/ContactForm.jsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <ProjectsSection />
            <ServiceSection />
            {/* <section class="bg-services lg:h-dvh bg-fixed bg-center bg-no-repeat text-white py-16 content-center">
                <div class="grid grid-cols-12 mx-5 gap-5">
                    <div className='col-span-12 text-center flex flex-col items-center'>
                        <svg
                            id="Capa_1"
                            data-name="Capa 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 975.35 119.75"
                            className="w-24 mb-6"
                            style={{
                            fill: "#fff", 
                            }}
                        >
                            <path d="M975.2,119.57c-157.3-58.66-319.79-88.72-487.61-88C320.44,32.35,158,60.14,1.23,119.71a.75.75,0,0,1-1-.49l-.1-.34A.75.75,0,0,1,.51,118c3.73-2.08,7.42-4.23,11.2-6.21C50.11,91.7,90,75.1,130.91,60.78,181.24,43.15,232.55,29,285,19.59c31.37-5.63,63-10,94.64-13.78C421.32.85,463.23-.55,505.18.18A1096,1096,0,0,1,625.52,8.9,1071.71,1071.71,0,0,1,886.23,76,753,753,0,0,1,971.74,116c1.15.63,2.26,1.33,3.38,2a.74.74,0,0,1,.32.87Z" />
                        </svg>
                        <h2 class="text-2xl lg:text-4xl font-medium text-center">Brindamos un servicio integral</h2>
                        <p class="text-center lg:text-lg mb-10">Nuestra experiencia puede ayudarlo a optimizar sus costos y obtener los mejores resultados.</p>
                    </div>
                    
                    <div class="col-span-12 lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-3 lg:gap-8 mb-10">
                        <div className='mb-9 lg:mb-0'>
                            <h3 class="text-xl font-semibold mb-4">Análisis y viabilidad del proyecto:</h3>
                            <ul class="space-y-2">
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> 
                                    Permisos
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Calidad de Suelos y Aguas
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Factibilidad técnica
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Topografía y vegetación
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Impacto ambiental
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Planimetría y documentación:</h3>
                            <ul class="space-y-2 mb-2 lg:mb-0">
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Routing Plan
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Ubicación de Club House
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Cart Paths
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Altimetría
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Movimiento de suelos
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Planos de detalle
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Drenajes
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="space-y-2">
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Riego
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Vistas
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Forestación
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Grassing Plan
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Renders y diseños en 3D
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Documentos constructivos
                                </li>
                                <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg> Documentos de licitación
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center col-span-12 flex justify-center">
                        <a href="#contacto" class="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 hover:text-green-800 transition duration-200 flex items-center w-fit gap-2">
                            Quiero saber más 
                            
                        </a>
                    </div>
                </div>
            </section>
 */}



            {/* <section class="bg-services lg:h-dvh bg-fixed bg-center bg-no-repeat text-white py-16 flex">
                <div class="w-full lg:w-1/2 px-6 lg:px-16 flex flex-col justify-center items-start">
                    <h2 class="text-3xl lg:text-5xl font-medium mb-6">Brindamos un servicio integral</h2>
                    <p class="lg:text-lg mb-8">Nuestra experiencia puede ayudarlo a optimizar sus costos y obtener los mejores resultados.</p>
                    <a href="#contacto" class="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 hover:text-green-800 transition duration-200 flex items-center gap-2">
                    Quiero saber más
                    </a>
                </div>

                <div class="w-full lg:w-1/2 px-6 lg:px-16 flex items-center">
                <div class="accordion">
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                        Análisis y viabilidad del proyecto
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </div>
                        <div class="accordion-body">
                        <ul>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                            </svg>
                            Permisos
                            </li>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                            </svg>
                            Calidad de Suelos y Aguas
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
 */}









            {/* <section className='grid grid-cols-12 mx-5 mb-24 mt-24 gap-5 items-center'>
                <div className='col-span-10 col-start-2 lg:col-start-2 lg:col-span-5 rounded-lg lg:mb-0 px-2' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                    <img src="https://www.invitedclubs.com/globalassets/the-national-golf-club/_images/photoshelter-2023/the-national_golf_main_dji_0514_1920_1200.jpg?format=webp" alt="interior de cocina en tonos naturales" className='rounded-lg' />
                </div>
                <div className='col-span-10 col-start-2 lg:col-start-7 lg:col-span-5 px-2' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h2 className='text-gray-400 onest-medium text-xl'>Conocé nuestra historia</h2>
                    <h3 className='lg:text-4xl text-xl mb-2 onest-semibold'>Más de 50 años y tres generaciones construyendo y remodelando campos de golf</h3>
                    <p className='px-1 text-lg'>Nuestra empresa se encuentra entre las más reconocidas del país y hemos trabajado en numerosas canchas de Argentina, Chile, Uruguay y Brasil. Muchos de estos proyectos fueron con diseño propio y otros en colaboración o en la ejecución de proyectos de otros diseñadores como Ken Dye, Bob Cupp, Gary Player Design y American Golf Design, entre otros.</p>
                    <div className='mt-4 lg:mt-6 flex justify-center md:justify-start'>
                        <a href="/deco-home" className="color-white-bmr bg-green-caprile hover-blue py-3 px-6 lg:px-5 onest-medium rounded-lg transition duration-300 ease-in-out">
                            Sobre nosotros
                        </a>
                    </div>
                </div>
            </section> */}
            
            <section className="grid grid-cols-12 mx-5 pb-20 pt-12 lg:pt-24 gap-5 items-center">
                {/* Contenedor de las imágenes */}
                {/* <div className="lg:col-span-10 lg:col-start-2 col-span-12 flex flex-col items-center justify-center"> */}
                    {/* <svg
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
                    {/* <svg
                            id="Capa_1"
                            data-name="Capa 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 975.35 119.75"
                            className="w-24 mb-6"
                            style={{
                            fill: "#0C7734", // Aplicar degradado
                            }}
                        >
                            <path d="M975.2,119.57c-157.3-58.66-319.79-88.72-487.61-88C320.44,32.35,158,60.14,1.23,119.71a.75.75,0,0,1-1-.49l-.1-.34A.75.75,0,0,1,.51,118c3.73-2.08,7.42-4.23,11.2-6.21C50.11,91.7,90,75.1,130.91,60.78,181.24,43.15,232.55,29,285,19.59c31.37-5.63,63-10,94.64-13.78C421.32.85,463.23-.55,505.18.18A1096,1096,0,0,1,625.52,8.9,1071.71,1071.71,0,0,1,886.23,76,753,753,0,0,1,971.74,116c1.15.63,2.26,1.33,3.38,2a.74.74,0,0,1,.32.87Z" />
                        </svg> */}
                    <h2 className="sr-only">Sobre nosotros</h2>
                    {/* <p className='lg:text-lg mb-3 text-center'>Más de 50 años y tres generaciones construyendo y remodelando campos de golf.
                    </p> */}
                {/* </div> */}
                <div
                    className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-span-5 lg:col-start-2 lg:px-2 flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                >
                    {/* <div className="grid grid-cols-2 gap-5">
                    <div className="lg:h-72 lg:w-72 rounded-lg overflow-hidden mx-auto">
                        <img
                        src="/imgs/Historia 6.jpg"
                        alt="Proyecto 1"
                        className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="lg:h-72 lg:w-72 rounded-lg overflow-hidden mx-auto">
                        <img
                        src="/public/imgs/fondo.webp"
                        alt="Proyecto 2"
                        className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="lg:h-72 lg:w-72 rounded-lg overflow-hidden mx-auto">
                        <img
                        src="/imgs/ascochinga4.jpg"
                        alt="Proyecto 3"
                        className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="lg:h-72 lg:w-72 rounded-lg overflow-hidden mx-auto">
                        <img
                        src="https://www.invitedclubs.com/globalassets/the-national-golf-club/_images/photoshelter-2023/the-national_golf_main_dji_0514_1920_1200.jpg?format=webp"
                        alt="Proyecto 4"
                        className="object-cover w-full h-full"
                        />
                    </div>
                    </div> */}
                    {/* <svg
                        id="Capa_1"
                        data-name="Capa 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 975.35 119.75"
                        className="w-24 mb-6 lg:hidden"
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
                    <div className='col-span-10 col-start-2 lg:col-start-2 lg:col-span-5 rounded-lg lg:mb-0' data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                    <img src="/imgs/Historia 6.jpg" alt="" className='rounded-lg' />
                </div>
                </div>

                {/* Contenedor del texto */}
                <div
                    className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-start-7 lg:col-span-5 px-2"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                >
                    {/* <h2 className="text-lg font-medium text-gray-500">Más de 50 años y tres generaciones</h2> */}
                    <h3 className="text-3xl lg:text-4xl font-medium mb-3">
                    Hemos trabajado en numerosas canchas de Argentina, Chile, Uruguay y Brasil.
                    </h3>
                   {/*  <h3 className="lg:text-3xl text-xl mb-2 font-bold">
                        Más de 50 años y tres generaciones construyendo y remodelando campos de golf.
                    </h3> */}
                    <p className="px-1 lg:text-lg">
                        Muchos de estos proyectos fueron con diseño propio y otros en
                        colaboración o en la ejecución de proyectos de otros diseñadores como Ken
                        Dye, Bob Cupp, Gary Player Design y American Golf Design, entre otros.
                    </p>
                    <div className="mt-4 lg:mt-6 flex justify-start gap-2">
                    {/* <a
                        href="/sobre-nosotros"
                        className="w-full color-white-bmr bg-green-caprile py-3 px-6 lg:px-5 font-bold rounded-lg transition duration-300 ease-in-out flex items-center justify-between"
                    >
                        Sobre nosotros
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                    </a> */}
                    {/* <a href="/sobre-nosotros" className="font-medium hover:text-green-700 py-3 underline decoration-green-700 underline-offset-4 rounded-lg flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        Sobre nosotros
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </a> */}
                    <a
                        href="/sobre-nosotros"
                        className="bg-green-950 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-900 transition duration-500 flex items-center gap-2"
                    >
                        Sobre nosotros
                    </a>
                    {/* <a href="/sobre-nosotros" className="color-blue-bmr font-bold bg-neutral-200 hover:bg-green-900 py-3 px-6 lg:px-5 rounded-lg transition duration-300 ease-in-out">
                        Contactanos
                    </a> */}
                    </div>
                </div>
                </section>
            
                <TestimonialCarousel />


                {/* <section className="bg-green-900 text-white lg:h-dvh bg-services bg-fixed" id='contacto'>
                    <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 lg:py-0 items-center h-full">
                        <div className="text-center flex flex-col items-center justify-center">
                            <svg
                                id="Capa_1"
                                data-name="Capa 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 975.35 119.75"
                                className="w-24 mb-6"
                                style={{
                                fill: "#fff", // Aplicar degradado
                                }}
                            >
                                <path d="M975.2,119.57c-157.3-58.66-319.79-88.72-487.61-88C320.44,32.35,158,60.14,1.23,119.71a.75.75,0,0,1-1-.49l-.1-.34A.75.75,0,0,1,.51,118c3.73-2.08,7.42-4.23,11.2-6.21C50.11,91.7,90,75.1,130.91,60.78,181.24,43.15,232.55,29,285,19.59c31.37-5.63,63-10,94.64-13.78C421.32.85,463.23-.55,505.18.18A1096,1096,0,0,1,625.52,8.9,1071.71,1071.71,0,0,1,886.23,76,753,753,0,0,1,971.74,116c1.15.63,2.26,1.33,3.38,2a.74.74,0,0,1,.32.87Z" />
                            </svg>
                            <h2 className="text-3xl font-bold">Contactanos</h2>
                            <p className="lg:text-lg mb-4">
                               Completá el formulario a continuación y nos pondremos en contacto tan pronto como sea posible
                            </p>
                        </div>
                        <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 lg:w-1/2 w-full">
                            <form className="space-y-4">
                                <div>
                                <label htmlFor="name" className="block text-sm lg:text-base font-semibold mb-1">
                                    Nombre completo
                                </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-3"
                                        placeholder="Nombre completo"
                                    />
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm lg:text-base font-semibold mb-1">
                                    Email
                                </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-3"
                                        placeholder="Correo electrónico"
                                    />
                                </div>
                                <div>
                                <label htmlFor="phone" className="block text-sm lg:text-base font-semibold mb-1">
                                    Teléfono
                                </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-3"
                                        placeholder="Teléfono"
                                    />
                                </div>
                                <div className='pb-0'>
                                <label htmlFor="message" className="block text-sm lg:text-base font-semibold mb-1">
                                    Mensaje
                                </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-2"
                                        placeholder="Mensaje"
                                    >
                                    </textarea>
                                </div>
                                <button
                                type="submit"
                                className="w-full bg-green-caprile text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition duration-300"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </section> */}


                <section id='contacto' className="bg-green-950 text-white lg:relative lg:h-[700px] bg-services bg-fixed mx-5 lg:mx-8 rounded-2xl py-2 mb-10 lg:my-20">
                    <div className="grid grid-cols-12 gap-4 px-5 py-6 lg:py-0 items-center h-full lg:relative">
                        
                        <div className="col-span-12 col lg:col-start-2 lg:col-span-4 text-center text-start">
                            <h2 className="text-3xl lg:text-5xl font-medium mb-2">Completá el formulario</h2>
                            <p className="lg:text-lg mb-4">
                               Escribinos y nos pondremos en contacto,
                               o visitá nuestras redes sociales.
                            </p>
                            {/* <div className="flex space-x-2">
                                <a
                                    href="#"
                                    className="bg-green-700 hover:bg-green-600 p-3 rounded-xl transition duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-green-700 hover:bg-green-600 p-3 rounded-xl transition duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-green-700 hover:bg-green-600 p-3 rounded-xl transition duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                    </svg>
                                </a>
                            </div>  */}
                            <div className="flex justify-center lg:justify-start space-x-2 sr-only lg:not-sr-only">
                                <a
                                    href="#"
                                    className="bg-green-600 bg-opacity-30 hover:bg-green-800 p-3 rounded-lg transition duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-green-600 bg-opacity-30 hover:bg-green-800 p-3 rounded-lg transition duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF " class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-green-600 bg-opacity-30 hover:bg-green-800 p-3 rounded-lg transition duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="col-span-12 lg:col-start-7 lg:col-span-5 bg-white-bmr text-gray-900 rounded-xl shadow-lg p-6 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-top-30 w-full">
                            <form className="space-y-4">
                                <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                                    Nombre completo
                                </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                                        placeholder="Ej: Juan Pérez"
                                    />
                                </div>
                                <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                                    Email
                                </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                                        placeholder="Ej: juanperez@gmail.com"
                                    />
                                </div>
                                <div>
                                <label htmlFor="phone" className="block text-sm font-semibold mb-1">
                                    Teléfono
                                </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                                        placeholder="Ej: +54 9 11 2222-3333"
                                    />
                                </div>
                                <div className='pb-0'>
                                <label htmlFor="message" className="block text-sm font-semibold mb-1">
                                    Mensaje
                                </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-2 text-sm"
                                        placeholder="Ej: Hola Caprile..."
                                    >
                                    </textarea>
                                </div>
                                <button
                                type="submit"
                                className="w-full bg-green-950 text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition duration-300"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
        {/* <ContactForm /> */}
        <Footer />
    </>
    )
    
}

export {Home}