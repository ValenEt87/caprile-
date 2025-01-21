// Importar las imágenes (simulando nombres únicos)
import img1 from "../../public/imgs/ascochinga.jpg";
import img2 from "../../public/imgs/jockeyclubsalta 2.jpg";
import img3 from "../../public/imgs/ascochinga3.jpg";
import img4 from "../../public/imgs/ascochinga4.jpg";
import img5 from "../../public/imgs/ascochinga.jpg";
import img6 from "../../public/imgs/ascochinga.jpg";

export const golfCourses = [
  {
    category: "Disenados-y-construidos",
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
        coverImage: img3,
        images: [
          { src: img4, alt: "Vista panorámica de Mayling Club de Campo" },
          { src: img5, alt: "Detalle del fairway en Mayling Club de Campo" },
          { src: img6, alt: "Green del campo en Mayling Club de Campo" }
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
        coverImage: img1,
        images: [
          { src: img4, alt: "Vista panorámica de Mayling Club de Campo" },
          { src: img5, alt: "Detalle del fairway en Mayling Club de Campo" },
          { src: img6, alt: "Green del campo en Mayling Club de Campo" }
        ]
      },
      {
        title: "La Estancia de Cafayate (Salta) cc Arq. Bob Cupp",
        coverImage: img4,
        images: [
          { src: img4, alt: "Vista panorámica de Mayling Club de Campo" },
          { src: img5, alt: "Detalle del fairway en Mayling Club de Campo" },
          { src: img6, alt: "Green del campo en Mayling Club de Campo" }
        ]
      },
      /* {
        title: "Martindale Country Club (Pilar, Buenos Aires). En colaboración con el Arq. Ken Dye (USA)",
        images: [
          { src: "img7", alt: "Paisaje del Martindale Country Club" },
          { src: "img8", alt: "Detalle del campo en Martindale Country Club" },
          { src: "img9", alt: "Green principal del Martindale Country Club" }
        ]
      },
      {
        title: "La Barra Golf Club (Punta del Este, Uruguay)",
        images: [
          { src: "img10", alt: "Campo principal de La Barra Golf Club" },
          { src: "img11", alt: "Vista aérea de La Barra Golf Club" },
          { src: "img12", alt: "Detalle del green en La Barra Golf Club" }
        ]
      },
      {
        title: "Abril Country Club (Hudson, Buenos Aires). En colaboración con el Arq. Marcos Capdepont",
        images: [
          { src: "img13", alt: "Vista del campo en Abril Country Club" },
          { src: "img14", alt: "Detalle del paisaje en Abril Country Club" },
          { src: "img15", alt: "Green del campo en Abril Country Club" }
        ]
      },
      {
        title: "Jockey Club de Venado Tuerto (Venado Tuerto, Santa Fe)",
        images: [
          { src: "img16", alt: "Campo del Jockey Club de Venado Tuerto" },
          { src: "img17", alt: "Detalle del fairway en Jockey Club de Venado Tuerto" },
          { src: "img18", alt: "Green del campo en Jockey Club de Venado Tuerto" }
        ]
      },
      {
        title: "Ascochinga Golf Club (Ascochinga, Córdoba)",
        images: [
          { src: "img19", alt: "Vista aérea del Ascochinga Golf Club" },
          { src: "img20", alt: "Paisaje del campo Ascochinga Golf Club" },
          { src: "img21", alt: "Green principal del Ascochinga Golf Club" }
        ]
      },
      {
        title: "El Valle de Tandil (Tandil, Buenos Aires). En colaboración con el Arq. Marcos Capdepont",
        images: [
          { src: "img22", alt: "Paisaje del campo El Valle de Tandil" },
          { src: "img23", alt: "Detalle del green en El Valle de Tandil" },
          { src: "img24", alt: "Vista aérea del El Valle de Tandil" }
        ]
      },
      {
        title: "La Rioja Golf Club (La Rioja)",
        images: [
          { src: "img25", alt: "Vista panorámica de La Rioja Golf Club" },
          { src: "img26", alt: "Detalle del fairway en La Rioja Golf Club" },
          { src: "img27", alt: "Green del campo en La Rioja Golf Club" }
        ]
      },
      {
        title: "Algodon Wine Estates (San Rafael, Mendoza). En colaboración con Ricky Jurado",
        images: [
          { src: "img28", alt: "Campo del Algodon Wine Estates" },
          { src: "img29", alt: "Vista aérea del Algodon Wine Estates" },
          { src: "img30", alt: "Detalle del green en Algodon Wine Estates" }
        ]
      },
      {
        title: "Jockey Club de Salta (Salta)",
        images: [
          { src: "img31", alt: "Vista del campo Jockey Club de Salta" },
          { src: "img32", alt: "Detalle del fairway en Jockey Club de Salta" },
          { src: "img33", alt: "Green del campo en Jockey Club de Salta" }
        ]
      },
      {
        title: "La Estancia de Cafayate (Cafayate, Salta). Diseño del Arq. Bob Cupp (USA)",
        images: [
          { src: "img34", alt: "Paisaje de La Estancia de Cafayate" },
          { src: "img35", alt: "Vista aérea de La Estancia de Cafayate" },
          { src: "img36", alt: "Detalle del green en La Estancia de Cafayate" }
        ]
      },
      {
        title: "La Vacherie C.C. (Alto Lunlunta, Mendoza). En colaboración con el Arq. Marcos Capdepont",
        images: [
          { src: "img37", alt: "Vista del campo La Vacherie" },
          { src: "img38", alt: "Detalle del fairway en La Vacherie" },
          { src: "img39", alt: "Green principal de La Vacherie" }
        ]
      },
      {
        title: "La Reserva Cardales (Cardales, Buenos Aires)",
        images: [
          { src: "img40", alt: "Vista del campo La Reserva Cardales" },
          { src: "img41", alt: "Detalle del fairway en La Reserva Cardales" },
          { src: "img42", alt: "Green principal de La Reserva Cardales" }
        ]
      },
      {
        title: "Estancia Villa Maria (Cañuelas, Buenos Aires). Diseño de American Golf",
        images: [
          { src: "img43", alt: "Campo de Estancia Villa Maria" },
          { src: "img44", alt: "Detalle del green en Estancia Villa Maria" },
          { src: "img45", alt: "Vista aérea de Estancia Villa Maria" }
        ]
      },
      {
        title: "Haras Santa Maria (Escobar, Buenos Aires)",
        images: [
          { src: "img46", alt: "Campo del Haras Santa Maria" },
          { src: "img47", alt: "Vista aérea del Haras Santa Maria" },
          { src: "img48", alt: "Detalle del paisaje en Haras Santa Maria" }
        ]
      },
      {
        title: "Valle Escondido G.C. (San Martín de los Andes, Neuquén)",
        images: [
          { src: "img49", alt: "Vista del Valle Escondido Golf Club" },
          { src: "img50", alt: "Detalle del green en Valle Escondido Golf Club" },
          { src: "img51", alt: "Paisaje del Valle Escondido Golf Club" }
        ]
      },
      {
        title: "La Primavera C.C. (Lujan, Buenos Aires)",
        images: [
          { src: "img52", alt: "Vista del campo La Primavera Country Club" },
          { src: "img53", alt: "Detalle del fairway en La Primavera" },
          { src: "img54", alt: "Green principal en La Primavera" }
        ]
      },
      {
        title: "Medal Golf Club (Pilar, Buenos Aires)",
        images: [
          { src: "img55", alt: "Paisaje de Medal Golf Club" },
          { src: "img56", alt: "Detalle del green en Medal Golf Club" },
          { src: "img57", alt: "Fairway principal de Medal Golf Club" }
        ]
      },
      {
        title: "Haras Los Moros (Suipacha, Buenos Aires)",
        images: [
          { src: "img58", alt: "Campo del Haras Los Moros" },
          { src: "img59", alt: "Detalle del paisaje en Haras Los Moros" },
          { src: "img60", alt: "Vista aérea del Haras Los Moros" }
        ]
      } */
    ]
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////REMODELADAS E INTERVENIDAS/////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////

  {
    category: "Remodelados-e-intervenidos",
    courses: [
      {
        title: "Jockey Club Argentino (San Isidro, Buenos Aires)",
        coverImage: img1,
        images: [
          { src: img5, alt: "Vista del campo del Jockey Club en San Isidro" }
        ]
      },
      {
        title: "Cariló Golf Club (Buenos Aires)",
        coverImage: img2,
        images: [
          { src: img5, alt: "Vista del campo del Jockey Club en San Isidro" }
        ]
      },
      {
        title: "Jockey Club Argentino",
        coverImage: img3,
        images: [
          { src: img5, alt: "Vista del campo del Jockey Club en San Isidro" }
        ]
      }
    ]
  },
  {
    category: "Urbanizaciones",
    courses: [
      {
        title: "Los Lagartos C.C. (Pilar, Buenos Aires)",
        coverImage: img1,
        images: [
          { src: img5, alt: "Campo principal de Los Lagartos Country Club" }
        ]
      },
      {
        title: "EL Naional Golf Club (Gral Rodríguez, Buenos Aires)",
        coverImage: img1,
        images: [
          { src: img5, alt: "Campo principal de Los Lagartos Country Club" }
        ]
      },
      {
        title: "Los Lagartos C.C. (Pilar, Buenos Aires)",
        coverImage: img1,
        images: [
          { src: img5, alt: "Campo principal de Los Lagartos Country Club" }
        ]
      }
    ]
  }
];
