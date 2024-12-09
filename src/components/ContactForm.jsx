import React from 'react'

const ContactForm = () => {

    /* const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e9feab04-9763-4773-992d-422bff2cc3d2");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      }; */
      const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        formData.append("access_key", "e9feab04-9763-4773-992d-422bff2cc3d2");
      
        // Personalizar el asunto y el remitente
        formData.append("email_subject", `Nuevo mensaje de contacto de ${formData.get("name")}`);
        formData.append("from_email", formData.get("email"));
        formData.append("from_name", formData.get("name"));
      
        // Personalizar el cuerpo del correo
        /* const customMessage = `
          Nombre: ${formData.get("name")}
          Correo: ${formData.get("email")}
          Teléfono: ${formData.get("phone")}
          Mensaje: ${formData.get("message")}
        `;
        formData.append("email_message", customMessage); */
      
        const object = Object.fromEntries(formData);
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
      };

    return (
        <section className="grid grid-cols-12 bg-green-950 mb-12">
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
                    /* id="message" */
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg> */}
                </button>
            </form>
            </div>
        </div>
    </section>
    )
}


export default ContactForm