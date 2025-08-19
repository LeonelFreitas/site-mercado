type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  unit: string;
  details?: string;
  offer?: boolean;
  oldPrice?: string;
  discount?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Refresco Ativ Plus 290ml Guaraná E Açaí",
    image: "https://produtos.vipcommerce.com.br/250x250/eecbe536-a23b-4b65-93be-cbb33eca4002.jpg",
    price: "R$ 0,69",
    unit: "/un",
    offer: true,
    oldPrice: "R$ 0,99",
    discount: "30% OFF",
  },
  {
    id: 2,
    name: "Leite Condensado Italac 395g Semi Desnatado",
    image: "https://produtos.vipcommerce.com.br/250x250/a38a6924-baab-4486-9d97-fb875aa3badd.jpg",
    price: "R$ 7,29",
    unit: "/un",
  },
  {
    id: 3,
    name: "Refresco Ativ Plus 290ml Laranja E Acerola",
    image: "https://produtos.vipcommerce.com.br/250x250/ead0c7e0-62e3-41b3-9194-3c39bf849d69.jpg",
    price: "R$ 0,99",
    unit: "/un",
  },
  {
    id: 4,
    name: "Refrigerante Coca Cola 200ml Zero",
    image: "https://produtos.vipcommerce.com.br/250x250/bc19ae83-dfac-45a4-a4ef-684ec4b59613.jpg",
    price: "R$ 1,69",
    unit: "/un",
  },
  {
    id: 5,
    name: "Batata Lavada 500g (aproximadamente 3 Unidades)",
    image: "https://produtos.vipcommerce.com.br/250x250/e5e8b938-07ed-4bdb-b2ae-4d58fb458cc5.jpg",
    price: "R$ 3,49",
    unit: "/500g",
    details: "R$ 6,98/kg",
  },
  {
    id: 6,
    name: "Limão Taiti 200g (aproximadamente 2 Unidades)",
    image: "https://produtos.vipcommerce.com.br/250x250/d3b7512b-5d2c-4636-aad8-03dc9c110318.jpg",
    price: "R$ 1,40",
    unit: "/200g",
    details: "R$ 7,00/kg",
  },
];

export function ProductShelf() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16 pt-6 ">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 text-left flex-1">Destaques</h2>
        <a
          href="#"
          className="text-blue-900 font-medium flex items-center gap-1 hover:underline ml-4 whitespace-nowrap"
          style={{ lineHeight: "1" }}
        >
          ver todos <span className="text-lg">&#8250;</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-md flex flex-col items-center p-5 relative transition hover:shadow-lg"
          >
            {/* Ícone de lista */}
            <button className="absolute top-3 right-3 text-gray-400 hover:text-blue-900">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="6" width="14" height="2" rx="1" />
                <rect x="4" y="10" width="14" height="2" rx="1" />
                <rect x="4" y="14" width="14" height="2" rx="1" />
              </svg>
            </button>
            {/* Imagem */}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-2"
              loading="lazy"
            />
            {/* Nome e Preço fixos */}
            <div className="flex flex-col justify-between items-start w-full min-h-[70px] mb-1">
              <div className="text-sm text-gray-700 font-medium leading-tight w-full text-left line-clamp-2">
                {product.name}
              </div>
              <div className="text-xl font-bold text-gray-900 mt-2 w-full text-left">
                {product.price}
                <span className="text-sm font-normal text-gray-600">{product.unit}</span>
              </div>
            </div>
            {/* Detalhes */}
            {product.details && (
              <div className="text-xs text-gray-400 mb-1 w-full text-left">{product.details}</div>
            )}
            {/* Botão adicionar */}
            <button className="mt-2 bg-blue-900 hover:bg-blue-800 text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg text-2xl absolute right-4 bottom-4 transition">
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}