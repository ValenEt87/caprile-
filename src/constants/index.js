// Importar las imágenes (simulando nombres únicos)
import img1 from "/imgs/disenados/ascochinga.jpg";
import img3 from "/imgs/disenados/Ascochinga5.webp";
import img4 from "/imgs/disenados/ascochinga4.jpg";

// LOS LAGARTOS URB
import img7 from "/imgs/urbanizaciones/Los Lagartos.webp";
import img13 from "/imgs/urbanizaciones/LosLagartos.webp";

//El Nacional Gral Rodriguez URB
import img11 from "/imgs/urbanizaciones/el nacional 4.webp";
import img12 from "/imgs/urbanizaciones/El Nacional.webp";

//EL VALLE DE TANDIL
import img41 from "/imgs/disenados/Valle de Tandil.webp";
import img42 from "/imgs/disenados/Valle de Tandil1.webp";

//JOCKEY CLUB DE SALTA
import img14 from "/imgs/disenados/jockeyclubsalta.webp";
import img15 from "/imgs/disenados/Jockey Club de Salta (1).webp";

// Martindale
import img156 from "/imgs/disenados/Martindale.webp";
import img16 from "/imgs/disenados/Martindale 1.webp";
import img17 from "/imgs/disenados/Martindale (2).webp";
import img18 from "/imgs/disenados/Martindale (4).webp";

//Springdale URB
import img19 from "/imgs/urbanizaciones/Springdale.webp";

//La Cañada URB
import img20 from "/imgs/disenados/Algodon Wine & Golf.webp";

// La Estancia de Cafayate Diseñados
import img21 from "/imgs/disenados/La EstanciadeCafayate1.webp";
import img22 from "/imgs/disenados/La Estancia de Cafayate 4.webp";
import img23 from "/imgs/disenados/La Estancia de Cafayate 5.webp";
import img24 from "/imgs/disenados/La Estancia de Cafayate.webp";

//La Reserva Cardales diseñados
import img25 from "/imgs/disenados/lareservacardale2.webp";
import img26 from "/imgs/disenados/lareservacardales1.webp";
import img27 from "/imgs/disenados/lareservacardales.webp";

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

// HARAS SANTA MARIA
import img33 from "/imgs/disenados/harassantamaria.webp";

// Cariló Golf Remodelados
import img36 from "/imgs/remodelados/Carilo Golf Club.webp";


//MAYLING
import img37 from "/imgs/disenados/Mayling.webp";

//SILENTE URUGUAY
import img40 from "/imgs/disenados/Silente.webp";

//Estancias del Pilar
import img39 from "/imgs/remodelados/Estancias del Pilar.webp";

//CUBA FATIMA REMODELADOS
import img43 from "/imgs/remodelados/CUBA Fatima.webp";
import img44 from "/imgs/remodelados/CUBA1.webp";
import img45 from "/imgs/remodelados/cuba2.webp";
import img46 from "/imgs/remodelados/cuba3.webp";

//Valle Escondido DISEÑADAS
import img47 from "/imgs/disenados/valleescondido.webp";
import img48 from "/imgs/disenados/valleescondido1.webp";
import img49 from "/imgs/disenados/Vallescondido.webp";

export const golfCourses = [
  {
    category: "Diseñados-y-construidos",
    courses: [
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
        title: "Martindale Country Club (Pilar, Bs As)",
        coverImage: img16,
        images: [
          { src: img156, alt: "" },
          { src: img16, alt: "" },
          { src: img17, alt: "" },
          { src: img18, alt: "" }
        ]
      },
    {
      title: "La Reserva Cardales (Buenos Aires)",
      coverImage: img25,
      images: [
        { src: img25, alt: "Vista cancha La Reserva de Cardales" },
        { src: img26, alt: "Vista cancha La Reserva de Cardales" },
        { src: img27, alt: "Vista cancha La Reserva de Cardales" },
      ]
    },
      {
        title: "Ascochinga Golf Club (Córdoba)",
        coverImage: img1,
        images: [
          { src: img1, alt: "" },
          { src: img4, alt: "" },
          { src: img3, alt: "" }
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
        title: "El Valle de Tandil (cc Arq. Marcos Capdepont)",
        coverImage: img42,
        images: [
          { src: img41, alt: "" },
          { src: img42, alt: "" }
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
      {
        title: "Algodon Wine Estates (Mendoza) cc Ricky Jurado.",
        coverImage: img20,
        images: [
          { src: img20, alt: "Algodon Wine Estates (Mendoza)" },
        ]
      },
      {
        title: "Haras Santa María (Escobar, Buenos Aires)",
        coverImage: img33,
        images: [
          { src: img33, alt: "Campo Haras Santa María (Escobar, Buenos Aires)" },
        ]
      },
      {
        title: "Jockey Club de Salta - (Salta)",
        coverImage: img14,
        images: [
          { src: img14, alt: "Imagen de green en Jockey CLub de Salta" },
          { src: img15, alt: "Imagen de Jockey CLub de Salta" },
        ]
      },
      {
        title: "Mayling Club de Campo - (Pilar, Buenos Aires)",
        coverImage: img37,
        images: [
          { src: img37, alt: "Mayling Club de Campo" },
        ]
      },
      {
        title: "Silente Club de Mar (Punta del Este, Uruguay) ",
        coverImage: img40,
        images: [
          { src: img40, alt: "Silente Club de Mar (Punta del Este, Uruguay) " },
        ]
      },
      {
        title: "Valle Escondido G.C.(Neuquén) ",
        coverImage: img49,
        images: [
          { src: img47, alt: "Valle Escondido G.C. (San Martín de los Andes, Neuquén)" },
          { src: img48, alt: "Valle Escondido G.C. (San Martín de los Andes, Neuquén)" },
          { src: img49, alt: "Valle Escondido G.C. (San Martín de los Andes, Neuquén)" },
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
        title: "Cariló Golf Club (Buenos Aires)",
        coverImage: img36,
        images: [
          { src: img36, alt: "Vista del campo del Cariló Golf Club" },
          /* { src: img37, alt: "Vista del campo del Cariló Golf Club" },
          { src: img38, alt: "Vista del campo del Cariló Golf Club" }, */
        ]
      },
      {
        title: "CUBA Fátima (Buenos Aires)",
        coverImage: img43,
        images: [
          { src: img43, alt: "Vista del campo CUBA Fátima Buenos Aires" },
          { src: img44, alt: "Vista del campo CUBA Fátima Buenos Aires" },
          { src: img45, alt: "Vista del campo CUBA Fátima Buenos Aires" },
          { src: img46, alt: "Vista del campo CUBA Fátima Buenos Aires" },
        ]
      },
      {
        title: "Estancias del Pilar (Pilar, Buenos Aires)",
        coverImage: img39,
        images: [
          { src: img39, alt: "Vista del campo del Estancias del Pilar" },
         /*  { src: img40, alt: "Vista del campo del Estancias del Pilar" } */
        ]
      }
    ]
  },
  {
    category: "Urbanizaciones",
    courses: [
      {
        title: "Los Lagartos C.C. (Pilar, Buenos Aires)",
        coverImage: img13,
        images: [
          { src: img13, alt: "Campo de Los Lagartos Country Club" },
          { src: img7, alt: "Campo principal de Los Lagartos Country Club" },
          /* { src: img9, alt: "Campo principal de Los Lagartos Country Club" },
          { src: img10, alt: "Campo principal de Los Lagartos Country Club" } */
        ]
      },
      {
        title: "El Nacional Golf (Gral Rodríguez, Bs As)",
        coverImage: img11,
        images: [
          { src: img11, alt: "Campo principal de El Nacional Golf Club" },
          { src: img12, alt: "Campo principal de El Nacional Golf Club" },
        ]
      },
      /* {
        title: "La Cheltonia (Venado Tuerto, Bs As)",
        coverImage: img16,
        images: [
          { src: img16, alt: "Campo principal La Cheltonia" },
          { src: img17, alt: "Campo principal La Cheltonia" },
          { src: img18, alt: "Campo principal La Cheltonia" },
        ]
      }, */
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
      { title: "La Barra Golf Club - (Punta del Este, Uruguay). En colaboracion con Emilio Serra" },
      { title: "Abril Country Club - (Hudson, Buenos Aires). En colaboracion con el Arq. Marcos Capdepont" },
      { title: "Jockey Club de Venado Tuerto - (Venado Tuerto, Santa Fe)" },
      { title: "La Vacherie C.C. (Alto Lunlunta, Mendoza). En colaboracion con el Arq. Marcos Capdepont" },
      { title: "La Primavera C.C. - (Lujan, Buenos Aires)" },
      { title: "Medal Golf Club - (Pilar, Buenos Aires)" },
      { title: "Haras Los Moros - (Suipacha, Buenos Aires)" },
      { title: "La Lomada - (Pilar, Buenos Aires)" },
      { title: "ALG Golf Center - (Pilar, Buenos Aires)" },
      { title: "Grand Bell C.C. - (City Bell, Buenos Aires). Diseño de Roberto De Vicenzo." },
      { title: "Villa Arelauquen (Bariloche, Rio Negro)" },
      { title: "Club de Golf La Dehesa (Santiago de Chile, Chile)"},
      { title: "Carmel C.C. (Pilar, Benos Aires)" },
      { title: "Libertad G.C. (Merlo, Buenos " }
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
      { title: "La Cañada Golf - (Open Door, Pcia. de Bs.As.)" },
      { title: "La Cheltonia (Venado Tuerto, Pcia. de Bs.As.)" },
    ]
  }
];


export const historiacalImages = [
  "/imgs/Nosotros/image6.webp",
  "/imgs/Nosotros/lagartos1967.webp",
  "/imgs/Nosotros/arelauquen1972.webp",
  "/imgs/Nosotros/Marcos Capdepont, Ken Dye y Tolo Caprile en Martindale.webp",
  "/imgs/Nosotros/Augusta1972.webp",
];

export const actualImages = [
  "/imgs/Nosotros/pablo.webp",
  "/imgs/Nosotros/Golfito7.webp",
  "/imgs/Nosotros/Actualidad-.webp",
  "/imgs/Nosotros/3generaciones.webp",
];

export const testimonialImages = [
  "/imgs/gary2.webp",
  "/imgs/gary.webp",
  "/imgs/gary3.webp",
];

export const AboutUsImages = [
  "/imgs/servicios/MOVIMIENTODESUELOSOK.webp",
  "/imgs/servicios/NIVELACIONDETEESOK.webp",
  "/imgs/servicios/CONSTRUCCIONDEGREENOK.webp",
  "/imgs/servicios/CONTRUCCIONDEGREENSOK.webp",
  "/imgs/servicios/DRENAJESOK.webp",
];
