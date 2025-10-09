import Carousel from "./carousel";

export default function secaoIntro() {
    return(
          <div className="min-h-screen bg-[#fff4e5]">
        <div className="text-[#FF862F] text-6xl text-center pt-40 pb-15 font-semibold">
          Animais Perdidos ou Encontrados
        </div>
         <Carousel />
      </div>

    )
}