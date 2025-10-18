"use client";

import { useEffect, useState } from "react";

type Product = {
  coditem: number;
  descricao: string;
  unidade: string;
  fotoUrl: string | null;
  preco: string | null;
};

// Tipo esperado da API (mais estrito que `any`)
type APIProduct = {
  coditem: number;
  descricao: string;
  unidade: string;
  fotoUrl?: string | null;
  preco?: string | null;
  unitario?: string | null;
};

export function ProductShelf() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetch("http://localhost:4000/promocoes/promocoes-ativas-detalhes")
      .then((res) => res.json())
      .then((data: APIProduct[]) => {
        const produtosComPreco = data.map((produto) => ({
          coditem: produto.coditem,
          descricao: produto.descricao,
          unidade: produto.unidade,
          fotoUrl: produto.fotoUrl ?? null,
          // aceita campo `preco` ou `unitario`
          preco: produto.preco ?? produto.unitario ?? null,
        }));
        setProducts(produtosComPreco);
        // inicializa estado de imagens como false
        const initialLoaded: Record<number, boolean> = {};
        produtosComPreco.forEach((p: Product) => (initialLoaded[p.coditem] = false));
        setImgLoaded(initialLoaded);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  function handleImgLoad(coditem: number) {
    setImgLoaded((s) => ({ ...s, [coditem]: true }));
  }

  // removi `formatPrice` (não usado) e mantive apenas formatPriceParts
  function formatPriceParts(preco: string | null) {
    if (!preco) return null;
    const n = Number(preco);
    if (Number.isNaN(n)) return null;
    const [intPart, decPart] = n.toFixed(2).split(".");
    const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return { currency: "R$", integer: intFormatted, decimals: decPart };
  }

  function cleanDescricao(desc: string) {
    const s = (desc || "").trim();
    if (/^\d{4,}[\d\.\-_\s\/]*[-–—:]?\s*/.test(s)) {
      return s.replace(/^\d{4,}[\d\.\-_\s\/]*[-–—:]?\s*/, "").trim();
    }
    return s;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pb-16 pt-10">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-serif font-extrabold tracking-tight text-gray-800 flex-1">
          PROMOÇÕES DO DIA
        </h2>
        <a href="#" className="text-blue-900 font-medium whitespace-nowrap hover:underline">
          {/* ver todos <span className="text-lg">&#8250;</span> */}
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-10">
        {loading ? (
          // skeleton cards (aumentei a altura)
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 animate-pulse min-h-[360px]" />
          ))
        ) : (
          products.map((product) => {
            const priceParts = formatPriceParts(product.preco);
            return (
              <div
                key={product.coditem}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md p-4 pb-5 relative transition-transform transform hover:-translate-y-1 hover:shadow-lg cursor-default flex flex-col min-h-[300px]"
                role="article"
                aria-label={cleanDescricao(product.descricao)}
              >
                {/* OFERTA badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  OFERTA
                </span>

                {/* imagem */}
                <div className="w-full flex items-center justify-center h-44 mb-4">
                  {!imgLoaded[product.coditem] && (
                    <div className="w-32 h-32 bg-gray-100 rounded-md overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-[shimmer_1.2s_linear_infinite]" />
                    </div>
                  )}
                  <img
                    src={product.fotoUrl ?? "/placeholder.png"}
                    alt={product.descricao}
                    className={`max-w-32 max-h-32 object-contain transition-opacity duration-300 ${imgLoaded[product.coditem] ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => handleImgLoad(product.coditem)}
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                {/* nome (menor espaçamento abaixo) */}
                <div className="mb-1">
                  <div className="text-sm text-gray-700 font-medium leading-tight line-clamp-2 mb-0 uppercase">
                    {cleanDescricao(product.descricao)}
                  </div>
                </div>

                {/* preço (reduzi margem superior) */}
                <div className="mt-1 flex items-end justify-between">
                   <div className="flex flex-col">
                    {priceParts ? (
                      <div className="flex items-end gap-3">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-gray-600">{priceParts.currency}</span>
                          <span className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-none">
                            {priceParts.integer}
                          </span>
                          <sup className="text-base md:text-lg font-extrabold text-gray-900 -ml-1">
                            {priceParts.decimals}
                          </sup>
                        </div>
                        <div className="text-xs text-gray-500 uppercase mt-2">{product.unidade}</div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-600 uppercase">{product.unidade}</div>
                    )}
                  </div>

                </div>
              </div>
            );
          })
        )}
      </div>

      {/* shimmer keyframes para tailwind-free environments */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-[shimmer_1.2s_linear_infinite] {
          background: linear-gradient(90deg, #f3f3f3 0%, #e9e9e9 50%, #f3f3f3 100%);
          background-size: 200% 100%;
          animation: shimmer 1.2s linear infinite;
        }
        .max-w-28 { max-width: 7rem; } /* 112px */
        .max-h-28 { max-height: 7rem; }
      `}</style>
    </section>
  );
}