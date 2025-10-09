export default function secaoIntro() {
    return(
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
    )
}