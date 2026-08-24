"use client";
import { useState, useEffect } from "react";

// 1. Preparamos los datos: La foto, el enlace y el texto alternativo
const slides = [
  { src: "charla-git.JPG", alt: "Charla de Git", href: "/ideas" },
  { src: "hackathon_2.jpeg", alt: "Hackathon", href: "/ideas" },
  { src: "the-team.JPG", alt: "The Team", href: "/us" },
  { src: "Salmorejo.jpg", alt: "Salmorejo", href: "https://salmorejo.tech/" },
  { src: "godot.jpeg", alt: "Godot", href: "/ideas" },
  { src: "ST-2023.jpg", alt: "ST 2023", href: "https://salmorejo.tech/" },
  { src: "suse.JPG", alt: "Suse", href: "https://salmorejo.tech/" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para la flecha derecha
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Función para la flecha izquierda
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Temporizador para que pase sola cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5000 ms = 5 segundos

    // Limpiamos el temporizador al desmontar o al cambiar de foto manualmente
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-[70%] justify-self-center h-75 md:h-150 mt-10 overflow-hidden rounded-xl shadow-lg group bg-white">
      
      {/* Contenedor de las imágenes (se desplaza usando translateX) */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.href}
            className="w-full h-full shrink-0 cursor-pointer block"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </a>
        ))}
      </div>

      {/* Flecha Izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </div>
  );
}