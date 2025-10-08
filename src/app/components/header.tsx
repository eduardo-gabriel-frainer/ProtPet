export default function Header() {
  return (
    <header className="bg-[#FF862F] text-white px-40 pt-8 flex items-center justify-between">
      
        <div className="cursor-pointer text-3xl font-bold hover:scale-105 duration-300">
            ProtPet
        </div>

        <div className="flex space-x-8 text-xl">
            <h2 className="cursor-pointer hover:scale-105 duration-300">
                Denuncias
            </h2>
            <h2 className="cursor-pointer hover:scale-105 duration-300">
                Animais perdidos
            </h2>
            <h2 className="cursor-pointer hover:scale-105 duration-300">
                Ongs próximas
            </h2>
        </div>

        <div className="flex space-x-8 text-lg">
            <h2 className="border border-white p-1 px-2 rounded hover:bg-[#fff4e5] hover:text-[#FF862F] transition-colors duration-200">Entrar</h2>
        </div>

    </header>
  );
}
