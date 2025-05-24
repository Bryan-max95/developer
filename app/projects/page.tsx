"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import WhatsAppButton from "../components/WhatsAppButton";
import Particles from "../components/particles";
import { FiX, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPage() {
  // Datos del portafolio
  const proyectosDesarrollo = [
    { id: 1, nombre: "Plataforma E-commerce", url: "#", imagen: "/b1.png", categoria: "Desarrollo Web" },
    { id: 2, nombre: "Dashboard Analytics", url: "#", imagen: "/b2.png", categoria: "Aplicación Empresarial" },
    { id: 3, nombre: "App Móvil", url: "#", imagen: "/01.png", categoria: "Desarrollo Móvil" },
    { id: 4, nombre: "Sistema CRM", url: "#", imagen: "/n1.png", categoria: "Solución Empresarial" },
    { id: 5, nombre: "Portal Educativo", url: "#", imagen: "/n2.png", categoria: "Plataforma Educativa" },
    { id: 6, nombre: "API de Servicios", url: "#", imagen: "/n4.png", categoria: "Backend Development" },
  ];

  const proyectosCiberseguridad = [
    { id: 7, nombre: "Pentesting en Empresas", url: "#", imagen: "/1995.png", categoria: "Seguridad Ofensiva" },
    { id: 8, nombre: "Herramienta de Seguridad", url: "#", imagen: "/19955.png", categoria: "Desarrollo de Herramientas" },
    { id: 9, nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/c4.png", categoria: "Auditoría de Seguridad" },
  ];

  const proyectosMultimedia = [
    { id: 10, nombre: "Producción Audiovisual", url: "#", imagen: "/a1.jpeg", categoria: "Video Profesional" },
    { id: 11, nombre: "Fotografía Aérea", url: "#", imagen: "/t2.jpeg", categoria: "Drones" },
    { id: 12, nombre: "Edición Creativa", url: "#", imagen: "/a3.jpeg", categoria: "Postproducción" },
    { id: 13, nombre: "Cobertura de Eventos", url: "#", imagen: "/a4.jpeg", categoria: "Video en Vivo" },
    { id: 14, nombre: "Animación 3D", url: "#", imagen: "/a5.jpeg", categoria: "Motion Graphics" },
    { id: 15, nombre: "Documental Corporativo", url: "#", imagen: "/d2.jpeg", categoria: "Producción" },
  ];

  const empresasColaboradoras = [
    { id: 16, nombre: "Empresa A", url: "#", imagen: "/g3.png" },
    { id: 17, nombre: "Empresa B", url: "#", imagen: "/g4.png" },
    { id: 18, nombre: "Empresa C", url: "#", imagen: "/g5.png" },
    { id: 19, nombre: "Empresa D", url: "#", imagen: "/g9.png" },
    { id: 20, nombre: "Empresa E", url: "#", imagen: "/g7.png" },
    { id: 21, nombre: "Empresa F", url: "#", imagen: "/g8.png" },
    { id: 22, nombre: "Empresa G", url: "#", imagen: "/t0.png" },
  ];

  // Estados para UI
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const [activeTab, setActiveTab] = useState("desarrollo");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Handlers para el carrusel
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Abrir modal con animación
  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Efecto para cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-100 overflow-x-hidden">
      <Particles className="absolute inset-0 -z-10" />
      <Navigation />

      <div className="px-6 pt-24 mx-auto space-y-12 max-w-7xl lg:px-8 md:space-y-16">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center py-12 md:py-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Portafolio Profesional
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto">
            Soluciones innovadoras en desarrollo web, ciberseguridad y producción multimedia
          </p>
        </motion.section>

        {/* Sobre Mí */}
        <motion.div variants={slideUp} initial="hidden" animate="visible">
          <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Sobre Mí
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    Soy un profesional especializado en desarrollo web con Next.js y TypeScript, con amplia experiencia en ciberseguridad, pentesting y hacking ético. Mi enfoque es crear soluciones seguras y eficientes.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    Combinando habilidades técnicas con creatividad, ofrezco servicios integrales que van desde el desarrollo de aplicaciones hasta la protección de sistemas empresariales.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30">
                    <img 
                      src="/profile.jpg" 
                      alt="Foto de perfil" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Habilidades */}
        <motion.div variants={slideUp} initial="hidden" animate="visible">
          <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Habilidades Técnicas
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Desarrollo */}
                <div className="bg-zinc-700/30 p-6 rounded-lg border border-zinc-600/50">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Desarrollo</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Next.js, React, TypeScript
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Node.js, Express, APIs REST
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Bases de datos SQL/NoSQL
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Docker, Kubernetes
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      CI/CD Pipelines
                    </li>
                  </ul>
                </div>
                
                {/* Ciberseguridad */}
                <div className="bg-zinc-700/30 p-6 rounded-lg border border-zinc-600/50">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Ciberseguridad</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Pentesting Web/Redes
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Análisis de Vulnerabilidades
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Hardening de Sistemas
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Forense Digital
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Implementación EDR/XDR
                    </li>
                  </ul>
                </div>
                
                {/* Multimedia */}
                <div className="bg-zinc-700/30 p-6 rounded-lg border border-zinc-600/50">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Multimedia</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Fotografía/Videografía Aérea
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Edición con Adobe Premiere
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Motion Graphics
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Producción Audiovisual
                    </li>
                    <li className="flex items-center text-zinc-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Marketing Digital
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Pestañas de Proyectos */}
        <motion.div variants={slideUp} initial="hidden" animate="visible">
          <div className="flex border-b border-zinc-700 mb-8">
            <button
              onClick={() => setActiveTab("desarrollo")}
              className={`px-6 py-3 font-medium transition-all ${activeTab === "desarrollo" ? "text-blue-400 border-b-2 border-blue-400" : "text-zinc-400 hover:text-zinc-300"}`}
            >
              Desarrollo
            </button>
            <button
              onClick={() => setActiveTab("seguridad")}
              className={`px-6 py-3 font-medium transition-all ${activeTab === "seguridad" ? "text-purple-400 border-b-2 border-purple-400" : "text-zinc-400 hover:text-zinc-300"}`}
            >
              Ciberseguridad
            </button>
            <button
              onClick={() => setActiveTab("multimedia")}
              className={`px-6 py-3 font-medium transition-all ${activeTab === "multimedia" ? "text-green-400 border-b-2 border-green-400" : "text-zinc-400 hover:text-zinc-300"}`}
            >
              Multimedia
            </button>
          </div>

          {/* Contenido de pestañas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "desarrollo" && proyectosDesarrollo.map((proyecto) => (
              <motion.div 
                key={proyecto.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden transition-all hover:border-blue-400/30">
                  <div 
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={() => openModal(proyecto.imagen, proyecto.nombre)}
                  >
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-xs text-blue-400">{proyecto.categoria}</span>
                        <h3 className="text-lg font-semibold text-white">{proyecto.nombre}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {activeTab === "seguridad" && proyectosCiberseguridad.map((proyecto) => (
              <motion.div 
                key={proyecto.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden transition-all hover:border-purple-400/30">
                  <div 
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={() => openModal(proyecto.imagen, proyecto.nombre)}
                  >
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-xs text-purple-400">{proyecto.categoria}</span>
                        <h3 className="text-lg font-semibold text-white">{proyecto.nombre}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {activeTab === "multimedia" && proyectosMultimedia.map((proyecto) => (
              <motion.div 
                key={proyecto.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden transition-all hover:border-green-400/30">
                  <div 
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={() => openModal(proyecto.imagen, proyecto.nombre)}
                  >
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-xs text-green-400">{proyecto.categoria}</span>
                        <h3 className="text-lg font-semibold text-white">{proyecto.nombre}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carrusel de Empresas */}
        <motion.div variants={slideUp} initial="hidden" animate="visible">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Empresas Colaboradoras
          </h2>
          
          <div 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="relative w-full overflow-hidden"
          >
            <div className="flex space-x-8 py-4 cursor-grab active:cursor-grabbing">
              {[...empresasColaboradoras, ...empresasColaboradoras].map((empresa, index) => (
                <div key={`${empresa.id}-${index}`} className="flex-shrink-0">
                  <Card className="w-40 h-40 p-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                    <img
                      src={empresa.imagen}
                      alt={empresa.nombre}
                      className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contacto */}
        <motion.div variants={slideUp} initial="hidden" animate="visible">
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/30 rounded-xl overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">¿Listo para trabajar juntos?</h2>
              <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                Si estás buscando un profesional que combine habilidades técnicas con creatividad, no dudes en contactarme.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/30">
                Contactar Ahora
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="py-8 border-t border-zinc-800 text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Mi Portafolio Profesional. Todos los derechos reservados.
          </p>
        </motion.footer>
      </div>

      {/* Botón de WhatsApp */}
      <WhatsAppButton />

      {/* Modal de Imagen */}
      <AnimatePresence>
        {modalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
              >
                <FiX size={28} />
              </button>
              
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                <button className="p-2 bg-zinc-800/50 rounded-full text-white hover:bg-zinc-700 transition-colors">
                  <FiChevronLeft size={24} />
                </button>
                <button className="p-2 bg-zinc-800/50 rounded-full text-white hover:bg-zinc-700 transition-colors">
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
