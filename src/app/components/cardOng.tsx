import { Phone, Mail, MapPin, HeartHandshake, PiggyBank } from "lucide-react";

interface CardOngProps {
  image: string;
  nome: string;
  descricaoCurta: string;
  descricaoLonga: string;
  telefone: string;
  email: string;
  endereco: string;
  pix: string;
  paypal: string;
}

export default function CardOng({
  image,
  nome,
  descricaoCurta,
  descricaoLonga,
  telefone,
  email,
  endereco,
  pix,
  paypal,
}: CardOngProps) {
  return (
    <div className="bg-[#ffffff] w-[30vw] rounded-2xl shadow-2xl overflow-hidden">
      <img src={image} alt={nome} className="w-full h-[200px] object-cover" />

      <div className="px-8 pt-8">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <HeartHandshake className="text-orange-500" /> {nome}
        </h2>
        <p className="text-amber-500 mt-3 font-medium">{descricaoCurta}</p>
        <p className="mt-4 text-gray-600">{descricaoLonga}</p>
        <hr className="mt-5 border-gray-200" />
      </div>

      <div className="px-8 pt-5">
        <p className="font-semibold text-lg mb-2">Contato</p>

        <div className="flex items-center gap-2 text-gray-700">
          <Phone size={18} /> {telefone}
        </div>
        <div className="flex items-center gap-2 text-gray-700 mt-2">
          <Mail size={18} /> {email}
        </div>
        <div className="flex items-center gap-2 text-gray-700 mt-2">
          <MapPin size={18} /> {endereco}
        </div>

        <hr className="mt-5 border-gray-200" />
      </div>

      <div className="px-8 pt-5 pb-8">
        <p className="mb-5 font-semibold text-lg flex items-center gap-2">
          <PiggyBank className="text-orange-500" /> Formas de doação
        </p>

        <div className="bg-orange-50 rounded-2xl p-4">
          <h3 className="font-semibold text-gray-800">Pix:</h3>
          <p className="ml-5 text-gray-600">{pix}</p>

          <h3 className="font-semibold mt-3 text-gray-800">PayPal:</h3>
          <p className="ml-5 text-gray-600">{paypal}</p>
        </div>
      </div>
    </div>
  );
}
