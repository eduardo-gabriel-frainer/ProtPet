export default function Card({ pet }) {
  return (
    <div className="bg-[#FF862F] rounded-2xl h-90 w-72 mr-10 text-center">
      {/* Foto */}
      <div className="bg-white h-65 w-72 overflow-hidden rounded-t-2xl">
        <img
          src={pet.image}
          className="w-full h-full object-cover hover:scale-105 duration-300"
        />
      </div>

      {/* Descricao do pet */}
      <h2 className="text-white text-left ml-5 mt-5 text-2xl font-medium">{pet.especie}</h2>
      <h2 className="text-white text-left ml-5 text-2xl -mt-1">{pet.status}</h2>
    </div>
    
  );
}
