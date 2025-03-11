"use client";

import React, { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import WhatsAppButton from "../components/WhatsAppButton";
import Particles from "../components/particles";

export default function PortfolioPage() {
  <Particles />
  const proyectosDesarrollo = [
    { nombre: "", url: "#", imagen: "/b1.png" },
    { nombre: "", url: "#", imagen: "/b2.png" },
    { nombre: "", url: "#", imagen: "/01.png" },
    { nombre: "", url: "#", imagen: "/n1.png" },
    { nombre: "", url: "#", imagen: "/n2.png" },
    { nombre: "", url: "#", imagen: "/n4.png" },
  ];

  const proyectosCiberseguridad = [
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/1995.png" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/19955.png" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/c4.png" },
  ];


  const proyectos = [
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/a1.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/t2.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/a3.jpeg" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/a4.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/a5.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/d2.jpeg" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/b3.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/b4.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/b5.jpeg" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/x3.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/f2.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/f3.jpeg" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/f4.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/f5.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/f6.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/p1.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/t1.jpeg" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/t2.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/t3.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/t4.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/w2.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/w3.jpeg" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/w4.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/x3.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/x4.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/x5.jpeg" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/x6.jpeg" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/z1.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/z2.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/y2.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/y1.jpeg" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/y3.jpeg" },
  ];



  const logosdeempresas = [
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/g3.png" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/g4.png" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/g5.png" },
    { nombre: "Pentesting en Empresas", url: "#", imagen: "/g9.png" },
    { nombre: "Herramienta de Seguridad", url: "#", imagen: "/g7.png" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/g8.png" },
    { nombre: "Análisis de Vulnerabilidades", url: "#", imagen: "/t0.png" },
  ];

  // Estado para controlar la imagen activa (la que se muestra grande)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative pb-16">
      <Particles />
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Sección Título */}

        {/* Sección "Sobre Mí" */}
        <Card>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-zinc-100">Sobre Mí</h3>
            <p className="mt-4 text-zinc-400">
              Soy un profesional especializado en desarrollo web con Next.js y TypeScript, además de contar con experiencia en ciberseguridad, pentesting y hacking ético. Mi enfoque es crear soluciones seguras y eficientes, garantizando la mejor protección para sistemas y redes empresariales.
            </p>
          </div>
        </Card>

        {/* Sección "Habilidades" */}
        <Card>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-zinc-100">Habilidades</h3>
            <ul className="mt-4 text-zinc-400 list-disc list-inside">
              <li>Desarrollo Full Stack con Next.js, React y TypeScript</li>
              <li>Administración y despliegue de servidores en Azure y AWS</li>
              <li>Pentesting y auditoría de seguridad en redes y aplicaciones</li>
              <li>Implementación de herramientas EDR y protección de endpoints</li>
              <li>Automatización de pruebas de seguridad con Python y Bash</li>
              <li>Seguridad ofensiva y defensiva en entornos empresariales</li>
              <li>Gestión de infraestructura en la nube con Terraform y Kubernetes</li>
              <li>Desarrollo de APIs seguras con Node.js y Express</li>
              <li>Investigación y mitigación de vulnerabilidades Zero-Day</li>
              <li>Configuración y endurecimiento de servidores Linux y Windows</li>
              <li>Monitoreo y respuesta a incidentes con SIEM y SOC</li>
              <li>Pruebas de penetración en aplicaciones web y móviles</li>
              <li>Ingeniería inversa y análisis de malware</li>
            </ul>
          </div>
        </Card>

        {/* Sección Proyectos de Desarrollo */}
        <h3 className="text-2xl font-bold text-zinc-100 mt-10">Proyectos de Desarrollo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectosDesarrollo.map((proyecto, index) => (
            <Card key={index}>
              <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  className="w-full h-40 object-cover rounded-md cursor-pointer"
                />
              </a>
            </Card>
          ))}
        </div>

        {/* Sección Proyectos de Ciberseguridad */}
        <h3 className="text-2xl font-bold text-zinc-100 mt-10">Proyectos de Ciberseguridad</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectosCiberseguridad.map((proyecto, index) => (
            <Card key={index}>
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="w-full h-40 object-cover rounded-md cursor-pointer"
                onClick={() => openModal(proyecto.imagen)}
              />
              <h4 className="mt-4 text-lg font-bold text-zinc-100 text-center">{proyecto.nombre}</h4>
            </Card>
          ))}
        </div>

        {/* Carrusel infinito de proyectos */}
        <h3 className="text-2xl font-bold text-zinc-100 mt-10">Proyectos drones y marketing</h3>
        <div className="carousel-proyectos">
          <div className="carousel-track-proyectos">
            {proyectos.concat(proyectos).map((proyecto, index) => (
              <div key={index} className="carousel-item-proyectos">
                <Card className="p-4 cursor-pointer" onClick={() => openModal(proyecto.imagen)}>
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Card>
  <div className="p-6">
    <h3 className="text-2xl font-bold text-zinc-100">Habilidades</h3>
    <ul className="mt-4 text-zinc-400 list-disc list-inside">
      <li>Piloto profesional de drones con certificación</li>
      <li>Fotografía y videografía aérea de alta calidad</li>
      <li>Edición y postproducción de videos con Adobe Premiere Pro y Final Cut Pro</li>
      <li>Manejo de drones para inspecciones técnicas y mapeo 3D</li>
      <li>Grabación de eventos en vivo con drones y cámaras profesionales</li>
      <li>Creación de contenido multimedia para redes sociales y publicidad</li>
      <li>Planificación y ejecución de campañas de marketing digital</li>
      <li>Uso de herramientas de marketing automation como HubSpot y Marketo</li>
      <li>SEO y SEM para mejorar el posicionamiento web y la visibilidad en buscadores</li>
      <li>Análisis de datos y métricas para optimización de estrategias de marketing</li>
      <li>Gestión de comunidades online y estrategias de engagement</li>
      <li>Diseño gráfico para banners, folletos y material publicitario</li>
      <li>Coordinación de proyectos audiovisuales desde la preproducción hasta la entrega final</li>
      <li>Uso de drones para agricultura de precisión y monitoreo de cultivos</li>
      <li>Realización de tomas aéreas para producciones cinematográficas</li>
    </ul>
  </div>
</Card>

        {/* Carrusel de logos de empresas con estilo de burbuja */}
        <h3 className="text-2xl font-bold text-zinc-100 mt-10">Empresas</h3>
        <div className="carousel-logos">
          <div className="carousel-track-logos">
            {logosdeempresas.concat(logosdeempresas).map((logo, index) => (
              <div key={index} className="carousel-item-logos">
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.imagen}
                    alt={logo.nombre}
                    className="w-full h-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-zinc-1000 text-zinc-100 p-6">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025@developer1995. Todos los derechos reservados.</p>
            <div className="mt-4 space-x-6">
            </div>
          </div>
        </footer>
      

        {/* Botón de WhatsApp */}
        <WhatsAppButton />
      </div>

      {/* Modal de imagen */}
      {modalOpen && selectedImage && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-md">
      <div className="w-[450px] h-[450px] overflow-hidden">
        <img 
          src={selectedImage} 
          alt="Imagen seleccionada" 
          className="w-full h-full object-cover"
        />
      </div>
      <button onClick={closeModal} className="mt-4 p-2 bg-red-600 text-white rounded">
        Cerrar
      </button>
    </div>
  </div>
)}
    </div>
  );
}



