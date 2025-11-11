"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FF8142] text-white px-50 py-6 flex items-center justify-between sticky top-0 z-50 shadow-lg">

        <Link href="\" className="cursor-pointer text-3xl font-bold hover:scale-105 duration-300">
            ProtPet
        </Link>

      {/* Menu principal - escondido em telas médias pra baixo */}
      <div className="hidden lg:flex space-x-8 text-xl">
        <Link
          href="/denuncias"
          className="cursor-pointer hover:scale-105 duration-300"
        >
          Denúncias
        </Link>

        <Link
          href="/cadastroAnimais"
          className="cursor-pointer hover:scale-105 duration-300"
        >
          Cadastro de animais
        </Link>

        <Link
          href="/todosAnimais"
          className="cursor-pointer hover:scale-105 duration-300"
        >
          Todos os animais
        </Link>

        <Link
          href="/ongsProximas"
          className="cursor-pointer hover:scale-105 duration-300"
        >
          Ongs Próximas
        </Link>
      </div>

      {/* Botão Entrar - escondido em telas médias pra baixo */}
      <div className="hidden lg:flex space-x-8 text-lg">
        <h2 className="border border-white p-1 px-2 rounded hover:bg-[#fff4e5] hover:text-[#FF862F] transition-colors duration-200">
          Entrar
        </h2>
      </div>

      {/* Ícone do menu hamburguer (visível até 1024px) */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-50 bg-[#FF862F] rounded-b-lg text-white flex flex-col items-center py-6 space-y-4 text-lg shadow-lg lg:hidden">
          <Link
            href="/denuncias"
            className="hover:scale-105 duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Denúncias
          </Link>

          <Link
            href="/cadastroAnimais"
            className="hover:scale-105 duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Cadastro de Animais
          </Link>

          <Link
            href="/ongsProximas"
            className="hover:scale-105 duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Ongs Próximas
          </Link>

        </div>
      )}
    </header>
  );
}
