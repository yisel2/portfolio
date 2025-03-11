"use client";
import { useState } from "react";

export default function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, src: "/calp-carrusel1.png" },
    { id: 2, src: "/calp-carrusel2.png" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-full h-full flex items-center justify-center text-white text-2xl`}
          >
            <img src={slide.src} alt="calp-1" className="w-[100px] h-[100px]" />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        Anterior
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        Siguiente
      </button>
    </div>
  );
}
