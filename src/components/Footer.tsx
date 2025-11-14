export function Footer() {
  return (
    <footer className="w-full text-black" style={{ backgroundColor: '#C9E4F5' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-2">Mercado Tomás Dias</h4>
            <p className="text-sm text-black leading-relaxed">
              Comércio local em Maringá (Itatiaia-RJ). Atendimento familiar, produtos selecionados e compromisso com a comunidade.
            </p>
            <div className="mt-4 text-xs text-black">
              <div>CNPJ: <span className="font-medium tracking-wide">01.480.423/0001-19</span></div>
              <div className="mt-1">Estrada Mauá Maromba, SN • Maringá • CEP 27553-000</div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-2">Contato</h4>
            <ul className="text-sm text-black space-y-2">
              <li>
                <a href="mailto:ouvidoria@mercadotomazdias.com.br" className="hover:underline break-words">
                  ouvidoria@mercadotomazdias.com.br
                </a>
              </li>
              <li className="leading-tight">
                <a href="tel:+552440093342" className="hover:underline">(24) 4009-3342</a>
              </li>
              <li className="leading-tight">
                <a href="tel:+5524993070373" className="hover:underline">(24) 99307-0373</a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-2">Links úteis</h4>
            <ul className="text-sm text-black space-y-2">
              <li><a href="#" className="hover:underline">Quem somos</a></li>
              <li><a href="#" className="hover:underline">Formas de pagamento</a></li>
              <li><a href="#" className="hover:underline">Fale conosco</a></li>
              <li><a href="#" className="hover:underline">Política de privacidade</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-2">Siga-nos</h4>
            <div className="flex items-center gap-3 mt-2 justify-center sm:justify-start">
              <a href="#" aria-label="Instagram" className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M17.5 6.5h.01"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 001.46 6.42 29.8 29.8 0 001 12a29.8 29.8 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29.8 29.8 0 0023 12a29.8 29.8 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"/></svg>
              </a>
            </div>

            <div className="pt-8 sm:pt-0 mt-4 sm:mt-6 flex justify-center sm:justify-start">
              <a
                href="#top"
                className="inline-flex items-center gap-3 bg-white text-black px-4 py-3 sm:px-4 sm:py-2 rounded shadow hover:opacity-95 text-sm"
                aria-label="Voltar ao topo"
              >
                <span>Voltar ao topo</span>
                {/* Ícone: seta para cima, posicionado à direita e um pouco maior em telas pequenas */}
                <svg
                  className="w-5 h-5 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 19V6" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-center md:justify-between text-xs text-black">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Mercado Tomás Dias — Todos os direitos reservados.
          </div>
          <div className="text-center md:text-right">
            <a
              href="https://wa.me/5524999974142?text=Gostaria%20de%20solicitar%20um%20trabalho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar WhatsApp para Leonel Freitas"
              className="inline-flex items-center gap-1 font-medium text-black hover:underline"
            >
              <span className="hidden md:inline">Desenvolvido por •</span>
              <span>Leonel Freitas</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}