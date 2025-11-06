import Footer from "../components/footer";
import { Shield, TriangleAlert } from 'lucide-react';

export default function cadastroAnimais() {
    return(
        <div>
            <div className="min-h-screen bg-amber-50">
                <div className="text-center pt-25">
                     <h2 className="text-orange-600 text-4xl flex justify-center gap-3">
                        <TriangleAlert size={42} className="text-orange-600" />
                        Denúncias de Maus Tratos a Animais
                    </h2>
                    <p className="pt-5">Se você testemunhou ou tem conhecimento de maus tratos a animais, preencha este<br></br> formulário. Sua denúncia é importante e será encaminhada às autoridades compotentes</p>
                    <p className="flex justify-center mt-10 mx-auto border bg-amber-50 border-amber-400 w-200 p-4 rounded-xl text-amber-600"><Shield size={30} className="mr-2 pb-2"/> <span className="font-semibold text-amber-700">Confiabilidade:</span> Todas as denúncias são tratadas com sigilo. Você pode optar por fazer umad denúncia anônima marcando a opção abaixo </p>
                </div>

               <div className="mx-auto mt-10 bg-white w-[70vw] p-8 rounded-2xl shadow-2xl">
                    <form className="flex flex-col w-full gap-5 text-gray-700">

                        <div className="flex gap-4">
                            <div className="flex flex-col flex-1">
                                <label className="font-semibold mb-1">Tipo de maus tratos:</label>
                                <select className="border p-2 rounded">
                                <option value="">Selecione</option>
                                <option value="violencia">Violência</option>
                                <option value="abandono">Abandono</option>
                                <option value="negligencia">Negligência</option>
                                </select>
                            </div>

                            {/* Tipo de animal */}
                            <div className="flex flex-col flex-1">
                                <label className="font-semibold mb-1">Tipo de animal:</label>
                                <select className="border p-2 rounded">
                                <option value="">Selecione</option>
                                <option value="cao">Cão</option>
                                <option value="gato">Gato</option>
                                <option value="ave">Ave</option>
                                <option value="outro">Outro</option>
                                </select>
                            </div>
                        </div>

                        <label className="font-semibold -mb-2">Data e Hora do incidente</label>
                        <input type="date" className="border p-2 rounded"/>

                        <label className="font-semibold -mb-2">Descrição detalhada do ocorrido</label>
                        <textarea placeholder="Descreva em detalhes o que ocorreu" className="border p-2 rounded"></textarea>

                        <button
                        type="submit"
                        className="mt-4 bg-[#FF862F] hover:bg-[#ff730e] text-white font-semibold py-2 rounded-lg">
                        Enviar
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>

    )
}