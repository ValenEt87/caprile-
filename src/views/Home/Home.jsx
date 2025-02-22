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
import ImageCarousel from '../../components/ImageCarousel.jsx'
import { AboutUsImages } from '../../constants/'
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
            <section className="grid grid-cols-12 mx-5 pb-20 pt-12 lg:pt-24 gap-5 items-center">
                <h2 className="sr-only">Sobre nosotros</h2>
                <div
                    className="col-span-12 lg:col-span-10 lg:col-start-2 lg:col-span-5 lg:col-start-2 lg:px-2 flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                >
                    <div className="col-span-12 lg:col-span-6 flex justify-center order-1 lg:order-2">
                    <ImageCarousel images={AboutUsImages} alt="Testimonial" />
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
                    <h3 className="text-3xl lg:text-5xl font-medium mb-3">
                    Hemos trabajado en numerosas canchas de Argentina, Chile, Uruguay y Brasil.
                    </h3>
                    <p className="px-1 lg:text-lg">
                        Muchos de estos proyectos fueron con diseño propio y otros en
                        colaboración o en la ejecución de proyectos de otros diseñadores como Ken
                        Dye, Bob Cupp, Gary Player Design y American Golf Design, entre otros.
                    </p>
                    <div className="mt-4 lg:mt-6 flex justify-start gap-2">
                    <a
                        href="/sobre-nosotros"
                        className="bg-green-950 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-900 transition duration-500 flex items-center gap-2"
                    >
                        Sobre nosotros
                    </a>
                    </div>
                </div>
                </section>
            <TestimonialCarousel />
            <ContactForm />
            <Footer />
        </>
    )
}

export {Home}