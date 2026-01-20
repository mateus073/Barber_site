import { ContactTLocationType } from "../types/contactLocationType"
import { Button } from "./button"
import { CardStandard } from "./cardStandard"

type Props = {
    contactLocationData: ContactTLocationType
}

export const ContactLocation = ({ contactLocationData }: Props) => {

    return (
        <section className="w-full bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

                <div className="text-center max-w-2xl">
                    <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 mb-10 text-lg border border-solid border-[#F28705] font-semibold text-[#F28705]">
                        Contato e Localização
                    </span>

                    <h2 className="text-4xl font-bold text-white mb-4">
                        visite nossa <span className="text-[#F28705]">barbearia</span>
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        estamos prontos para receber voce e proporcionar a melhor experiencia em cuiado masculino.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    <CardStandard>
                        <div className="flex flex-col h-full p-3 text-left">
                            <div className="flex flex-col gap-7">
                                <img src="/imgs/mapa.png" alt="" className="w-10" />

                                <h3 className="text-lg font-semibold text-white">
                                    Endereço
                                </h3>

                                <div>
                                    <p className="text-sm text-gray-400">
                                        {contactLocationData.contacts.address.street},{" "}
                                        {contactLocationData.contacts.address.number}
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        {contactLocationData.contacts.address.city} -{" "}
                                        {contactLocationData.contacts.address.state}
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        CEP {contactLocationData.contacts.address.cep}
                                    </p>
                                </div>

                            </div>
                            <button className="mt-4 text-sm text-[#F28705] hover:underline w-fit">
                                Ver no mapa →
                            </button>
                        </div>
                    </CardStandard>

                    <CardStandard>
                        <div className="flex flex-col h-full p-3 text-left">
                            <div className="flex flex-col gap-6">
                                <img src="/imgs/telefone.png" alt="" className="w-10" />

                                <h3 className="text-lg font-semibold text-white">
                                    Telefone
                                </h3>

                                <p className="text-sm text-gray-300">
                                    {contactLocationData.contacts.contato.whatsapp}
                                </p>

                                <p className="text-xs text-gray-400">
                                    WhatsApp disponível para agendamentos
                                </p>
                            </div>

                            <button className="mt-auto text-sm text-[#F28705] hover:underline w-fit">
                                Ligar agora →
                            </button>
                        </div>
                    </CardStandard>


                    <CardStandard>
                        <div className="flex flex-col h-full p-3 text-left">
                            <div className="flex flex-col gap-6">
                                <img src="/imgs/relgio.png" alt="" className="w-10" />

                                <h3 className="text-lg font-semibold text-white">
                                    Horário
                                </h3>

                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Seg - Sex:</span>
                                    <span className="text-white">{contactLocationData.contacts.openingHours.weekdays}</span>
                                </div>

                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Sábado:</span>
                                    <span className="text-white">{contactLocationData.contacts.openingHours.weekends}</span>
                                </div>

                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Domingo:</span>
                                    <span className="text-white">Fechado</span>
                                </div>
                            </div>
                        </div>
                    </CardStandard>
                </div>


                <div className=" max-w-4xl bg-gradient-to-r from-[#F28705] to-[#CD5E01] rounded-2xl p-12 flex flex-col items-center text-center gap-6">
                    <img
                        src="/imgs/calendario.png"
                        alt="Calendário"
                        className="w-12 h-12"
                    />

                    <h3 className="text-2xl font-bold text-white">
                        Pronto para transformar seu estilo?
                    </h3>

                    <p className="text-sm text-white/90 max-w-xl">
                        Agende seu horário agora mesmo pelo WhatsApp e garanta o melhor
                        atendimento. Nossa agenda costuma lotar rapidamente!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button text="Agendar pelo WhatsApp" color="branco" />
                        <Button text="Enviar e-mail" color="branco" />
                    </div>
                </div>

                <div className="text-gray-400 text-sm">
                    mais de 5.000 clientes satisfeitos! Avaliaçao média de 4.8 ★ no Google
                </div>
            </div>
        </section >
    )
}
