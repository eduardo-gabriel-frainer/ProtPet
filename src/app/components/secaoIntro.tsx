export default function secaoIntro() {
    return(
    <div className="min-h-screen bg-[#FF862F] flex items-center justify-between px-40 -mt-5">
        <div className="text-white text-8xl align-items font-semibold -mt-5">
          <img src="/osso.png" className="w-40 h-auto hover:scale-110 duration-300" />
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            " A voz que <br />
            protege quem <br />
            não pode falar. "
          </div>
          </div>

          <div className="text-white text-6xl align-items">
            <img src="/cachorroTelaPrincipal.png" className="w-60 sm:w-96 md:w-120 lg:w-160 h-auto -mt-10 md:-mt-20" />
          </div>
    </div>  
    )
}