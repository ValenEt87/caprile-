import React from 'react'

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    const formData = new FormData(event.target);

    formData.append("access_key", "e9feab04-9763-4773-992d-422bff2cc3d2");

    const object = Object.fromEntries(formData); // Convierte FormData en un objeto
    const json = JSON.stringify(object); // Convierte el objeto en JSON

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Formulario enviado exitosamente:", res);
      } else {
        console.error("Error en el envío:", res);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

     /*  const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        formData.append("access_key", "e9feab04-9763-4773-992d-422bff2cc3d2");
      
        formData.append("email_subject", `Nuevo mensaje de contacto de ${formData.get("name")}`);
        formData.append("from_email", formData.get("email"));
        formData.append("from_name", formData.get("name")); */
      
        // Personalizar el cuerpo del correo
        /* const customMessage = `
          Nombre: ${formData.get("name")}
          Correo: ${formData.get("email")}
          Teléfono: ${formData.get("phone")}
          Mensaje: ${formData.get("message")}
        `;
        formData.append("email_message", customMessage); */
      
    /*     const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
      
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
            console.log("Correo enviado exitosamente:", res);
          } else {
            console.error("Error al enviar el correo:", res);
          }
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
        }
      }; */

    /* return ( */
        {/* <section className="grid grid-cols-12 bg-green-950 mb-12">
        <div
            className="col-span-12 lg:col-span-6 bg-cover bg-center"
            style={{
            backgroundImage: "url('/imgs/ascochinga.jpg')",
            }}
        >
        </div>

        <div className="col-span-12 lg:col-span-6 flex items-center px-8 lg:px-16 py-12 lg:py-20">
            <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 w-full">
            <h2 className="text-3xl font-bold text-green-950 mb-1">Contactanos</h2>
            <p className="text-md mb-4">
                Completá el formulario y nos pondremos en contacto.
            </p>
            <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                <input
                    type="text"
                    id="name"
                    name='Nombre'
                    className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-3"
                    placeholder="Nombre completo"
                    required
                />
                </div>
                <div>
                <input
                    type="email"
                    id="email"
                    name='Email'
                    className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-3"
                    placeholder="Correo electrónico"
                    required
                />
                </div>
                <div>
                <input
                    type="text"
                    id="phone"
                    name='Teléfono'
                    className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-3"
                    placeholder="Teléfono"
                    required
                />
                </div>
                <div>
                <textarea
                    name='Mensaje'
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 px-4 py-2"
                    placeholder="Mensaje"
                ></textarea>
                </div>
                <button
                type="submit"
                className="w-full bg-green-950 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2"
                >
                Enviar
                </button>
            </form>
            </div>
        </div>
    </section> */}
    return (
      <section
        id="contacto"
        className="bg-green-950 text-white lg:relative lg:h-[700px] bg-services bg-fixed mx-5 lg:mx-8 rounded-2xl py-2 mb-10 lg:my-20"
      >
        <div className="grid grid-cols-12 gap-4 px-5 py-6 lg:py-0 items-center h-full lg:relative">
          {/* Información de contacto */}
          <div className="col-span-12 lg:col-start-2 lg:col-span-4 text-center text-start">
            <h2 className="text-3xl lg:text-5xl font-medium mb-2">
              Completá el formulario
            </h2>
            <p className="lg:text-lg mb-4">
              Escribinos y nos pondremos en contacto, o visitá nuestras redes
              sociales.
            </p>
            <div className="flex justify-center lg:justify-start space-x-2">
              {/* Redes sociales */}
              <a
                href="#"
                className="bg-green-600 bg-opacity-30 hover:bg-green-800 p-3 rounded-lg transition duration-300"
                aria-label="Facebook"
              >
                {/* Icono de Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FFF"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </div>
          </div>
  
          {/* Formulario */}
          <div className="col-span-12 lg:col-start-7 lg:col-span-5 bg-white-bmr text-gray-900 rounded-xl shadow-lg p-6 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-top-30 w-full">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                  placeholder="Ej: juanperez@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                  placeholder="Ej: +54 9 11 2222-3333"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-2 text-sm"
                  placeholder="Ej: Hola Caprile..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-950 text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactForm;