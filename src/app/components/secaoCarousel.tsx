import Carousel from "./carousel";

export default function secaoIntro() {
    return(
      <div className="min-h-screen bg-[#fff4e5]">
        <div className="text-[#FF8142] text-5xl text-center pt-10 pb-15 font-semibold">
          Animais Perdidos, Encontrados ou para adoção
        </div>
         <Carousel />
      </div>

    )
}