import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!captchaToken) {
      alert("Por favor, completa el captcha");
      return;
    }
    setResult("Enviando...");
  
    // Crea el FormData a partir del formulario
    const formData = new FormData(event.target);
    // Usa el valor del campo "nombre" como "from_name"
    formData.set("from_name", event.target.nombre.value);
    // Agrega la access_key y el asunto personalizado
    formData.append("access_key", "66d3844c-db37-4719-bfbb-4a2365583d49");
    formData.append("subject", "Nuevo contacto desde el sitio web");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
  
      if (data.success) {
        setResult("Formulario enviado con éxito");
        event.target.reset();
        setCaptchaToken(null);
      } else {
        console.log("Error", data);
        setResult(data.message || "Ocurrió un error");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Ocurrió un error al enviar el formulario.");
    }
  };
  

  const onVerifyCaptcha = (token) => {
    setCaptchaToken(token);
  };

  return (
    <section
      id="contacto"
      className="bg-green-950 text-white lg:relative lg:h-[700px] bg-services bg-fixed mx-5 lg:mx-8 rounded-2xl lg:py-2 mb-10 lg:py-20"
    >
      <div className="grid grid-cols-12 gap-4 lg:px-0 px-5 py-6 lg:py-0 items-center h-full lg:relative">
        <div className="col-span-12 lg:col-start-2 lg:col-span-4 text-center text-start">
          <h2 className="text-3xl lg:text-5xl font-medium mb-2">
            Ponete en contacto para recibir más información
          </h2>
          <p className="lg:text-lg mb-4">
            Escribinos y nos pondremos en contacto, o visitá nuestras redes sociales.
          </p>
          {/* Redes sociales */}
          <div className="flex justify-center lg:justify-start space-x-2 sr-only lg:not-sr-only">
            {/* Enlaces a redes */}
          </div>
        </div>

        {/* Formulario */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-5 bg-white-bmr text-gray-900 rounded-xl shadow-lg p-5 lg:p-6 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-top-30 w-full">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
            <input type="hidden" name="from_name" value="" />
              <label htmlFor="nombre" className="block font-semibold mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                placeholder="Ej: Juan Pérez"
              />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                required
                className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                placeholder="Ej: juanperez@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold mb-1">
                Teléfono
              </label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-3 text-sm"
                placeholder="Ej: +54 9 11 2222-3333"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                className="w-full border border-gray-300 bg-white-bmr rounded-lg transition duration-300 px-4 py-2 text-sm"
                placeholder="Ej: Hola, me gustaría recibir más información..."
              ></textarea>
            </div>
            {/* hCaptcha */}
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onVerifyCaptcha}
            />
            <button
              type="submit"
              className="w-full bg-green-950 text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition duration-300"
            >
              Enviar
            </button>
          </form>
          <div className="mt-4 text-center text-sm">{result}</div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
