"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ZapFixo: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
      }}
    >
      <div className="whatsapp-container">
        <div className="pulse-ring"></div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="lead"
          aria-label="Fale conosco pelo WhatsApp"
          
        >
          <FaWhatsapp size={32} color="#fff" />
        </a>
      </div>

      <style jsx>{`
        .whatsapp-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lead {
          position: relative;
          z-index: 10;
          background: #25D366;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.15);
          text-decoration: none;
          transition: box-shadow 0.2s;
        }

        .lead:hover {
          box-shadow: 0 2px 12px rgba(37, 211, 102, 0.22);
        }

        .pulse-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.4);
          pointer-events: none;
          animation: pulse 2s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            width: 48px;
            height: 48px;
          }
          
          .pulse-ring {
            width: 48px;
            height: 48px;
          }
          
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(2.0);
              opacity: 0;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ZapFixo;