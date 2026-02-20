import { useContext, useEffect, useState } from "react"
import { api } from "../axiosUrlBase/urlBaseAxios"
import { AppoimentsType, DayShedule, HourlyType } from "../types/appointmentsType"
import { ModalTime } from "../components/modalChoseTime"
import { Button } from "../components/button"
import { CtxAppointment } from "../contexts/appointmentCtx"


type Props = {
    onNavigate: (screen: 'home' | 'selectAppointmentDate' | 'confirmAppointment') => void
}



export const SelectAppointmentDate = ({ onNavigate }: Props) => {
    // state do modal de horarios
    const [showModal, setShowModal] = useState<boolean>(false)
    const [choseDay, setChoseDay] = useState<HourlyType[]>([])

    // state do appointment recebido da api
    const [appointments, setAppointments] = useState<AppoimentsType>([])

    // ctx do appointment
    const appointmentCtx = useContext(CtxAppointment)


    useEffect(() => {
        api.get('appointments').then((res) => {
            setAppointments(res.data)
            // console.log(res.data)
        })
            .catch((err) => {
                console.error('erro ao bucar agenda em choseDay', err)
            })
    }, [])


    // funcao que abre o modal e passa os horarios disponiveis do dia escolhido, e tambem seta os dados do dia escolhido no ctx
    const hendleModal = (day: DayShedule) => {
        if (!appointmentCtx) {
            console.log('erro no uso do ctx em choseDay')
            return
        }

        appointmentCtx?.secondSetAppointment(day.id, day.date, day.dayname)

        setChoseDay(day.hours)
        setShowModal(true)
    }


    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 gap-12">

            {/* MODAL */}
            <ModalTime
                hourly={choseDay || []}
                showModal={showModal}
                setShowModal={setShowModal}
                onNavigate={onNavigate}
            />

            {/* HEADER */}
            <div className="text-center max-w-2xl mb-10">
                <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 mb-6 text-lg border border-[#F28705] font-semibold text-[#F28705]">
                    Agendamento de Horário
                </span>

                <h2 className="text-4xl font-bold text-white">
                    Agende Seu Horário para: <span className="text-[#F28705]">{appointmentCtx?.appointment?.hour.service}</span>
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
                {appointments?.map((day) => (
                    <div
                        onClick={() => hendleModal(day)}
                        key={day.id}
                        className="group relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] to-[#0f0f0f] px-5 py-6 text-left shadow-md transition-all duration-300 hover:border-[#F28705] hover:shadow-xl hover:-translate-y-1 active:scale-95"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-[#F28705] opacity-0 transition group-hover:opacity-100" />

                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                {day.date}
                            </span>

                            <span className="text-lg font-semibold text-white">
                                {day.dayname}
                            </span>

                            <Button color="laranja" text="Escolher Horário" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}