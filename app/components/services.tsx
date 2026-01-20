// compoentte referente a sessao de serviços

import { servicesDataType } from "../types/servicesDataType";
import { Button } from "./button"
import { CardStandard } from "./cardStandard";

type Props = {
    servicesData: servicesDataType;
};

export const Services = ({ servicesData }: Props) => {
    return (
        <section className="w-full bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

               <div className="text-center max-w-2xl">
                    <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 mb-10 text-lg border border-solid border-[#F28705] font-semibold text-[#F28705]">
                        Nossos serviços
                    </span>

                    <h2 className="text-4xl font-bold text-white mb-4">
                        Serviços que <span className="text-[#F28705]">transformam</span>
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Oferecemos uma gama completa de serviços para cuidar do seu visual
                        com máxima qualidade e atenção aos detalhes.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {servicesData.servicesList.map((service) =>
                        
                        service.mostPopular ? (    
                                <div key={service.id} className="border border-solid border-[#F28705]  bg-[#171717] p-5 rounded-lg shadow-md flex flex-col justify-between h-full w-full">

                                    <div className="relative">
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#F28705] text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Mais Popular
                                        </div>
                                    </div>

                                    <div>
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#F28705]/10 rounded-xl mb-6">
                                            <img src="/imgs/tesoura.png" alt="icone" className="w-full h-full" />
                                        </div>

                                        <h4 className="text-white text-lg font-semibold mb-3">
                                            {service.title}
                                        </h4>

                                        <p className="text-gray-400 text-sm mb-6">
                                            {service.text}
                                        </p>

                                        <ul className="flex flex-col gap-1 text-sm mb-6">
                                            {service.beneficios.map((benefit, index) => (
                                                <li key={index} className="text-gray-400 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-[#F28705] rounded-full" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-[#2A2A2A] flex flex-col gap-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">{service.duration} min</span>
                                            <span className="text-[#F28705] font-semibold">
                                                R$ {service.price}
                                            </span>
                                        </div>

                                        <Button color="laranja" text="Agendar" />
                                    </div>
                                </div>
                            
                        ) : (
                            <CardStandard key={service.id}>
                                <div className="flex flex-col justify-between h-full w-full">

                                    <div>
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#F28705]/10 rounded-xl mb-6">
                                            <img src="/imgs/tesoura.png" alt="icone" className="w-full h-full" />
                                        </div>

                                        <h4 className="text-white text-lg font-semibold mb-3">
                                            {service.title}
                                        </h4>

                                        <p className="text-gray-400 text-sm mb-6">
                                            {service.text}
                                        </p>

                                        <ul className="flex flex-col gap-1 text-sm mb-6">
                                            {service.beneficios.map((benefit, index) => (
                                                <li key={index} className="text-gray-400 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-[#F28705] rounded-full" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-[#2A2A2A] flex flex-col gap-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">{service.duration} min</span>
                                            <span className="text-[#F28705] font-semibold">
                                                R$ {service.price}
                                            </span>
                                        </div>

                                        <Button color="cinza" text="Agendar" />
                                    </div>
                                </div>
                            </CardStandard>
                        )
                    )}
                </div>


                <div className="text-center text-sm text-gray-400 mt-6">
                    Não encontrou o que procura? Entre em contato e faremos um atendimento personalizado.
                    <div className="mt-4">
                        <Button color="branco" text="Fale conosco" />
                    </div>
                </div>

            </div>
        </section >
    )
}