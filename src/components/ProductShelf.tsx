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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [imgLoaded, setImgLoaded] = useState<Record<number, boolean>>({});

  // useEffect(() => {
  //   fetch("http://localhost:4000/promocoes/promocoes-ativas-detalhes")
  //     .then((res) => res.json())
  //     .then((data: APIProduct[]) => {
  //       const produtosComPreco = data.map((produto) => ({
  //         coditem: produto.coditem,
  //         descricao: produto.descricao,
  //         unidade: produto.unidade,
  //         fotoUrl: produto.fotoUrl ?? null,
  //         // aceita campo `preco` ou `unitario`
  //         preco: produto.preco ?? produto.unitario ?? null,
  //       }));
  //       setProducts(produtosComPreco);
  //       // inicializa estado de imagens como false
  //       const initialLoaded: Record<number, boolean> = {};
  //       produtosComPreco.forEach((p: Product) => (initialLoaded[p.coditem] = false));
  //       setImgLoaded(initialLoaded);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setProducts([]);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    // prefer using an env var for the API URL so it can be changed per-environment
    const API_URL = process.env.NEXT_PUBLIC_PROMO_API ?? "https://api.mercadothomasdias.com.br/promocoes/promocoes-ativas-detalhes";

    

    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setErrorMsg(null);
        const res = await fetch(API_URL, { method: "GET", mode: "cors" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: APIProduct[] = await res.json();
        if (!mounted) return;
        const produtosComPreco = data.map((produto) => ({
          coditem: produto.coditem,
          descricao: produto.descricao,
          unidade: produto.unidade,
          fotoUrl: produto.fotoUrl ?? null,
          preco: produto.preco ?? produto.unitario ?? null,
        }));
        setProducts(produtosComPreco);
        const initialLoaded: Record<number, boolean> = {};
        produtosComPreco.forEach((p: Product) => (initialLoaded[p.coditem] = false));
        setImgLoaded(initialLoaded);
        setLoading(false);
      } catch (error: any) {
        // likely network / CORS / API down — show friendly message and fall back to sample data
        console.error("Erro ao carregar produtos:", error);
        if (!mounted) return;
        setErrorMsg("Não foi possível carregar as promoções do servidor. Por favor, tente novamente mais tarde.");
        setProducts(sampleProducts);
        const initialLoaded: Record<number, boolean> = {};
        sampleProducts.forEach((p) => (initialLoaded[p.coditem] = false));
        setImgLoaded(initialLoaded);
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
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

  // If there was an error fetching promos, show only the message (no skeleton/cards)
  if (errorMsg) {
    return (
      <section className="product-shelf max-w-7xl mx-auto px-4 pb-16 pt-10">
        <div className="max-w-7xl mx-auto mb-4 px-4">
          <div className="rounded-md bg-yellow-50 border border-yellow-200 p-3 text-sm text-yellow-800">
            {errorMsg}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="product-shelf max-w-7xl mx-auto px-4 pb-16 pt-10">
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

      {/* shimmer keyframes para tailwind-free environments + fonts */}
      <style>{`
  /* Importar fonts (Montserrat para títulos, Poppins para corpo) */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Poppins:wght@300;400;600&display=swap');

        /* shimmer */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-[shimmer_1.2s_linear_infinite] {
          background: linear-gradient(90deg, #f3f3f3 0%, #e9e9e9 50%, #f3f3f3 100%);
          background-size: 200% 100%;
          animation: shimmer 1.2s linear infinite;
        }

        /* tamanho helpers */
        .max-w-28 { max-width: 7rem; } /* 112px */
        .max-h-28 { max-height: 7rem; }

        /* Tipografia customizada apenas para este componente */
        .product-shelf {
          font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
        }
        .product-shelf h2 {
          /* Use a modern, compact sans-serif for headings — works better with ALL-CAPS */
          font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
          font-weight: 700;
          /* Slight positive tracking for uppercase headings to improve legibility */
          letter-spacing: 0.6px;
          /* Prevent overly tight line-height on large headings */
          line-height: 1.05;
        }
        /* pequenos ajustes para nomes e preços */
        .product-shelf .text-sm,
        .product-shelf .line-clamp-2 {
          font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
        }
      `}</style>
    </section>
  );
}