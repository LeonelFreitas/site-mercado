"use client";
import { useState } from "react";
import { FaSearch, FaStore, FaHome, FaWalking, FaMapMarkerAlt } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const loja = {
  nome: "Mercado Tomás Dias - Maringá",
  endereco: "Estrada Mauá Maromba, SN - Maringá, Itatiaia - RJ",
};

export function Header() {
  const [showPanel, setShowPanel] = useState(false);
  const [selected, setSelected] = useState<"casa" | "loja">("loja");
  

  return (
    <>
      <header className="w-full bg-[#1E3A8A]">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 p-1">
              <img src="/logo.webp" alt="Logo Mercado Tomás Dias" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          {/* Busca (visible on mobile and desktop) */}
          <div className="flex-1 mx-3">
            <form className="flex items-center bg-white rounded-full px-4 py-2 w-full">
              <input
                type="text"
                placeholder="O que você precisa?"
                className="flex-1 outline-none bg-transparent text-blue-900 px-2 text-sm"
              />
              <button type="submit" className="text-blue-900">
                <FaSearch size={18} />
              </button>
            </form>
          </div>
          {/* Endereço - botão para abrir painel */}
          <div className="flex items-center gap-2 text-white text-sm md:text-base relative">
            <button
              aria-label="Abrir opções de retirada"
              className="p-2 rounded-md text-white hover:text-blue-200"
              onClick={() => setShowPanel((v) => !v)}
            >
              <FaStore size={18} />
            </button>
            <span className="hidden sm:inline font-medium">Retirar na loja:</span>
            <button
              type="button"
              className="hidden sm:flex font-semibold underline hover:text-blue-300 transition items-center gap-2 text-sm md:text-base"
              onClick={() => setShowPanel((v) => !v)}
            >
              <span className="text-sm md:text-base font-semibold">Estrada Mauá Maromba</span>
              {showPanel ? (
                <IoChevronUp size={16} />
              ) : (
                <IoChevronDown size={16} />
              )}
            </button>
          </div>
        </div>
        
      </header>
      {/* Painel lateral flutuante */}
      {showPanel && (
        <div className="fixed top-20 left-4 right-4 sm:right-8 sm:left-auto z-50 w-auto sm:w-[340px] bg-white rounded-xl shadow-lg border border-blue-900">
          <div className="p-5 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-blue-900 text-lg"
              onClick={() => setShowPanel(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <h2 className="text-base font-semibold mb-4 text-gray-800">Você deseja:</h2>
            <div className="flex mb-4 w-fit border border-blue-900 rounded-full overflow-hidden">
              <button
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium transition duration-200 focus:outline-none
                  ${selected === "casa"
                    ? "bg-white text-blue-900"
                    : "bg-white text-blue-900"}
                  rounded-l-full
                `}
                style={{ minWidth: 120 }}
                onClick={() => setSelected("casa")}
              >
                <FaHome className="mr-1" size={14} />
                Receber em Casa
              </button>
              <button
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium transition duration-200 focus:outline-none
                  ${selected === "loja"
                    ? "bg-blue-900 text-white"
                    : "bg-white text-blue-900"}
                  rounded-r-full
                `}
                style={{ minWidth: 120 }}
                onClick={() => setSelected("loja")}
              >
                <FaWalking className="mr-1" size={20} />
                Retirar na Loja
              </button>
            </div>
            <div className="mb-2 text-sm text-gray-800 font-medium">
              {selected === "casa"
                ? "Em qual endereço deseja receber?"
                : "Retirada apenas no endereço da loja"}
            </div>
            {selected === "casa" ? (
              <a
                href="#"
                className="text-blue-900 underline font-medium text-xs hover:text-blue-700"
              >
                Informar um CEP
              </a>
            ) : (
              <button
                className="flex items-start gap-2 px-2 py-2 rounded-lg border border-blue-100 w-full text-left transition duration-200 bg-blue-50"
                disabled
              >
                <FaMapMarkerAlt className="mt-1 text-blue-900" size={16} />
                <div>
                  <div className="font-semibold text-blue-900 text-xs">{loja.nome}</div>
                  <div className="text-xs text-gray-600">{loja.endereco}</div>
                </div>
                <span className="ml-auto text-blue-900 font-bold text-base">✓</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}