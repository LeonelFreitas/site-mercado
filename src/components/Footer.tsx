export function Footer() {
  return (
    <footer className="w-full text-slate-800" style={{ backgroundColor: '#C9E4F5' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Mercado Tomás Dias</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Comércio local em Maringá (Itatiaia-RJ). Atendimento familiar, produtos selecionados e compromisso com a comunidade.
            </p>
            <div className="mt-4 text-xs text-white/80">
              <div>CNPJ: <span className="font-medium tracking-wide">01.480.423/0001-19</span></div>
              <div className="mt-1">Estrada Mauá Maromba, SN • Maringá • CEP 27553-000</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Contato</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>
                <a href="mailto:ouvidoria@mercadotomazdias.com.br" className="hover:underline">
                  ouvidoria@mercadotomazdias.com.br
                </a>
              </li>
              <li className="leading-tight">(24) 4009-3342</li>
              <li className="leading-tight">(24) 99307-0373</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Links úteis</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li><a href="#" className="hover:underline">Quem somos</a></li>
              <li><a href="#" className="hover:underline">Formas de pagamento</a></li>
              <li><a href="#" className="hover:underline">Fale conosco</a></li>
              <li><a href="#" className="hover:underline">Política de privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Siga-nos</h4>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M17.5 6.5h.01"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.5-3L10 9v6z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"/></svg>
              </a>
            </div>

            <div className="mt-6">
              <a href="#top" className="inline-block bg-white text-slate-800 px-4 py-2 rounded shadow hover:opacity-95 text-sm">
                Voltar ao topo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/80">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Mercado Tomás Dias — Todos os direitos reservados.
          </div>
          <div>
            <span className="hidden md:inline">Desenvolvido por •</span>
            <span className="ml-1 font-medium text-slate-600">Leonel Freitas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}