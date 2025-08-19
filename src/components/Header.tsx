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
      <header className="w-full bg-red-600">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-2">
              <img src="/logo.webp" alt="Logo Mercado Tomás Dias" className="w-12 h-12" />
            </div>
          </div>
          {/* Busca */}
          <div className="flex-1 mx-6">
            <form className="flex items-center bg-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="O que você precisa?"
                className="flex-1 outline-none bg-transparent text-red-700 px-2"
              />
              <button type="submit" className="text-red-600">
                <FaSearch size={20} />
              </button>
            </form>
          </div>
          {/* Endereço - botão para abrir painel */}
          <div className="flex items-center gap-2 text-white text-xs relative">
            <FaStore size={16} />
            <span className="hidden md:inline">Retirar na loja:</span>
            <button
              type="button"
              className="font-medium underline hover:text-yellow-300 transition flex items-center gap-1"
              onClick={() => setShowPanel((v) => !v)}
            >
              Estrada Mauá Maromba
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
        <div className="fixed top-24 right-30 z-50 w-[340px] bg-white rounded-xl shadow-lg border border-blue-900">
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
                <FaWalking className="mr-1" size={14} />
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