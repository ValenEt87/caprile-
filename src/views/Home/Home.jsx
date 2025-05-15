import React from 'react'
import Navbar from './../../components/Navbar.jsx'
import Footer from './../../components/Footer.jsx'
import './../../App.css'
import Hero from './../../components/Hero.jsx'
import TestimonialCarousel from './../../components/TestimonialCarousel.jsx'
import Services from './../../components/Services/Services.jsx'
import { NavLink } from 'react-router-dom';
import ProjectsSection from './../../components/ProjectsSection.jsx'
import ServiceSection from '../../components/ServiceSection.jsx'
import AboutUsComponent from '../../components/AboutUsComponent.jsx'
import WhatsAppButton from '../../components/WhatsAppButton.jsx';
import ContactForm from '../../components/ContactForm.jsx'
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <AboutUsComponent />
            <ServiceSection />
            <TestimonialCarousel />
            <div className="grid grid-cols-12" 
             data-aos="fade-up"
             data-aos-duration="700"
             data-aos-easing="ease-in-out"
             >
                <div className="col-span-12 flex justify-center">
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
                </div> 
            </div>
            <ProjectsSection />
            <div className='pt-16'></div>
            <ContactForm />
            <WhatsAppButton />
            <Footer />
        </>
    )
}

export {Home}