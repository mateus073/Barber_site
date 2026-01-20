import { ReviewsDataType } from "../types/reviewsDataType"
import { CardStandard } from "./cardStandard"


type Props = {
    reviewData: ReviewsDataType
}


export const Reviews = ({ reviewData }: Props) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/imgs/bg-avaliacoes.jpg')" }}
            />

            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />


            <div className="relative z-10 w-full max-w-6xl px-6 py-16 flex flex-col items-center justify-center text-center text-white gap-6">

                <div className="text-center max-w-2xl mb-16">
                    <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 mb-10 text-lg border border-solid border-[#F28705] font-semibold text-[#F28705]">
                        Depoimentos
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        O que nossos clientes <span className="text-[#F28705]">dizem</span>
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        A satisfação dos nossos clientes é nossa maior recompensa.
                        Veja o que eles têm a dizer sobre nossos serviços.
                    </p>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {reviewData.reviews.map((review, index) => (
                        <CardStandard key={index}>
                            <div className="flex flex-col h-full gap-5 p-1 text-left">

                                <img src="/imgs/aspa.png" alt="" className="w-6 opacity-80" />

                                <div className="text-[#F28705] text-sm">
                                    {"⭐".repeat(review.rating)}
                                </div>

                                <p className="text-xs text-gray-300 leading-relaxed flex-1">
                                    “{review.comment}”
                                </p>

                                <div className="flex items-center gap-4 pt-3 mt-2 border-t border-gray-700">
                                    <img
                                        src={review.photo}
                                        alt={review.clientName}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />

                                    <div>
                                        <h4 className="text-sm font-semibold text-white">
                                            {review.clientName}
                                        </h4>
                                        <span className="text-xs text-gray-400">
                                            {review.profession}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </CardStandard>
                    ))}
                </div>



                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

                    <div>
                        <span className="block text-2xl font-bold text-[#F28705]">
                            {reviewData.satisfiedCustomers}+
                        </span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">
                            Clientes satisfeitos
                        </span>
                    </div>

                    <div>
                        <span className="block text-2xl font-bold text-[#F28705]">
                            {reviewData.averageRating}★
                        </span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">
                            Avaliação média
                        </span>
                    </div>

                    <div>
                        <span className="block text-2xl font-bold text-[#F28705]">
                            {reviewData.customersReturning}%
                        </span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">
                            Clientes retornam
                        </span>
                    </div>

                    <div>
                        <span className="block text-2xl font-bold text-[#F28705]">
                            {reviewData.ageBarber}
                        </span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">
                            Anos de tradição
                        </span>
                    </div>

                </div>

            </div>
        </section>

    )
}