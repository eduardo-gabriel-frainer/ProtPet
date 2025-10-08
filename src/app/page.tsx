import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Primeiro Setor Incicio */}
      <div className="min-h-screen bg-[#FF862F] flex items-center justify-between px-40">
        <div className="text-white text-8xl align-items font-semibold">
          <img src="/osso.png" className="w-40 h-auto" />
          <div>" A voz que</div>
          <div>protege quem</div>
          <div>não pode falar. "</div>
        </div>

        <div className="text-white text-6xl align-items">
           <img src="/cachorroTelaPrincipal.png" className="w-160 h-auto -mt-20" />
        </div>
      </div>  

      {/* Segundo Setor Sobre nós */}

      <div className="min-h-screen bg-[#fff4e5] flex items-center justify-between px-40"> 
          <div className="text-white text-6xl align-items">
           <img src="/cachorroSobreNos.png" className="w-210 h-auto mt-20" />
          </div>

          <div className="align-items font-medium">
          <div className="text-[#FF862F] text-6xl">
            <div>Sobre o</div>
            <div>nosso projeto</div>
          </div>

          <div className="max-w-xl break-words mt-10 text-2xl leading-snug mr-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio soluta laudantium dolor qui aperiam sapiente sit amet
            consectetur adipisicing elit. Optio soluta laudantium dolor qui aperiam sapient mollitia! Repellat aspernatur illum ullam
             neque, dolorem hic soluta id, enim magnam, voluptatum earum assumenda!
          </div>
          <button className="bg-[#FF862F] px-5 py-3 text-white text-xl rounded-3xl mt-8 ml-2 hover:bg-[#ff7e22] hover:scale-103 duration-200">Denunciar</button>
          <button className="bg-[#FF862F] px-5 py-3 text-white text-xl rounded-3xl mt-8 ml-8 hover:bg-[#ff7e22] hover:scale-103 duration-200">Animais Perdidos</button>
        </div>
      </div>

      {/* Terceiro Setor Carousel */}

      <div className="min-h-screen bg-[#fff4e5]">
        <div className="text-[#FF862F] text-6xl text-center pt-20 font-semibold">
          Animais Perdidos ou Encontrados
        </div>
      </div>

       <div className="min-h-screen bg-[#FF862F] text-6xl">
      </div>

    </div>
  );
}
