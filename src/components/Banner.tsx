"use client";

import { useState, useEffect, useRef } from "react";

export function Banner() {
  const images = [
    "https://s3.amazonaws.com/org255/files/banners_homes_omni_imagens/Banner-2300x450-5-pLGAlH.png",
    "https://s3.amazonaws.com/org255/files/banners_homes_omni_imagens/Banner-720x525-4-Bamjha.png",
    "https://s3.amazonaws.com/org255/files/banners_homes_omni_imagens/Banner-720x525-3-iFpEBH.png",
  ];

  const FALLBACK = "/banner-fallback.jpg"; // adicione uma imagem local em public/ como fallback
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => Array(images.length).fill(false));
  const timerRef = useRef<number | null>(null);

  // Preload with error handling + timeout fallback
  useEffect(() => {
    const timeouts: number[] = [];

    images.forEach((src, idx) => {
      let settled = false;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        settled = true;
        setLoaded((prev) => {
          const n = [...prev];
          n[idx] = true;
          return n;
        });
      };
      img.onerror = () => {
        settled = true;
        setLoaded((prev) => {
          const n = [...prev];
          n[idx] = true; // marca como carregado para remover skeleton e evitar permanência em branco
          return n;
        });
      };
      img.src = src;

      // safety timeout: marca carregado (fallback) se demorar demais
      const t = window.setTimeout(() => {
        if (!settled) {
          settled = true;
          setLoaded((prev) => {
            const n = [...prev];
            n[idx] = true;
            return n;
          });
        }
      }, 6000);
      timeouts.push(t);
    });

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Automatic rotation (single timer controlled; reset on manual nav)
  function clearTimer() {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }
  function startTimer() {
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
      startTimer(); // schedule next
    }, 10000);
  }
  useEffect(() => {
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resetTimer() {
    startTimer();
  }

  function goTo(idx: number) {
    setCurrent(idx);
    resetTimer();
  }
  function prevBanner() {
    setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
    resetTimer();
  }
  function nextBanner() {
    setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
    resetTimer();
  }

  // onError fallback for <img> to avoid broken icon
  function handleImgError(e: React.SyntheticEvent<HTMLImageElement, Event>, idx: number) {
    const el = e.currentTarget;
    if (el.src !== FALLBACK) {
      el.src = FALLBACK;
      setLoaded((prev) => {
        const n = [...prev];
        n[idx] = true;
        return n;
      });
    }
  }

  return (
    <section className="w-full h-[340px] relative overflow-hidden flex items-center justify-center">
      <style>{`
        .banner-skeleton {
          position: absolute;
          inset: 0;
          background: #e9e7e7;
          background-image: linear-gradient(90deg, #e9e7e7 0%, #f5f5f5 50%, #e9e7e7 100%);
          background-size: 200% 100%;
          animation: banner-shimmer 1.2s linear infinite;
        }
        @keyframes banner-shimmer {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
        .banner-img { width: 100%; height: 100%; object-fit: cover; transition: opacity 0.45s ease; display:block }
        .banner-slide { position: absolute; inset: 0; width: 100%; height: 100%; }
        .banner-hidden { opacity: 0; pointer-events: none; z-index: 0; }
        .banner-visible { opacity: 1; z-index: 20; }
      `}</style>

      {images.map((src, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={`banner-slide ${isActive ? "banner-visible" : "banner-hidden"}`}
            aria-hidden={!isActive}
          >
            {!loaded[idx] && isActive && <div className="banner-skeleton" />}
            <img
              src={src}
              alt={`Banner ${idx + 1}`}
              onError={(e) => handleImgError(e, idx)}
              className="banner-img"
              style={{ opacity: loaded[idx] ? 1 : 0 }}
              draggable={false}
            />
          </div>
        );
      })}

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-30"
        aria-label="Anterior"
        onClick={prevBanner}
      >
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-30"
        aria-label="Próximo"
        onClick={nextBanner}
      >
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2"><polyline points="9 6 15 12 9 18" /></svg>
      </button>

      <div className="absolute left-0 right-0 bottom-4 flex justify-center items-center pb-4 z-40">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-8 h-2 rounded-full mx-1 transition-all duration-300 ${idx === current ? "bg-blue-900" : "bg-gray-300 opacity-50"}`}
            onClick={() => goTo(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}