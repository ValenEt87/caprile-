// Importar las imágenes (simulando nombres únicos)
import img1 from "/imgs/ascochinga.jpg";
import img2 from "/imgs/jockeyclubsalta 2.jpg";
import img3 from "/imgs/ascochinga3.webp";
import img4 from "/imgs/ascochinga4.jpg";

// LOS LAGARTOS URB
import img7 from "/imgs/urbanizaciones/Los Lagartos.webp";
import img8 from "/imgs/urbanizaciones/lagartos.webp";
import img9 from "/imgs/urbanizaciones/lagartos1.webp";
import img10 from "/imgs/urbanizaciones/lagartos2.webp";

//El Nacional Gral Rodriguez URB
import img11 from "/imgs/urbanizaciones/El Nacional.webp";
import img12 from "/imgs/urbanizaciones/elnacional.webp";
import img13 from "/imgs/urbanizaciones/elnacional1.webp";
import img14 from "/imgs/urbanizaciones/elnacional2.webp";
import img15 from "/imgs/urbanizaciones/elnacional3.webp";

// La Cheltonia URB
import img16 from "/imgs/urbanizaciones/lacheltonia.webp";
import img17 from "/imgs/urbanizaciones/lacheltonia1.webp";
import img18 from "/imgs/urbanizaciones/lacheltonia2.webp";

//Springdale URB
import img19 from "/imgs/urbanizaciones/Springdale.webp";

//La Cañada URB
import img20 from "/imgs/urbanizaciones/lacheltonia.webp";

// La Estancia de Cafayate Diseñados
import img21 from "/imgs/disenados/La EstanciadeCafayate1.webp";
import img22 from "/imgs/disenados/La Estancia de Cafayate 4.webp";
import img23 from "/imgs/disenados/La Estancia de Cafayate 5.webp";
import img24 from "/imgs/disenados/La Estancia de Cafayate.webp";

//La Reserva Cardales diseñados
import img25 from "/imgs/disenados/La Reserva Cardales (1).webp";
import img26 from "/imgs/disenados/La Reserva Cardales 2.webp";
import img27 from "/imgs/disenados/La Reserva Cardales.webp";

//La Rioja Golf Club diseñados
import img28 from "/imgs/disenados/La Rioja Golf Club (1).webp";
import img29 from "/imgs/disenados/La Rioja Golf Club.webp"

// La Reserva Camboriú diseñados
import img30 from "/imgs/disenados/Camboriu1.webp";
import img31 from "/imgs/disenados/Camboriu (2).webp";
import img32 from "/imgs/disenados/Camboriu.webp";

//Estancia Villa María diseñados
import img5 from "/imgs/disenados/estancia-villa-maria.webp";
import img6 from "/imgs/disenados/estancia-villa-maria-2.webp";

// AAG Pilar Remodelados
import img33 from "/imgs/remodelados/AAGpilar.webp";
import img34 from "/imgs/remodelados/AAGpilar2.webp";
import img35 from "/imgs/remodelados/AAGpilar3.webp";

// Cariló Golf Remodelados
import img36 from "/imgs/remodelados/Carilo Golf Club.webp";
import img37 from "/imgs/remodelados/carilo golf.webp";
import img38 from "/imgs/remodelados/carilo3.webp";

//Estancias del Pilar
import img39 from "/imgs/remodelados/Estancias del Pilar.webp";
import img40 from "/imgs/remodelados/estanciasdelpilar.webp";

export const golfCourses = [
  {
    category: "Diseñados-y-construidos",
    courses: [
      {
        title: "Ascochinga Golf Club (Córdoba)",
        coverImage: img1,
        images: [
          { src: img1, alt: "Vista aérea de Los Lagartos Country Club" },
          { src: img2, alt: "Detalle del campo en Los Lagartos Country Club" },
          { src: img3, alt: "Green del campo en Los Lagartos Country Club" }
        ]
      },
      {
        title: "Martindale Country Club (Pilar, Bs As)",
        coverImage: img2,
        images: [
          { src: img4, alt: "Vista panorámica de Mayling Club de Campo" },
          { src: img5, alt: "Detalle del fairway en Mayling Club de Campo" },
          { src: img6, alt: "Green del campo en Mayling Club de Campo" }
        ]
      },
      {
        title: "La Reserva (Camboriú, Brasil)",
        coverImage: img30,
        images: [
          { src: img30, alt: "" },
          { src: img31, alt: "" },
          { src: img32, alt: "" }
        ]
      },
      {
        title: "La Estancia de Cafayate (Salta) cc Arq. Bob Cupp",
        coverImage: img21,
        images: [
          { src: img21, alt: "" },
          { src: img22, alt: "" },
          { src: img23, alt: "" },
          { src: img24, alt: "" }
        ]
      }, 
      {
        title: "La Reserva Cardales (Buenos Aires)",
        coverImage: img27,
        images: [
          { src: img25, alt: "" },
          { src: img26, alt: "" },
          { src: img27, alt: "" },
        ]
      },
      {
        title: "El Valle de Tandil (cc Arq. Marcos Capdepont)",
        coverImage: img4,
        images: [
          { src: img1, alt: "Vista aérea de Los Lagartos Country Club" },
          { src: img2, alt: "Detalle del campo en Los Lagartos Country Club" },
          { src: img3, alt: "Green del campo en Los Lagartos Country Club" }
        ]
      },
      {
        title: "La Rioja Golf Club - (La Rioja)",
        coverImage: img29,
        images: [
          { src: img28, alt: "" },
          { src: img29, alt: "" },
        ]
      },
      {
        title: "Estancia Villa Maria (Cañuelas, Bs As) cc American Golf",
        coverImage: img5,
        images: [
          { src: img5, alt: "" },
          { src: img6, alt: "" }
        ]
      },
    ]
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////REMODELADAS E INTERVENIDAS/////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////

  {
    category: "Remodelados-e-intervenidos",
    courses: [
      {
        title: "Asoc. Argentina de Golf (Pilar, Bs As)",
        coverImage: img33,
        images: [
          { src: img33, alt: "Vista del campo Asociación Argentina de Golf" },
          { src: img34, alt: "Vista del campo Asociación Argentina de Golf" },
          { src: img35, alt: "Vista del campo Asociación Argentina de Golf" },
        ]
      },
      {
        title: "Cariló Golf Club (Buenos Aires)",
        coverImage: img36,
        images: [
          { src: img36, alt: "Vista del campo del Cariló Golf Club" },
          { src: img37, alt: "Vista del campo del Cariló Golf Club" },
          { src: img38, alt: "Vista del campo del Cariló Golf Club" },
        ]
      },
      {
        title: "Estancias del Pilar (Pilar, Buenos Aires)",
        coverImage: img39,
        images: [
          { src: img39, alt: "Vista del campo del Estancias del Pilar" },
          { src: img40, alt: "Vista del campo del Estancias del Pilar" }
        ]
      }
    ]
  },
  {
    category: "Urbanizaciones",
    courses: [
      {
        title: "Los Lagartos C.C. (Pilar, Buenos Aires)",
        coverImage: img7,
        images: [
          { src: img7, alt: "Campo principal de Los Lagartos Country Club" },
          { src: img8, alt: "Campo principal de Los Lagartos Country Club" },
          { src: img9, alt: "Campo principal de Los Lagartos Country Club" },
          { src: img10, alt: "Campo principal de Los Lagartos Country Club" }
        ]
      },
      {
        title: "El Nacional Golf (Gral Rodríguez, Bs As)",
        coverImage: img11,
        images: [
          { src: img11, alt: "Campo principal de El Nacional Golf Club" },
          { src: img12, alt: "Campo principal de El Nacional Golf Club" },
          { src: img13, alt: "Campo principal de El Nacional Golf Club" },
          { src: img14, alt: "Campo principal de El Nacional Golf Club" },
          { src: img15, alt: "Campo principal de El Nacional Golf Club" },
        ]
      },
      {
        title: "La Cheltonia (Venado Tuerto, Bs As)",
        coverImage: img16,
        images: [
          { src: img16, alt: "Campo principal La Cheltonia" },
          { src: img17, alt: "Campo principal La Cheltonia" },
          { src: img18, alt: "Campo principal La Cheltonia" },
        ]
      },
      {
        title: "Springdale Barrio Cerrado (Pilar, Bs.As.)",
        coverImage: img19,
        images: [
          { src: img19, alt: "Campo principal Springdale Barrio Cerrado" },
        ]
      },
      /* {
        title: "La Cañada Golf (Open Door, Buenos Aires)",
        coverImage: img20,
        images: [
          { src: img20, alt: "Campo principal La Cheltonia" },
        ]
      } */
    ]
  }
];

// constants.js
export const projectsWithoutImages = [
  {
    category: "Diseñados-y-construidos",
    courses: [
      { title: "Los Lagartos Country Club - (Pilar, Buenos Aires)" },
      { title: "Mayling Club de Campo - (Pilar, Buenos Aires)" },
      { title: "La Barra Golf Club - (Punta del Este, Uruguay). En colaboracion con Emilio Serra" },
      { title: "Abril Country Club - (Hudson, Buenos Aires). En colaboracion con el Arq. Marcos Capdepont" },
      { title: "Jockey Club de Venado Tuerto - (Venado Tuerto, Santa Fe)" },
      { title: "Algodon Wine Estates - (San Rafael, Mendoza). En colaboración con Ricky Jurado." },
      { title: "Jockey Club de Salta - (Salta)" },
      { title: "La Vacherie C.C. (Alto Lunlunta, Mendoza). En colaboracion con el Arq. Marcos Capdepont" },
      { title: "Estancia Villa Maria - (Cañuelas, Buenos Aires). Diseño de American Golf." },
      { title: "Haras Santa Maria - (Escobar, Buenos Aires)" },
      { title: "Valle Escondido G.C. - (San Martín de los Andes, Neuquén)" },
      { title: "La Primavera C.C. - (Lujan, Buenos Aires)" },
      { title: "Medal Golf Club - (Pilar, Buenos Aires)" },
      { title: "Haras Los Moros - (Suipacha, Buenos Aires)" },
      { title: "La Lomada - (Pilar, Buenos Aires)" },
      { title: "Silente Club de Mar - (Punta del Este, Uruguay)" },
      { title: "ALG Golf Center - (Pilar, Buenos Aires)" },
      { title: "Grand Bell C.C. - (City Bell, Buenos Aires). Diseño de Roberto De Vicenzo." }
    ]
  },
  {
    category: "Remodelados-e-intervenidos",
    courses: [
      { title: "Jockey Club Argentino - (San Isidro, Buenos Aires)" },
      { title: "Club Universitario Bs.As. - (Pilar, Buenos Aires)" },
      { title: "San Isidro Golf - (San Isidro, Buenos Aires)" },
      { title: "San Diego Country Club - (Moreno, Buenos Aires)" },
      { title: "Golfers C.C. - (Pilar, Buenos Aires)" },
      { title: "Club Náutico San Isidro - (San Isidro, Buenos Aires)" },
      { title: "Links Pinamar - (Pinamar, Buenos Aires)" },
      { title: "Esperanza Golf Club - (Esteban Echeverría, Buenos Aires)" },
      { title: "Club de Campo La Martona - (Cañuelas, Buenos Aires)" },
      { title: "Campo Chico C.C. - (Pilar, Buenos Aires)" },
      { title: "San Antonio de Areco G.C. - (S. A. de Areco, Buenos Aires)" },
      { title: "Newman C.C. - (Benavidez, Buenos Aires)" },
      { title: "Venado Tuerto Polo Club - (Venado Tuerto, Santa Fe)" },
      { title: "Golf Club Argentino - (Jose C. Paz, Buenos Aires)" },
      { title: "Boulogne G.C. - (San Isidro, Buenos Aires)" },
      { title: "Club Estudiantes de La Plata - (City Bell, Buenos Aires)" }
    ]
  },
  {
    category: "Urbanizaciones",
    courses: [
      { title: "La Cañada Golf - (Open Door, Pcia. de Bs.As.)" }
    ]
  }
];


export const historiacalImages = [
  "/imgs/Nosotros/lagartos1967.webp",
  "/imgs/Nosotros/arelauquen1972.webp",
  "/imgs/Nosotros/image6.webp",
];

export const actualImages = [
  "/imgs/Nosotros/3generaciones.webp",
  "/imgs/Nosotros/pablo.webp",
];

export const testimonialImages = [
  "/imgs/gary3.webp",
  "/imgs/gary.webp",
  "/imgs/gary2.webp",
];

export const AboutUsImages = [
  "/imgs/Nosotros/historia6.webp",
  "/imgs/Nosotros/3generaciones.webp",
  "/imgs/Nosotros/Marcos Capdepont, Ken Dye y Tolo Caprile en Martindale.webp",
  "/imgs/Nosotros/pablo.webp",
];
