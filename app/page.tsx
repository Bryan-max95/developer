"use client"; // Asegúrate de usar "use client" si estás trabajando con Next.js 13+
import Link from "next/link";
import React, { useState } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Home", href: "/inicio" },
  { name: "pentestingbw.com", href: "#" },
];

export default function Home() {
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje

  const handlePentestingClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita que el enlace navegue a "#"
    setShowMessage(true); // Muestra el mensaje

    // Oculta el mensaje después de 5 segundos
    setTimeout(() => {
      setShowMessage(false);
    }, 8000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <React.Fragment key={item.href}>
              {item.name === "pentestingbw.com" ? (
                <button
                  onClick={handlePentestingClick}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>

      {/* Mensaje temporal */}
      {showMessage && (
        <div className="my-4 p-4 bg-zinc-800 text-zinc-300 rounded-lg animate-fade-in">
          <p>
            Trabajando en la web de pentesting. Puedes ingresar a{" "}
            <Link
              href="/contact"
              className="underline duration-500 hover:text-zinc-100"
            >
              Contacto
            </Link>{" "}
            y enviar tu correo para recibir una notificación cuando la web esté
            construida.
          </p>
        </div>
      )}

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        developer-1995
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I'm building{" "}
          <Link
            target="_blank"
            href="#"
            className="underline duration-500 hover:text-zinc-300"
          >
            
          </Link>{" "}
          Creating a cyber security analyst website such as Hackin Etico, for
          companies that need pentesting
        </h2>
      </div>
    </div>
  );
}
