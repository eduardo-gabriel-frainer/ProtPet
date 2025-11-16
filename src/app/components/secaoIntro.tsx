export default function secaoIntro() {
    return(
    <div className="min-h-screen bg-[#FF8142] flex items-center justify-between px-10 sm:px-20 md:px-32 lg:px-40 -mt-5">
        
        <div className="text-white font-semibold -mt-5">
          <img src="/osso.png" className="w-28 sm:w-36 md:w-40 h-auto hover:scale-110 duration-300" />
          
          <div className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[80px]
            leading-tight lg:leading-snug">
            
            " A voz que <br />
            protege quem <br />
            não pode falar. "
          </div>
        </div>

        <div className="text-white">
          <img 
            src="/cachorroTelaPrincipal.png" 
            className="w-48 sm:w-72 md:w-96 lg:w-120 h-auto md:-mt-20" 
          />
        </div>

    </div>  
    )
}
