import React from 'react'

const Card = () => {
  return (
    <div className='grid grid-cols-12 container mx-auto my-24'>
        <div className="col-span-12 text-center mb-6">
            <h2 className='sr-only'>Nuestros servicios</h2>
            <h3 className="lg:text-3xl text-xl onest-semibold title-decoration">Impulsá tu propiedad</h3>
        </div>

        <div className='lg:col-start-3 col-span-12 lg:col-span-8 mt-3'>
            <div className="flex flex-col items-center bg-white rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-5 lg:mx-0">
                <img className="object-cover w-full rounded-t-lg h-96 lg:h-auto lg:w-64 lg:rounded-none lg:rounded-s-lg" src="./imgs/living-pequeno.jpg" alt="Living pequeño en propiedad para alquilar"/>
                <div className="flex flex-col p-4 leading-normal w-full">
                    <h4 className="text-xl onest-semibold tracking-tight text-gray-900 dark:text-white">Gestión Digital</h4>
                    <ul role="list" className="flex lg:flex-row mt-3 flex-col flex-wrap">
                        <div className="md:pr-4 md:w-1/3 flex flex-col">
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Gestión de Reservas</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Comunicación con huéspedes</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Anuncio / Publicación</span>
                            </li>
                        </div>
                        <div className="md:pr-4 md:w-1/3">
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">AIRBNB SEO</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Calendario actualizado</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Estrategia de Pricing</span>
                            </li>
                        </div>
                        <div className="md:pr-4 md:w-1/3">
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Reseñas de huéspedes</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Ganancias en dólares</span>
                            </li>
                        </div>
                    </ul>
                    <div className='flex justify-center'>
                        <a href='https://wa.me/5491123969144?text=¡Hola!%20vengo%20desde%20la%20web%20y%20me%20interesa%20el%20Pack%20de%20Gestión%20Digital' className='bg-green-caprile rounded-full py-3 px-6 lg:px-5 text-white onest-medium hover-blue transition duration-300 ease-in-out' target='_blank'>Consultar</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:col-start-3 col-span-12 lg:col-span-8 mt-3'>
            <div className="flex flex-col items-center bg-white rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-5 lg:mx-0">
                <img className="object-cover w-full rounded-t-lg h-96 lg:h-auto lg:w-64 lg:rounded-none lg:rounded-s-lg" src="./imgs/cocina-blanca.jpg" alt="Cocina en tonos blancos en propiedad para alquilar en CABA"/>
                <div className="flex flex-col p-4 leading-normal w-full">
                    <h4 className="text-xl onest-semibold tracking-tight text-gray-900 dark:text-white">Gestión Full</h4>
                    <ul role="list" className="flex lg:flex-row mt-3 flex-col flex-wrap">
                        <div className="md:pr-4 md:w-1/3 flex flex-col">
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base onest-bold leading-tight color-blue-bmr dark:text-gray-400 ms-3">Pack Gestión Digital</span>
                            </li>
                            <li className="flex items-center justify-center mb-3">
                                <span className="font-bold leading-tight color-yellow-bmr dark:text-gray-400">+</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Check In / Out</span>
                            </li>
                        </div>
                        <div className="md:pr-4 md:w-1/3">
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Servicio de Limpieza</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Mantenimiento</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Asistencia Física</span>
                            </li>
                        </div>
                        <div className="md:pr-4 md:w-1/3">
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Reportes mensuales</span>
                            </li>
                            <li className="flex items-center mb-3">
                                <svg className="flex-shrink-0 w-4 h-4 color-blue-bmr dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Ganancias en dólares</span>
                            </li>
                        </div>
                    </ul>
                    <div className='flex justify-center'>
                        <a href='https://wa.me/5491123969144?text=¡Hola!%20vengo%20desde%20la%20web%20y%20me%20interesa%20el%20Pack%20de%20Gestión%20Full' className='bg-green-caprile rounded-full py-3 px-6 lg:px-5 text-white onest-medium hover-blue transition duration-300 ease-in-out'  target='_blank'>Consultar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card