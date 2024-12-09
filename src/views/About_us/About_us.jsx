import React from 'react'
import Navbar from './../../components/Navbar.jsx'
import ContactForm from './../../components/ContactForm.jsx'
import Footer from './../../components/Footer.jsx'


const About_us = () => {
  return (
    <>
      <Navbar />
        <div className='grid grid-cols-12 gap-5 lg:mx-5 xl:mx-auto xl:container py-16 items-center'>
          <div className='col-span-10 col-start-2 my-6 text-center'>
            <h1 className='sr-only'>La historia de Caprile Golf</h1>
            {/* <span className='flex justify-center mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#113B21" class="" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </span> */}
            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold color-black-bmr'>Sobre nosotros</h2>
            <p className='text-lg'>Desde nuestros comienzos hasta nuestra actualidad creciendo en el Golf.</p>
          </div>
          <div className='col-span-10 col-start-2 lg:col-span-5 lg:col-start-2'>
            <div className="rounded-lg overflow-hidden mx-auto image-hover-container">
                <img
                src="/public/imgs/Historia 6.jpg"
                alt="Proyecto 1"
                className="object-cover w-full h-full"
                />
                <img
                src="/public/imgs/image6.jpg"
                alt="Proyecto 1"
                className="object-cover w-full h-full alt-image"
                />
            </div>
          </div>
          <div className='col-span-10 col-start-2 lg:col-start-7 lg:col-span-5' data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold color-black-bmr mb-3'>Conocé nuestra historia</h2>
                  <p className='text-lg'>
                    A fines de los años 60, los hermanos Diego y Alberto Caprile, hasta entonces productores agropecuarios y entusiastas jugadores, deciden diseñar y construir su primer campo de golf y urbanización en las proximidades de Buenos Aires. Luego del éxito de este desafío y acompañando el crecimiento de este deporte en nuestro país comienza a tomar forma nuestra empresa. A partir de entonces, fuimos sumando experiencia, incorporando personal especializado y equipos de construcción.
                  </p>
            </div>
          <div className='col-span-10 col-start-2 lg:col-start-2 lg:col-span-5' data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3'>Y nuestra actualidad</h2>
                  <p className='text-lg'>
                    Hoy, a más de 50 años de aquellos comienzos, nuestra empresa se encuentra entre las más reconocidas del país y hemos trabajado en numerosas canchas de Argentina, Chile, Uruguay y Brasil. Muchos de estos proyectos fueron con diseño propio y otros en colaboración o en la ejecución de proyectos de otros diseñadores como Ken Dye, Bob Cupp, Gary Player Design y American Golf Design, entre otros.

                    Ofrecemos a nuestros clientes la posibilidad de contratar el diseño integral de urbanizaciones con canchas de golf, logrando de esta manera que el paisajismo y la vivienda se integren armónicamente optimizando el uso del terreno.
                  </p>
            </div>
            <div className='col-span-10 col-start-7 lg:col-span-5 lg:col-start-7'>
            <div className="rounded-lg overflow-hidden mx-auto">
                <img
                src="https://www.invitedclubs.com/globalassets/the-national-golf-club/_images/photoshelter-2023/the-national_golf_main_dji_0514_1920_1200.jpg?format=webp"
                alt="Proyecto 1"
                className="object-cover w-full h-full"
                />
            </div>
          </div>
          

          <div className='col-span-10 col-start-2 pt-24 text-center'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold color-black-bmr'>Nuestro Staff</h2>
            <p className='text-lg'>Desde nuestros comienzos hasta nuestra actualidad creciendo en el Golf.</p>
          </div>
          <div className="col-span-10 col-start-2 flex flex-col md:flex-row justify-center gap-3 mb-5 items-center">
                <div className="w-full max-w-sm rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center py-5">
                        <img className="w-24 h-24 mb-1 rounded-full shadow-lg" src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png" alt=""/>
                        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Pablo A. Caprile</h3>
                        <p className='px-5 text-center text-gray-900 dark:text-white font-medium'>Diseño y Construcción de campos de golf</p>
                    </div>
                </div>
                <div className="w-full max-w-sm rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center py-5">
                        <img className="w-24 h-24 mb-1 rounded-full shadow-lg" src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png" alt=""/>
                        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Juan Ignacio Balbiani</h3>
                        <p className='px-5 text-center text-gray-900 dark:text-white font-medium'>Diseño y Construcción de campos de golf</p>
                    </div>
                </div>
                <div className="w-full max-w-sm rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center py-5">
                        <img className="w-24 h-24 mb-1 rounded-full shadow-lg" src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png" alt=""/>
                        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Alberto N. Caprile</h3>
                        <p className='px-5 text-center text-gray-900 dark:text-white font-medium'>Urbanizaciones y desarrollos inmobiliarios</p>
                    </div>
                </div>
                <div className="w-full max-w-sm rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center py-5">
                        <img className="w-24 h-24 mb-1 rounded-full shadow-lg" src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png" alt=""/>
                        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Arq. Gustavo Borlasca</h3>
                        <p className='px-5 text-center text-gray-900 dark:text-white font-medium'>Urbanizaciones y desarrollos inmobiliarios</p>
                    </div>
                </div>
              </div>
            {/* <div className='col-start-4 col-span-6 flex justify-center'>
              <a href='#' className="text-white bg-green-caprile py-3 px-6 lg:px-5 font-bold rounded-lg text-center transition duration-300 ease-in-out w-full" target='_blank'>
                  Contactar
              </a>
            </div> */}
        </div>
        <ContactForm />
        <Footer />
    </>
  )
}

export {About_us}