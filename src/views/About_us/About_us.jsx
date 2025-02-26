import React from 'react'
import Navbar from './../../components/Navbar.jsx'
import ContactForm from './../../components/ContactForm.jsx'
import Footer from './../../components/Footer.jsx'


const About_us = () => {
  return (
    <>
      <Navbar />
        <div className='grid grid-cols-12 lg:gap-5 mx-5 xl:mx-auto xl:container py-20 items-center'>
          <div className='col-span-12 lg:col-span-10 lg:col-start-2 my-6 text-center flex flex-col items-center justify-center'>
            {/* <span className='flex justify-center mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#113B21" class="" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </span> */}
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
            <h1 className='text-3xl lg:text-4xl font-bold color-black-bmr'>Sobre nosotros | La historia de Caprile Golf</h1>
            <p className='text-base lg:text-lg'>Más de 50 años y tres generaciones construyendo y remodelando campos de golf.</p>
            {/* <svg className="w-6 h-6 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <h3 className="text-3xl lg:text-xl italic font-medium mb-3 text-center">
                    Una cancha de golf debería verse como si hubiera estado ahí desde que el hombre piso estas pampas.
                </h3>
                <p className="font-medium text-center">Diego Caprile</p> */}
          </div>
          <div className='col-span-12 lg:col-span-5 lg:col-start-2 pb-3'>
            <div className="rounded-lg overflow-hidden mx-auto">
                <img
                src="/public/imgs/Nosotros/Historia6.webp"
                alt="Proyecto 1"
                className="object-cover w-full h-full"
                />
            </div>
          </div>
          <div className='col-span-12 lg:col-start-7 lg:col-span-5' data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                <h2 className='text-xl md:text-xl lg:text-3xl font-bold color-black-bmr lg:mb-3'>Conocé nuestra historia</h2>
                <p className='lg:text-lg'>
                  A fines de los años 60, los hermanos Diego y Alberto Caprile, hasta entonces productores agropecuarios y entusiastas jugadores, deciden <b>diseñar y construir su primer campo de golf y urbanización</b> en las proximidades de Buenos Aires. <br /> Luego del éxito de este desafío y acompañando el crecimiento de este deporte en nuestro país comienza a tomar forma nuestra empresa. A partir de entonces, fuimos <b>sumando experiencia, incorporando personal especializado y equipos de construcción.</b>
                </p>
          </div>
          <div className='col-span-12 lg:col-start-2 lg:col-span-5' data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                <h2 className='text-xl md:text-xl lg:text-3xl font-bold lg:mb-3'>Y nuestra actualidad</h2>
                <p className='lg:text-lg'>
                  Hoy, a más de 50 años de aquellos comienzos, nuestra empresa se encuentra entre las <b>más reconocidas del país</b> y hemos trabajado en numerosas canchas de Argentina, Chile, Uruguay y Brasil. Muchos de estos proyectos fueron con diseño propio y otros en colaboración o en la ejecución de proyectos de otros diseñadores como <b>Ken Dye, Bob Cupp, Gary Player Design y American Golf Design</b>, entre otros.
                </p>
          </div>
            <div className='col-span-10 col-start-7 lg:col-span-5 lg:col-start-7'>
            <div className="rounded-lg overflow-hidden mx-auto">
                <img
                src="/public/imgs/Nosotros/3generaciones.webp"
                alt="Proyecto 1"
                className="object-cover w-full h-full"
                />
            </div>
          </div>
          
          {/*   
          <div className='col-span-10 col-start-2 pt-20 lg:pt-24 text-center flex flex-col items-center justify-center'>
          <svg
              id="Capa_1"
              data-name="Capa 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 975.35 119.75"
              className="w-24 mb-6"
              style={{
                fill: "url(#gradient)", 
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
            <h2 className='text-3xl lg:text-4xl font-bold color-black-bmr'>Nuestro Staff</h2>
            <p className='text-lg'>Desde nuestros comienzos hasta nuestra actualidad creciendo en el Golf.</p>
          </div>
           <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col md:flex-row justify-center gap-3 mb-5 items-center">
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
                <div className="w-full max-w-sm rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center py-5">
                        <img className="w-24 h-24 mb-1 rounded-full shadow-lg" src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png" alt=""/>
                        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Luca Caprile</h3>
                        <p className='px-5 text-center text-gray-900 dark:text-white font-medium'>Urbanizaciones y desarrollos inmobiliarios</p>
                    </div>
                </div>
              </div> */}
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