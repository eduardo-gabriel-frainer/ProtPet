import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#FF862F] text-white px-40 py-8 flex items-center justify-between">

        <Link href="\" className="cursor-pointer text-3xl font-bold hover:scale-105 duration-300">
            ProtPet
        </Link>

        <div className="flex space-x-8 text-xl">
            <Link href="\denuncias" className="cursor-pointer hover:scale-105 duration-300">
                Denuncias
            </Link>

            <Link href="\cadastroAnimais" className="cursor-pointer hover:scale-105 duration-300">
             Animais perdidos
            </Link>
            
            <Link href="\ongsProximas"  className="cursor-pointer hover:scale-105 duration-300">
                Ongs próximas
            </Link>
        </div>

        <div className="flex space-x-8 text-lg">
            <h2 className="border border-white p-1 px-2 rounded hover:bg-[#fff4e5] hover:text-[#FF862F] transition-colors duration-200">Entrar</h2>
        </div>

    </header>
  );
}
