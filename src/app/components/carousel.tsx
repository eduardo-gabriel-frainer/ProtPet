"use client";
import { useState } from "react";
import Card from "./card";



export default function Carousel() {
  const pets = [
    { id: 1, especie: "Gato", status: "Perdido", image: "/imagesCarousel/1.png" },
    { id: 2, especie: "Cachorro", status: "Encontrado", image: "/imagesCarousel/2.png" },
    { id: 3, especie: "Calopsita", status: "Encontrado", image: "/imagesCarousel/3.png" },
    { id: 4, especie: "Gato", status: "Perdido", image: "/imagesCarousel/4.png" },
    { id: 5, especie: "Cabra", status: "Perdido", image: "/imagesCarousel/5.png" },
    { id: 4, especie: "Gato", status: "Perdido", image: "/imagesCarousel/6.png" },
    { id: 5, especie: "Cabra", status: "Perdido", image: "/imagesCarousel/7.png" },

    { id: 5, especie: "", status: "Ver mais!!!", image: "/imagesCarousel/vermais.png" },
  ];

  const [index, setIndex] = useState(0);


   const avancar = () => {
        if (index < pets.length - 4) {
            setIndex(index + 1)
        }
    }

  const voltar = () => {
    if (index > 0) {
        setIndex(index - 1)
    }
  }

  return (
    <div className="relative flex items-center justify-center mt-10">
      {/* Botão esquerda */}
      <button className="absolute left-30 bg-[#FF862F] text-white rounded-full hover:bg-[#ff730e] p-6 text-3xl z-900"
      onClick={voltar}>
       
      </button>

      {/* Área dos cards */}
      <div className="flex overflow-hidden h-100 pl-5 pt-5 w-[1330px]">
        <div    
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 335}px)` }}
        >
          {pets.map((pet) => (
            <Card key={pet.id} pet={pet} />
          ))}
        </div>
      </div>

      {/* Botão direita */}
      <button className="absolute right-30 bg-[#FF862F] text-white rounded-full hover:bg-[#ff730e] p-6 text-3xl z-900"
      onClick={avancar}>
          
      </button>
    </div>
  );
}
