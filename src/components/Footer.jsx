import * as React from "react";
import * as ReactDOM from "react-dom/client";

const Footer = () => {

  return (
    <footer className="dark:bg-gray-900 pt-10 lg:pt-16 border-t border-[rgb(206,201,193)]">
        <div className="2xl:mx-auto w-full grid grid-cols-12 md:gap-5 gap-2 lg:mx-5 ">
            <div className="mb-6 md:mb-0 col-span-10 col-start-2 lg:col-span-4 lg:col-start-2 md:col-start-2 md:col-span-10">
                <a href="#" className="flex items-center mb-3 lg:mb-6"> 
                    <img src="./logo-caprile1.svg" alt="logo de Caprile Golf" className="max-w-48" />
                </a>
            </div>
            <div className="lg:col-start-7 lg:col-span-5 col-span-10 col-start-2 grid md:grid-cols-2 gap-8 sm:gap-5">
                <div className="sr-only md:not-sr-only">
                    <span className="font-bold color-blue-bmr">Links</span>
                    <ul className="text-slate-300 font-medium md:mt-3">
                        <li className="mb-4">
                            <a href="/proyectos" className="nav-link flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right mr-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                                Proyectos
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="/sobre-nosotros" className="nav-link flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right mr-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                                Sobre Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="/sobre-nosotros" className="nav-link flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right mr-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col md:text-center md:text-start md:mt-3 md:mt-0">
                    <span className="font-bold color-blue-bmr">Contactanos</span>
                    <ul className="text-slate-300 font-medium mt-3">
                        <li className="mb-4">
                            <a href="mailto:info@caprilegolf.com.ar" target="_blank" className="nav-link flex items-center truncate">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right mr-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope mr-1" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                                info@caprilegolf.com.ar
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="tel:+549112396-9144" aria-label="Llamar a la empresa" target="_blank" className="nav-link flex items-center">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right mr-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone mr-1" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                                +54 9 15 52284962
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/5PTrYcmnMiFuJkB88" target="_blank" className="nav-link flex items-center">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right mr-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt mr-1" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                Monseñor Calcagno 392, San Isidro
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between text-center col-span-12 py-4">
                <span className="text-sm text-gray-700 sm:text-center dark:text-gray-400 w-full">© 2025 Caprile Golf
                </span>
            </div>
        </div>
        <div className="col-span-12 bg-green-950 py-4 text-white text-center text-sm flex justify-center items-center gap-2">
            <span>Hecho a través de</span>
            <a href="https://www.instagram.com/valentin_et/" target="_blanck"><img src="./logo-alba.svg" alt="logo de Alba" className="w-4" /></a>
        </div>
    </footer>
  )
}

export default Footer