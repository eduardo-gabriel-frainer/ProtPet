import Footer from "../components/footer";

export default function CadastroAnimais() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Container principal com texto e formulário */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-50 flex-1 px-6 py-12 md:px-16 lg:px-32 min-h-screen">

        {/* Texto à esquerda */}
        <div className="text-center md:text-left md:max-w-md -mt-24">
          <h1 className="text-[#FF862F] text-4xl md:text-5xl font-bold leading-tight">
            Formulário de <br /> animais perdidos ou <br /> encontrados
          </h1>

          <h2 className="pt-6 text-base md:text-lg text-gray-700">
            Ajude a reunir um animal com sua família. Preencha <br />
            este formulário para divulgar o animal que você perdeu <br /> 
            ou encontrou.
          </h2>
        </div>

        {/* Formulário à direita */}
        <form className="flex flex-col w-full max-w-xl gap-3 text-gray-700 bg-white p-10 rounded-2xl shadow-2xl">
          <label className="font-semibold">O animal está:</label>
          <select className="border p-2 rounded">
            <option value="">Selecione</option>
            <option value="perdido">Perdido</option>
            <option value="encontrado">Encontrado</option>
          </select>
        
          <label className="font-semibold">Localização:</label>
          <input type="text" className="border p-2 rounded" />

          <label className="font-semibold">Descrição:</label>
          <textarea className="border p-2 rounded min-h-[100px]" />

          <label className="font-semibold">Imagem:</label>
          <input type="file" className="border p-2 rounded" />

          <button
            type="submit"
            className="mt-4 bg-[#FF862F] hover:bg-[#ff730e] text-white font-semibold py-2 rounded-lg"
          >
            Enviar
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
