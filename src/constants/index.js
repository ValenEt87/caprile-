// Importar las imágenes (simulando nombres únicos)
import img1 from "../../public/imgs/ascochinga.jpg";
import img2 from "../../public/imgs/jockeyclubsalta 2.jpg";
import img3 from "../../public/imgs/ascochinga3.jpg";
import img4 from "../../public/imgs/ascochinga4.jpg";
import img5 from "../../public/imgs/ascochinga.jpg";
import img6 from "../../public/imgs/ascochinga.jpg";

// LOS LAGARTOS URB
import img7 from "../../public/imgs/urbanizaciones/Los Lagartos.webp";
import img8 from "../../public/imgs/urbanizaciones/lagartos.webp";
import img9 from "../../public/imgs/urbanizaciones/lagartos1.webp";
import img10 from "../../public/imgs/urbanizaciones/lagartos2.webp";

//El Nacional Gral Rodriguez URB
import img11 from "../../public/imgs/urbanizaciones/El Nacional.webp";
import img12 from "../../public/imgs/urbanizaciones/elnacional.webp";
import img13 from "../../public/imgs/urbanizaciones/elnacional1.webp";
import img14 from "../../public/imgs/urbanizaciones/elnacional2.webp";
import img15 from "../../public/imgs/urbanizaciones/elnacional3.webp";

// La Cheltonia URB
import img16 from "../../public/imgs/urbanizaciones/lacheltonia.webp";
import img17 from "../../public/imgs/urbanizaciones/lacheltonia1.webp";
import img18 from "../../public/imgs/urbanizaciones/lacheltonia2.webp";

//Springdale URB
import img19 from "../../public/imgs/urbanizaciones/lacheltonia.webp";

//La Cañada URB
import img20 from "../../public/imgs/urbanizaciones/lacheltonia.webp";



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
      {
        title: "Estancia Villa Maria (Cañuelas, Bs As) cc American Golf",
        coverImage: img4,
        images: [
          { src: img4, alt: "Vista panorámica de Mayling Club de Campo" },
          { src: img5, alt: "Detalle del fairway en Mayling Club de Campo" },
          { src: img6, alt: "Green del campo en Mayling Club de Campo" }
        ]
      },
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
        title: "Jockey Club Argentino (San Isidro, Bs As)",
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
        coverImage: img7,
        images: [
          { src: img7, alt: "Campo principal de Los Lagartos Country Club" },
          { src: img8, alt: "Campo principal de Los Lagartos Country Club" },
          { src: img9, alt: "Campo principal de Los Lagartos Country Club" },
          { src: img10, alt: "Campo principal de Los Lagartos Country Club" }
        ]
      },
      {
        title: "El Nacional Golf Club (Gral Rodríguez, Bs As)",
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
      {
        title: "La Cañada Golf (Open Door, Buenos Aires)",
        coverImage: img20,
        images: [
          { src: img20, alt: "Campo principal La Cheltonia" },
        ]
      }
    ]
  }
];
