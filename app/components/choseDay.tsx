// compoente que exibe os dias disponiveis pra agendamento

import { useContext, useEffect, useState } from "react"
import { api } from "../axiosUrlBase/urlBaseAxios"
import { AppoimentsType, HourlyType } from "../types/appointmentsType"
import { ModalTime } from "./choseTime"
import { Button } from "./button"
import { CtxAppointment } from "../contexts/appointmentCtx"

export const ChoseDay = () => {

    // state do modal de horarios
    const [showModal, setShowModal] = useState(false)
    const [choseDay, setChoseDay] = useState<null | HourlyType[]>(null)

    // state do appointment recebido da api
    const [appointments, setAppointments] = useState<AppoimentsType>([])

    // ctx do appointment
    const appointmentCtx = useContext(CtxAppointment)



    useEffect(() => {
        api.get('appointments').then((res) => {
            setAppointments(res.data)
            console.log(res.data)
        })
    }, [])


    // funcao que abre o modal e passa o dia escolhido
    const hendleModal = (day: HourlyType[]) => {
        if(day.length === 0) { return console.log('erro ao passar horários pro modal de horarios.')}
        
        setChoseDay(day)
        setShowModal(!showModal)

        console.log(`meu context: ${appointmentCtx}`)
        console.log(`dia escolhido: ${day}`)
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 gap-12">

            {/* MODAL */}
            <ModalTime
                hourly={choseDay || []}
                showModal={showModal}
                handleShowModal={() => setShowModal(!showModal)}
            />


            {/* HEADER */}
            <div className="text-center max-w-2xl mb-10">
                <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 mb-6 text-lg border border-[#F28705] font-semibold text-[#F28705]">
                    Agendamento de Horário
                </span>

                <h2 className="text-4xl font-bold text-white">
                    Agende Seu <span className="text-[#F28705]">Horário</span>
                </h2>
            </div>

            {/* GRID DE DIAS */}
            <div
                className="
              grid
              w-full
              max-w-7xl
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              gap-6 sm:gap-8
              justify-items-center
              text-center
            "
            >
                {appointments?.map((days) => (
                    <div
                        onClick={() => hendleModal(days.hours)}
                        key={days.id}
                        className="
                  group
                  relative
                  w-full
                  max-w-[280px]
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-gradient-to-br from-[#171717] to-[#0f0f0f]
                  px-5
                  py-6
                  text-left
                  shadow-md
                  transition-all
                  duration-300
                  hover:border-[#F28705]
                  hover:shadow-xl
                  hover:-translate-y-1
                  active:scale-95
                ">

                        <div className="absolute inset-x-0 top-0 h-1 bg-[#F28705] opacity-0 transition group-hover:opacity-100" />

                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                {days.date}
                            </span>

                            <span className="text-lg font-semibold text-white">
                                {days.dayname}
                            </span>

                            <Button color="laranja" text="Escolher Horário" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )


}