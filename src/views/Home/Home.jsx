import React from 'react'
import Navbar from './../../components/Navbar.jsx'
import Footer from './../../components/Footer.jsx'
import './../../App.css'
import Hero from './../../components/Hero.jsx'
import Card from './../../components/Card.jsx'
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
            <ProjectsSection />
            <ServiceSection />
            <AboutUsComponent />
            <TestimonialCarousel />
            <ContactForm />
            <Footer />
        </>
    )
}

export {Home}