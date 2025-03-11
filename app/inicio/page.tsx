"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles"; // Importar el componente de partículas
import DinosaurGame from "../components/DinosaurGame"; // Importar el juego
import { motion } from "framer-motion"; // Importar Framer Motion para animaciones
import WhatsAppButton from "../components/WhatsAppButton"; 

export default function HomePage() {
  const suscripciones = [
    { nombre: "Básico", precio: "$29/mes", descripcion: "Acceso a servicios básicos de ciberseguridad y desarrollo web." },
    { nombre: "Profesional", precio: "$59/mes", descripcion: "Acceso a servicios avanzados de pentesting, desarrollo web y soporte premium." },
    { nombre: "Enterprise", precio: "$99/mes", descripcion: "Soporte completo para empresas, con protección de endpoints, auditorías y pentesting personalizado." },
  ];

  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleCookieAccept = () => {
    setCookieAccepted(true);
    localStorage.setItem("cookieAccepted", "true");
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Feedback recibido: ${feedback}`);
    setFeedback("");
    setShowFeedbackForm(false);
  };

  return (
    <div className="relative pb-16 overflow-hidden">
      <Particles />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <Navigation />

      <div className="relative z-10 px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Título de la Página */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Construye una solución de software personalizada para el crecimiento de tu negocio
          </h2>
          <p className="mt-4 text-zinc-400">
            Desde startups innovadoras hasta empresas Fortune 500, las empresas confían en nosotros para desarrollar, probar, actualizar y escalar sus productos digitales. Garantizamos un crecimiento sin problemas y un éxito duradero en cada paso del camino.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Sección de Test de Seguridad */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-2xl font-bold text-zinc-100">Pruebas de seguridad de extremo a extremo en tu superficie de ataque</h3>
          <p className="mt-4 text-zinc-400">
            Combate los riesgos en tiempo real con pruebas de seguridad proactivas de los líderes en Pentest como Servicio (PtaaS). Escala tu equipo de seguridad con acceso a talento experto bajo demanda. Nuestra plataforma poderosa y experiencia comprobada te permiten probar los controles de seguridad a través de tus superficies de ataque con mayor facilidad y eficiencia. Es el enfoque de pruebas que necesitas para remediar de manera más inteligente.
          </p>
          <div className="flex mt-6 space-x-6">
            <Link href="https://wa.me/message/BWN47V52BRYUE1" className="bg-zinc-800 text-zinc-100 px-6 py-3 rounded-md hover:bg-zinc-700 transition">
              Comienza ahora
            </Link>
          </div>
        </motion.div>

        {/* Iconos de Beneficios - Dinámico */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="bg-zinc-800 p-6 rounded-md text-center hover:bg-zinc-700 transition">
            <span className="text-4xl text-zinc-100">&#x1F6A7;</span>
            <h4 className="mt-4 text-lg font-bold text-zinc-100">Reduce el riesgo de seguridad</h4>
            <p className="text-zinc-400">
              Captura problemas antes de que se conviertan en brechas. pentestingbw proporciona un tiempo de reporte 2.6X más rápido que los enfoques tradicionales de pentesting.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-md text-center hover:bg-zinc-700 transition">
            <span className="text-4xl text-zinc-100">&#x1F4A1;</span>
            <h4 className="mt-4 text-lg font-bold text-zinc-100">Impulsa la agilidad</h4>
            <p className="text-zinc-400">
              Mantente enfocado en lo que más importa para tu negocio. pentestingbw te lleva a la remediación un 100% más rápido, aumentando la eficiencia de los ciclos.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-md text-center hover:bg-zinc-700 transition">
            <span className="text-4xl text-zinc-100">&#x1F465;</span>
            <h4 className="mt-4 text-lg font-bold text-zinc-100">Accede a talento de clase mundial</h4>
            <p className="text-zinc-400">
              Cobalt proporciona acceso a una diversa gama de expertos confiables precisamente cuando los necesitas, abordando la escasez de recursos de seguridad capacitados.
            </p>
          </div>
        </motion.div>

        <div className="w-full h-px bg-zinc-800 mt-16" />

        {/* Razones para elegirnos */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-bold text-zinc-100">¿Por qué elegirnos?</h3>
          <div className="space-y-4">
            <p className="text-zinc-400">1. Contamos con un equipo altamente especializado en desarrollo de software y ciberseguridad, con profesionales certificados en las últimas tecnologías.</p>
            <p className="text-zinc-400">2. Nos destacamos por nuestra atención al cliente, asegurando que cada idea se traduzca en soluciones efectivas y personalizadas.</p>
            <p className="text-zinc-400">3. Nuestra presencia en Honduras y Canadá nos permite ofrecer una combinación única de innovación, calidad y competitividad en costos.</p>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800 mt-16" />

        {/* ¿Por qué elegir Intellectsoft? */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-zinc-100">¿Por qué elegir a DEVELOPER1995 como tu socio en desarrollo de software personalizado?</h3>
          <p className="mt-4 text-zinc-400">
            Somos un equipo de desarrolladores con sede en Honduras y Canadá, comprometidos con la excelencia y la satisfacción del cliente. Con años de experiencia en el desarrollo de software personalizado, hemos trabajado con empresas de diversos sectores, ayudándoles a alcanzar sus objetivos mediante soluciones tecnológicas innovadoras y escalables.Ya sea que necesites una aplicación móvil, una plataforma web, o un sistema empresarial a medida, estamos listos para convertir tus ideas en realidad.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800 mt-16" />

        {/* Servicios */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-zinc-100">Servicios de Desarrollo de Software</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="bg-zinc-800 p-6 rounded-md">
              <h4 className="text-lg font-bold text-zinc-100">Desarrollo Web</h4>
              <p className="text-zinc-400">Creamos productos web funcionales y atractivos para negocios en diversas industrias.</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-md">
              <h4 className="text-lg font-bold text-zinc-100">Desarrollo de Aplicaciones Móviles</h4>
              <p className="text-zinc-400">Desarrollamos aplicaciones móviles personalizadas para startups y empresas.</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-md">
              <h4 className="text-lg font-bold text-zinc-100">Consultoría IT</h4>
              <p className="text-zinc-400">Ofrecemos asesoría en tecnología para ayudar a transformar tu negocio.</p>
            </div>
          </div>
        </div>
        <WhatsAppButton/>

        {/* Footer */}
        <footer className="mt-16 bg-zinc-1000 text-zinc-100 p-6">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025@developer1995. Todos los derechos reservados.</p>
            <div className="mt-4 space-x-6">
            </div>
          </div>
        </footer>
      </div>

      {/* Cookies Consent (Floating) */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-800 text-zinc-100 p-4 flex justify-between items-center">
          <p className="text-sm">
            Usamos cookies para mejorar tu experiencia. ¿Aceptas el uso de cookies?
          </p>
          <button
            onClick={handleCookieAccept}
            className="bg-zinc-600 px-4 py-2 rounded-md text-sm hover:bg-zinc-500"
          >
            Aceptar
          </button>
        </div>
      )}

      {/* Feedback Form (Floating) */}
      {showFeedbackForm && (
        <div className="fixed bottom-0 right-0 bg-zinc-800 text-zinc-100 p-4 m-4 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold">Tu opinión es importante</h4>
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="mt-2 p-2 bg-zinc-700 text-zinc-100 rounded-md w-64 h-24"
              placeholder="Escribe tu opinión aquí..."
            />
            <div className="mt-4 flex justify-end">
              <button type="submit" className="bg-zinc-600 px-4 py-2 rounded-md hover:bg-zinc-500">
                Enviar
              </button>
            </div>
          </form>
          
        </div>
      )}
    </div>
  );
}
