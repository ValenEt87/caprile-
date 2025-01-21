import React from 'react'


const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Validaciones en tiempo real
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Por favor, ingresa un email válido." }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
    if (name === "message" && value.length > 500) {
      setErrors((prev) => ({
        ...prev,
        message: "El mensaje no puede superar los 500 caracteres.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validaciones antes de enviar
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formValues.email.trim()) newErrors.email = "El email es obligatorio.";
    if (!formValues.message.trim()) newErrors.message = "El mensaje es obligatorio.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "e9feab04-9763-4773-992d-422bff2cc3d2");
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("phone", formValues.phone);
    formData.append("message", formValues.message);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
        alert("Formulario enviado con éxito.");
        setFormValues({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Ocurrió un error al enviar el formulario.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar el formulario.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          placeholder="Ej: Juan Pérez"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          placeholder="Ej: juanperez@gmail.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-1">
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          placeholder="Ej: +54 9 11 2222-3333"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
          placeholder="Ej: Hola Caprile..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-950 text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition duration-300"
      >
        Enviar
      </button>
    </form>
  );
};
  
  export default ContactForm;