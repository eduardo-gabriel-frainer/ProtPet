import Footer from "../components/footer";
import { MapPin, Shield, TriangleAlert } from 'lucide-react';

export default function cadastroAnimais() {
    return (
        <div>
            <div className="min-h-screen bg-amber-50">
                <div className="text-center pt-25">
                    <h2 className="text-orange-600 text-4xl flex justify-center gap-3">
                        <TriangleAlert size={42} className="text-orange-600" />
                        Denúncias de Maus Tratos a Animais
                    </h2>
                    <p className="pt-5">Se você testemunhou ou tem conhecimento de maus tratos a animais, preencha este<br></br> formulário. Sua denúncia é importante e será encaminhada às autoridades compotentes</p>
                    <p className="flex justify-center mt-10 mx-auto border bg-amber-50 border-amber-400 w-200 p-4 rounded-xl text-amber-600"><Shield size={30} className="mr-2 pb-2" /> <span className="text-amber-700">Confiabilidade:</span> Todas as denúncias são tratadas com sigilo. Você pode optar por fazer umad denúncia anônima marcando a opção abaixo </p>
                </div>

                <div className="mx-auto mt-10 bg-white w-[55vw] p-8 rounded-2xl shadow-2xl">
                    <form className="flex flex-col w-full gap-5 text-gray-400">

                        <div className="flex gap-4">
                            <div className="flex flex-col flex-1">
                                <label className="mb-1 appearance-none focus:border-[#FF862F] focus:outline-none">Tipo de maus tratos:</label>
                                <select className="border p-2 rounded">
                                    <option value="">Selecione</option>
                                    <option value="violencia">Violência</option>
                                    <option value="abandono">Abandono</option>
                                    <option value="doacao">Doação</option>
                                </select>
                            </div>

                            {/* Tipo de animal */}
                            <div className="flex flex-col flex-1">
                                <label className="mb-1 appearance-none focus:border-[#FF862F] focus:outline-none">Tipo de animal:</label>
                                <select className="border p-2 rounded">
                                    <option value="">Selecione</option>
                                    <option value="cao">Cão</option>
                                    <option value="gato">Gato</option>
                                    <option value="ave">Ave</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                        </div>

                        <label className="-mb-2">Data e Hora do incidente</label>
                        <input type="date" className="border p-2 rounded focus:border-[#FF862F] focus:outline-none" />

                        <label className="-mb-2">Localização Exata do Incidente</label>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin size={14} className="text-gray-500" /> Clique no mapa para marcar a localização
                        </p>
                        <div className="h-64 border border-gray-300 rounded-md bg-gray-100 flex items-center justify-center text-gray-500 text-sm overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227807.68380837812!2d-49.263911241832666!3d-26.856008103542575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e408b5c3095%3A0xacfb8520bc1a7644!2sBlumenau%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1762819073116!5m2!1spt-BR!2sbr"
                                className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <label className="-mb-2">Endereço ou Referências Locais</label>
                        <textarea placeholder="Ex: Rua das Flores" className="border p-2 rounded w-full focus:border-[#FF862F] focus:outline-none" />

                        <label className="-mb-2">Descrição Detalhada do Ocorrido</label>
                        <textarea placeholder="Descreva em detalhes o que você presenciou ou tem conhecimento. Inclua informações como: número de animais envolvidos, condições em que se encontram, identificação do responsável (se conhecer), etc."
                            className="border p-3 rounded-md h-32 focus:border-[#FF862F] focus:outline-none" />

                        <label className="mb-1 text-sm font-medium text-gray-700">
                            Evidências Fotográficas (Opcional)
                        </label>

                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-[#FF862F] transition text-center">
                            <svg className="w-8 h-8 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                            </svg>
                            <p className="text-sm text-gray-600">
                                Clique para adicionar fotos <span className="text-gray-400">(múltiplas)</span>
                            </p>
                            <p className="text-xs text-gray-400">As imagens ajudam na investigação</p>
                            <input type="file" multiple className="hidden" />
                        </label>

                        <button
                            type="submit"
                            className="mt-4 bg-[#FF862F] hover:bg-[#ff730e] text-white py-2 rounded-lg">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    )
}