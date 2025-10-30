"use client";
import { useState, useEffect } from "react";
import Card from "./card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  const pets = [
    { id: 1, especie: "Gato", status: "Perdido", image: "/imagesCarousel/1.png" },
    { id: 2, especie: "Cachorro", status: "Encontrado", image: "/imagesCarousel/2.png" },
    { id: 3, especie: "Calopsita", status: "Encontrado", image: "/imagesCarousel/3.png" },
    { id: 4, especie: "Gato", status: "Perdido", image: "/imagesCarousel/4.png" },
    { id: 5, especie: "Cabra", status: "Perdido", image: "/imagesCarousel/5.png" },
    { id: 6, especie: "Gato", status: "Perdido", image: "/imagesCarousel/6.png" },
    { id: 7, especie: "Cabra", status: "Perdido", image: "/imagesCarousel/7.png" },
    { id: 8, especie: "", status: "Ver mais!!!", image: "/imagesCarousel/vermais.png" },
  ];

  const [index, setIndex] = useState(0);
  const [cardsVisiveis, setCardsVisiveis] = useState(4);
  const [cardWidth] = useState(325);
  const [ultimo, setUltimo] = useState(false);
  const [primeiro, setPrimeiro] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setCardsVisiveis(1)
      } else if (window.innerWidth < 1400) {
        setCardsVisiveis(2);
      } else if (window.innerWidth < 1780) {
        setCardsVisiveis(3);
      } else {
        setCardsVisiveis(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const avancar = () => {
    if (index < pets.length - cardsVisiveis) {
      setIndex(index + 1);
    } 

    if (index == 3){
      setUltimo(true);
    }
    setPrimeiro(false);
  };

  const voltar = () => {
    if (index > 0) {
        setIndex(index - 1)
    }
   
    if (index == 1){
      setPrimeiro(true);
    }
    setUltimo(false)
  }

  return (
    <div className="relative flex items-center justify-center mt-10">
      {/* Botão esquerda */}
      <button className={`absolute left-30 bg-[#FF862F] text-white rounded-full hover:bg-[#ff730e] p-3 text-3xl z-900 ${primeiro ? 'hidden' : ''}`}
      onClick={voltar}>
        <FaArrowLeft size={20}/>
      </button>

      {/* Área dos cards */}
      <div
        className="overflow-hidden transition-all duration-300 pl-6"
        style={{
          width: `${cardsVisiveis * cardWidth}px`,
        }}
      >
        <div    
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 330}px)` }}
        >
           {pets.map((pet) => (
            <Card key={pet.id} pet={pet} />
          ))}
        </div>
      </div>

      {/* Botão direita */}
      <button className={`absolute right-30  ${ultimo ? "hidden" : ""} bg-[#FF862F] text-white rounded-full hover:bg-[#ff730e] p-3 text-3xl z-900`}
      onClick={avancar}>
          <FaArrowRight size={20}/>
      </button>
    </div>
  );
}
