export default function Card({ pet }) {
  return (
    <div className="bg-[#FF862F] rounded-2xl h-90 w-72 mr-12 text-center hover:scale-105 duration-300">
      {/* Foto */}
      <div className="bg-white h-65 w-72">
          <img src={pet.image} className="w-full h-full object-cover" />
      </div>

      {/* Descricao do pet */}
      <h2 className="text-white text-left ml-5 mt-5 text-2xl font-medium">{pet.especie}</h2>
      <h2 className="text-white text-left ml-5 text-2xl -mt-1">{pet.status}</h2>
    </div>
  );
}
