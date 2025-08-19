"use client";

import { useState, useEffect, useRef } from "react";

export function Banner() {
  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  function goTo(idx: number) {
    setCurrent(idx);
    resetTimer();
  }

  function prevBanner() {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetTimer();
  }

  function nextBanner() {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetTimer();
  }

  function resetTimer() {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);
  }

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line
  }, [current]);

  // Quando a imagem carregar, marca como carregada
  function handleImgLoad(idx: number) {
    setLoaded((prev) => {
      const arr = [...prev];
      arr[idx] = true;
      return arr;
    });
  }

  return (
    <section className="w-full h-[340px] relative overflow-hidden flex items-center justify-center">
      {/* Slides */}
      {images.map((src, idx) => (
        <div key={src} className="absolute inset-0 w-full h-full">
          {!loaded[idx] && idx === current && (
            <div className="w-full h-full bg-[#e2dfe0] animate-pulse"></div>
          )}
          <img
            src={src}
            alt={`Banner ${idx + 1}`}
            onLoad={() => handleImgLoad(idx)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === current && loaded[idx] ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            style={{ transition: "opacity 0.7s" }}
          />
        </div>
      ))}
      {/* Botões de navegação */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        aria-label="Anterior"
        onClick={prevBanner}
      >
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        aria-label="Próximo"
        onClick={nextBanner}
      >
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
      {/* Indicadores de slides - abaixo da imagem */}
      <div className="absolute left-0 right-0 bottom-0 flex justify-center items-center pb-4 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-8 h-2 rounded-full mx-1 transition-all duration-300 ${
              idx === current ? "bg-blue-900" : "bg-gray-300 opacity-50"
            }`}
            onClick={() => goTo(idx)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </section>
  );
}