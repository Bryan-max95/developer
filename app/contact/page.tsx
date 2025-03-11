"use client";
import { Github, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles"; // Importa el componente Particles
import { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton";

const socials = [
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/bryan_s_network?igsh=MTJmaTN5Y29uOG50dg==",
    label: "Instagram",
    handle: "bryan_s_network",
  },
  {
    icon: <Mail size={25} />,
    href: "#",
    label: "Email",
    handle: "developer1995@outlook.es",
  },
  {
    icon: <Github size={20} />,
    href: "#",
    label: "Github",
    handle: "developer1995",
  },
];

export default function HomePage() {
  const suscripciones = [
    {
      nombre: "Plan Básico",
      precio: "soporte",
      descripcion:
        "Acceso a servicios esenciales para el desarrollo de aplicaciones web, incluyendo diseño responsivo, desarrollo frontend básico y hosting en servidores optimizados. Ideal para pequeñas aplicaciones o sitios web personales.",
    },
    {
      nombre: "Plan Profesional",
      precio: "soporte",
      descripcion:
        "Desarrollo web avanzado con implementación de frameworks modernos (React, Next.js, Angular, etc.), integración de APIs externas, optimización de rendimiento y soporte para despliegue continuo. Perfecto para aplicaciones de mediana escala o startups.",
    },
    {
      nombre: "Plan Enterprise",
      precio: "soporte",
      descripcion:
        "Solución integral para aplicaciones web empresariales con soporte para arquitecturas escalables, diseño UX/UI personalizado, integración con sistemas complejos y monitorización en tiempo real. Incluye seguridad avanzada, pruebas automatizadas y mantenimiento continuo.",
    },
  ];

  // Definir los tipos para formData y formErrors
  interface FormData {
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    mensaje: string;
  }

  interface FormErrors {
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    mensaje: string;
  }

  // Establecer los estados con los tipos definidos
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    mensaje: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors: FormErrors = {
      nombre: "",
      correo: "",
      telefono: "",
      direccion: "",
      mensaje: "",
    };

    // Validación de nombre
    if (!formData.nombre) {
      errors.nombre = "El nombre es obligatorio.";
    }

    // Validación de correo electrónico
    if (!formData.correo) {
      errors.correo = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      errors.correo = "Por favor, ingresa un correo electrónico válido.";
    }

    // Validación de teléfono
    if (!formData.telefono) {
      errors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{8}$/.test(formData.telefono)) {
      errors.telefono = "El teléfono debe tener 10 dígitos.";
    }

    // Validación de dirección
    if (!formData.direccion) {
      errors.direccion = "La dirección es obligatoria.";
    }

    // Validación de mensaje
    if (!formData.mensaje) {
      errors.mensaje = "El mensaje es obligatorio.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Formulario enviado correctamente.");
      // Aquí puedes enviar los datos a un servidor o a tu correo.
      // Ejemplo: enviarFormulario(formData);
    }
  };

  // Datos del equipo
  const equipo = [
    {
      nombre: "Bryan Carcamo",
      rol: "Desarrollador Full Stack Especialista en Ciberseguridad",
      descripcion:
        "Especializado en desarrollo web con Next.js, TypeScript y ciberseguridad. Experto en auditorías de seguridad, pruebas de penetración y protección de endpoints",
    },
    {
      nombre: "Josué Carcamo",
      rol: "Diseñador de Branding y Marketing",
      descripcion:
        "Apasionado por el diseño visual y la identidad de marca, creando experiencias gráficas impactantes que conectan con el público.",
    },
    {
      nombre: "Josuél Amador",
      rol: "Especialista en Branding y Marketing",
      descripcion:
        "Experto en estrategias de marca y marketing digital, creando identidades visuales impactantes y campañas efectivas.",
    },
  ];

  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Particles /> {/* Agrega el componente Particles aquí */}
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Bienvenido a contacto
          </h2>
          <p className="mt-4 text-zinc-400">
            Aquí encontrarás información sobre mis servicios, proyectos y las
            diferentes suscripciones que ofrezco para empresas que necesitan
            servicios de ciberseguridad y desarrollo web.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Sección Información General */}
        <div className="p-6 bg-zinc-800 rounded-md">
          <h3 className="text-2xl font-bold text-zinc-100">Sobre Mi Servicio</h3>
          <p className="mt-4 text-zinc-400">
            Soy un profesional especializado en desarrollo web con Next.js,
            TypeScript, y en ciberseguridad, ofreciendo soluciones a empresas con
            un enfoque en protección avanzada. Mis servicios incluyen desde
            desarrollo web a auditorías de seguridad, pruebas de penetración, y
            protección de endpoints.
          </p>
        </div>

        {/* Sección Suscripciones */}
        <h3 className="text-2xl font-bold text-zinc-100 mt-10">Suscripciones</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suscripciones.map((subscripcion, index) => (
            <div className="p-6 bg-zinc-800 rounded-md" key={index}>
              <h4 className="text-lg font-bold text-zinc-100">
                {subscripcion.nombre}
              </h4>
              <p className="mt-4 text-zinc-400">{subscripcion.descripcion}</p>
              <div className="mt-4 text-xl font-semibold text-zinc-100">
                {subscripcion.precio}
              </div>
              <Link
                href="https://wa.me/message/BWN47V52BRYUE1"
                className="mt-4 inline-block text-zinc-100 underline hover:text-zinc-300"
              >
                Contacta para más información
              </Link>
            </div>
          ))}
        </div>

        {/* Sección Nuestro Equipo */}
        <h3 className="text-2xl font-bold text-zinc-100 mt-10">Nuestro Equipo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {equipo.map((miembro, index) => (
            <div className="p-6 bg-zinc-800 rounded-md" key={index}>
              <h4 className="text-lg font-bold text-zinc-100">
                {miembro.nombre}
              </h4>
              <p className="mt-2 text-zinc-300">{miembro.rol}</p>
              <p className="mt-4 text-zinc-400">{miembro.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Sección Redes Sociales */}
        <h3 className="text-2xl font-bold text-zinc-100 mt-10">
          Redes Sociales
        </h3>
        <div className="container flex items-center justify-center px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Sección del Formulario de Contacto */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-zinc-100">Contáctanos</h3>
          <p className="mt-4 text-zinc-400">
            Por favor completa el formulario a continuación para enviarnos tu
            consulta.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* Nombre */}
            <div className="flex flex-col">
              <label className="text-zinc-200">Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="p-3 bg-zinc-700 text-zinc-200 rounded-md"
              />
              {formErrors.nombre && (
                <span className="text-sm text-red-500">{formErrors.nombre}</span>
              )}
            </div>

            {/* Correo */}
            <div className="flex flex-col">
              <label className="text-zinc-200">Correo:</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="p-3 bg-zinc-700 text-zinc-200 rounded-md"
              />
              {formErrors.correo && (
                <span className="text-sm text-red-500">{formErrors.correo}</span>
              )}
            </div>

            {/* Teléfono */}
            <div className="flex flex-col">
              <label className="text-zinc-200">Teléfono:</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="p-3 bg-zinc-700 text-zinc-200 rounded-md"
              />
              {formErrors.telefono && (
                <span className="text-sm text-red-500">
                  {formErrors.telefono}
                </span>
              )}
            </div>

            {/* Dirección */}
            <div className="flex flex-col">
              <label className="text-zinc-200">Dirección:</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className="p-3 bg-zinc-700 text-zinc-200 rounded-md"
              />
              {formErrors.direccion && (
                <span className="text-sm text-red-500">
                  {formErrors.direccion}
                </span>
              )}
            </div>

            {/* Mensaje */}
            <div className="flex flex-col">
              <label className="text-zinc-200">Mensaje:</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="p-3 bg-zinc-700 text-zinc-200 rounded-md"
              />
              {formErrors.mensaje && (
                <span className="text-sm text-red-500">
                  {formErrors.mensaje}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-6 bg-zinc-900 text-zinc-200 rounded-md hover:bg-zinc-700"
            >
              Enviar
            </button>
          </form>
        </div>
        {/* Footer */}
        <footer className="mt-16 bg-zinc-1000 text-zinc-100 p-6">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025@developer1995. Todos los derechos reservados.</p>
            <div className="mt-4 space-x-6">
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </div>
    </div>
  );
}
