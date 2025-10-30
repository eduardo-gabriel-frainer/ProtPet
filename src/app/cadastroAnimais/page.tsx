import Footer from "../components/footer";

export default function CadastroAnimais() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Container principal com texto e formulário lado a lado */}
      <div className="flex justify-between items-center flex-wrap gap-10 flex-1 px-100 min-h-screen">
        
        {/* Texto à esquerda */}
        <div className="max-w-xl -mt-15">
          <h1 className="text-[#FF862F] text-5xl font-bold leading-tight">
            Formulário de <br /> animais perdidos ou <br /> encontrados
          </h1>

          <h2 className="pt-8 text-lg">
            Ajude a reunir um animal com sua família. Preencha <br />
            este formulário para divulgar o animal que você perdeu <br /> 
            ou encontrou.
          </h2>
        </div>

        {/* Formulário à direita */}
        <form className="flex flex-col w-96 gap-3 text-gray-700">
          <label className="font-semibold">O animal está:</label>
          <input type="text" className="border p-1 pl-2 rounded" />

          <label className="font-semibold">Localização:</label>
          <input type="text" className="border p-1 pl-2 rounded" />

          <label className="font-semibold">Descrição:</label>
          <textarea className="border p-1 pl-2 rounded" />

          <label className="font-semibold">Imagem:</label>
          <input type="file" className="border h-20 p-1 pl-2 rounded"/>

          <button
            type="submit"
            className="mt-4 bg-[#FF862F] hover:bg-[#ff730e] text-white font-semibold py-1 rounded-lg w-25"
          >
            Enviar
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
