export function Footer() {
  return (
    <footer className="w-full bg-red-600 text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        {/* Quem somos */}
        <div>
          <h3 className="font-bold mb-2">Quem somos</h3>
          <p className="text-sm mb-2">
            O <span className="font-semibold">Mercado Tomás Dias</span> nasceu em Maringá, distrito de Itatiaia, RJ, como um pequeno comércio familiar dedicado a atender a comunidade local com produtos de qualidade e atendimento próximo. Com o passar dos anos, o mercado cresceu, modernizou suas instalações e ampliou seu mix de produtos, mantendo sempre o compromisso com a tradição, confiança e o respeito aos clientes. Hoje, o Mercado Tomás Dias é referência na região, valorizando o relacionamento, a honestidade e o desenvolvimento local.
          </p>
          <a href="#" className="underline text-white text-sm hover:text-yellow-300">Clique aqui e saiba mais</a>
        </div>
        {/* Forma de Pagamento */}
        <div>
          <h3 className="font-bold mb-2">Forma de Pagamento</h3>
          <p className="text-sm mb-2">
            Aceitamos cartões de crédito, débito e vale alimentação.
          </p>
          <a href="#" className="underline text-white text-sm hover:text-yellow-300">Clique aqui e saiba mais</a>
        </div>
        {/* Institucional */}
        <div>
          <h3 className="font-bold mb-2">Institucional</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Quem somos</a></li>
            <li><a href="#" className="hover:underline">Como comprar online</a></li>
            <li><a href="#" className="hover:underline">Entregas</a></li>
            <li><a href="#" className="hover:underline">Formas de Pagamento</a></li>
            <li><a href="#" className="hover:underline">Perguntas Frequentes</a></li>
            <li><a href="#" className="hover:underline">Fale Conosco</a></li>
            <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
            <li><a href="#" className="hover:underline">Simulador de Frete</a></li>
            <li><a href="#" className="hover:underline">Cartão Royal</a></li>
            <li><a href="#" className="hover:underline">Trabalhe Conosco</a></li>
            <li><a href="#" className="hover:underline">Política de Cookies</a></li>
            <li><a href="#" className="hover:underline">Encartes</a></li>
            <li><a href="#" className="hover:underline">SAC Royal Online</a></li>
            <li><a href="#" className="hover:underline">Relatórios de transparência MTE</a></li>
            <li><a href="#" className="hover:underline">Nossas Lojas</a></li>
          </ul>
        </div>
        {/* Relacionamento com o Cliente */}
        <div>
          <h3 className="font-bold mb-2">Relacionamento com o Cliente</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="inline-flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 2h12v12H2z" /></svg>
                ouvidoria@mercadotomazdias.com.br
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2h10v12H3z" /></svg>
                (24) 4009-3342
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="7" /></svg>
                (24) 99307-0373
              </span>
            </li>
          </ul>
        </div>
        {/* Redes Sociais */}
        <div>
          <h3 className="font-bold mb-2">Redes Sociais</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram">
              <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/youtube.svg" alt="YouTube" className="w-8 h-8" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/facebook.svg" alt="Facebook" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      {/* Informações legais */}
      <div className="max-w-7xl mx-auto px-6 text-xs text-white mt-6 space-y-2">
        <div>
          <span className="font-semibold">Mercado Tomás Dias</span> &nbsp;|&nbsp;
          CNPJ: <span className="tracking-wide">01.480.423/0001-19</span><br />
          <span className="font-bold">Endereço:</span> Estrada Mauá Maromba, SN - Maringá, Itatiaia - RJ<br />
          <span className="font-bold">CEP:</span> 27553-000 - Itatiaia/RJ
        </div>
        <div>
          <span className="font-bold">MERCADO TOMÁS DIAS</span> é um canal de vendas on-line pelo qual você tem acesso aos nossos produtos, com <span className="underline">facilidade</span> para comprar de onde quiser; <span className="underline">conforto</span> ao agendar a entrega do seu pedido, com data e hora marcadas no endereço que indicar; e total <span className="underline">segurança</span>, com sistema e plataformas adequados para gerir sua compra e seus dados com absoluto sigilo.<br />
          Preços, ofertas e condições exclusivas para internet e válidos durante o dia de hoje, podendo sofrer alteração sem prévia notificação. A compra de produtos com preços promocionais poderá ter sua quantidade limitada por compra. Em caso de divergência de valores no site, o valor válido é o do carrinho de compras. Fotos ilustrativas. Compras sujeitas à confirmação de estoque. Os preços e os produtos visualizados no site e aplicativo podem ser diferentes dos praticados em nossas lojas físicas. Os itens pesados possuem peso médio em suas descrições, pois o peso pode sofrer variação no momento da pesagem. Caso falte algum item, o mesmo não será cobrado.
        </div>
        <div>
          Proibida a venda de bebidas alcoólicas para menores de idade, conforme Lei n.º 8069/90, art. 81, inciso II (Estatuto da Criança e do Adolescente).<br />
        </div>
      </div>
    </footer>
  );
}