
import { WhoWeAreDataType} from "../types/whoWeAreDataType";


type Props = {
   whoWeAreData: WhoWeAreDataType;
};


export const WhoWeAre = ({ whoWeAreData }: Props) => {
    return (
        <section className="w-full bg-[#0A0A0A] p-10">
            <div className="max-w-7xl mx-auto bg-[#171717] rounded-2xl p-10">

                <div className="flex justify-center mb-8">
                    <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 text-lg border border-solid border-[#F28705] font-semibold text-[#F28705]">
                        Quem somos
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                    <div className="w-full lg:w-1/2 flex items-center">
                        <img
                            src="/imgs/sobreNois.jpg"
                            alt="imagem da aba sobre nós"
                            className="rounded-2xl object-cover w-full h-full min-h-[420px]"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 text-white">
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            {whoWeAreData.title}
                        </h2>

                        <p className="text-gray-400 mb-10 leading-relaxed">
                            {whoWeAreData.text}
                        </p>

                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {whoWeAreData.cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2A2A2A] "
                                >
                                    <img
                                        src={`${card.icon}`}
                                        alt=""
                                        className="w-8 h-8 mb-4"
                                    />
                                    <h3 className="font-semibold text-mg">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
