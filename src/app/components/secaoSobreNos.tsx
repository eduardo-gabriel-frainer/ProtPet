export default function SecaoIntro() {
  return (
    <div className="min-h-screen bg-[#fff4e5] flex items-center justify-center px-20 py-20">
      <div className="flex items-center gap-16 max-w-7xl">

        <img src="/cachorroSobreNos.png" className="w-[650px] h-auto" alt="Cachorro feliz" />

        <div className="font-medium">
          <h2 className="text-[#FF862F] text-5xl font-semibold mb-6">
            Sobre o nosso projeto
          </h2>

          <p className="text-[#1e293b] text-lg leading-relaxed max-w-xl mb-8">
            Em Inglaterra, o uso do chip é sempre e obrigatório e este viabilizou uma robusta rede
            de abrigos europeus, regulando e reduzindo o número de cães não-identificados. Os animais
            têm acesso a um microchip implantado que auxilia na sua identificação e permite que eles
            sejam rastreados em casos de perda ou abandono.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#FF8142] text-white text-lg px-6 py-3 rounded-full hover:bg-[#ff7e22] transition-all duration-200">
              Saiba Mais
            </button>
            <button className="bg-[#FFD0A6] text-[#FF862F] text-lg px-6 py-3 rounded-full hover:bg-[#ffb977] transition-all duration-200">
              Aderir ao Projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
