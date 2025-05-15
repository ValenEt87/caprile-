import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar estado del menú
  };

  return (
    <div>
      <nav
        className={`navbar-bg fixed w-full z-50 top-0 start-0 transition-all duration-300 ease-[cubic-bezier(0.42, 0.00, 0.58, 1.00)] ${
          scrolled
            ? 'border-b border-[rgb(206,201,193)] backdrop-blur-[4px] bg-white/90'
            : 'bg-[#f5f5f5]'
        }`}
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <div className="px-5 lg:px-8 flex flex-wrap items-center justify-between mx-auto py-3 lg:py-5">
          <a href="/" className="flex items-center">
            <img src="./logo-caprile1.svg" alt="logo de Caprile Golf" className="max-w-40" />
          </a>
          <div className="flex space-x-2 md:space-x-0 rtl:space-x-reverse bg-white-caprile">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen}
              onClick={toggleMenu} // Añadir controlador de eventos
            >
              <span className="sr-only">Menu Hamburguesa</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? '' : 'hidden'
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col justify-between py-8 px-6 md:p-0 mt-4 font-medium  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-5">
            <li className="">
              <a
                href="/"
                activeClassName="text-green-800"
                className={`relative py-2 px-3 font-semibold nav-link rounded md:p-0 md:dark:text-blue-500 group ${
                  location.pathname === '/' ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="">
              <a
                href="/proyectos"
                activeClassName="text-green-800"
                className={`relative py-2 px-3 font-semibold nav-link rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group ${
                  location.pathname === '/proyectos' ? 'text-green-800' : 'text-gray-500'
                }`}
              >
                Proyectos
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="">
              <a
                href="/sobre-nosotros"
                activeClassName="text-green-800"
                className={`relative py-2 px-3 font-semibold nav-link rounded md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group ${
                  location.pathname === '/sobre-nosotros' ? 'text-green-800' : 'text-gray-500'
                }`}
              >
                Nosotros
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
              <li className="">
                {/* <a
                  href="#contacto"
                  activeClassName="text-green-800"
                  className={`py-2 px-3 lg:p-3 font-semibold nav-link bg-green-950 text-white rounded-lg md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:bg-green-900 dark:border-gray-700 ${
                    location.pathname === '/sobre-nosotros'
                      ? 'text-green-800'
                      : 'text-gray-500'
                  }`}
                >
                  Contacto
                </a> */}
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`py-2 px-3 lg:py-3 lg:px-5 font-semibold nav-link bg-green-900 text-white rounded-full md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:bg-green-800 dark:border-gray-700 ${
                    location.pathname === '/sobre-nosotros' ? 'text-green-800' : 'text-gray-500'
                  }`}
                >
                  Escribinos
                </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
