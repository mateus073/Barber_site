import { useContext, useEffect, useState } from "react"
import { api } from "../axiosUrlBase/urlBaseAxios"
import { AppoimentsType, DayShedule, HourlyType } from "../types/appointmentsType"
import { ModalTime } from "../components/modalChoseTime"
import { Button } from "../components/button"
import { CtxAppointment } from "../contexts/appointmentCtx"
import { Footer } from "../components/footer"

type Props = {
  onNavigate: (screen: 'home' | 'selectAppointmentDate' | 'confirmAppointment') => void
}

export const SelectAppointmentDate = ({ onNavigate }: Props) => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [choseDay, setChoseDay] = useState<HourlyType[]>([])
  const [appointments, setAppointments] = useState<AppoimentsType>([])

  const appointmentCtx = useContext(CtxAppointment)

// busca os dados de agendamento disponiveis na api e salva no estado
  useEffect(() => {
    api.get('appointments')
      .then((res) => {
        setAppointments(res.data)
      })
      .catch((err) => {
        console.error('erro ao buscar agenda em choseDay', err)
      })
  }, [])


// abre modal com os horarios disponiveis do dia escolhido, e salva no ctx os dados do dia escolhido
  const hendleModal = (day: DayShedule) => {
    if (!appointmentCtx) {
      console.log('erro no uso do ctx em choseDay')
      return
    }

    appointmentCtx.dispatch({
      type: 'setDay', 
      payload: {
        id: day.id,
        date: day.date,
        dayname: day.dayname
      }
    })

    setChoseDay(day.appointmentHour)
    setShowModal(true)
  }


//   fecha o modal, limpa os dados do ctx e volta para home
  const onNavigateHome = () => {
    if (!appointmentCtx) {
      console.log('erro no uso do ctx em choseDay')
      return
    }

    appointmentCtx.dispatch({
      type: 'clear'
    })
    
    setShowModal(false)
    onNavigate('home')
  }


  return (
    <div className="min-h-screen w-full flex flex-col bg-[#0b0b0b]">
      <div className="flex-1 flex flex-col items-center px-6 pt-10 pb-13 gap-16">

        {/* MODAL que exibe os horários disponíveis do dia escolhido */}
        <ModalTime
          hourly={choseDay || []}
          showModal={showModal}
          setShowModal={setShowModal}
          onNavigate={onNavigate}
        />

        <header className="w-full max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <img
                src="/imgs/home.png"
                alt="Home"
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Agende seu horário para
            </h2>

            <p className="text-xl md:text-2xl font-semibold text-[#F28705]">
              {appointmentCtx?.appointment?.appointmentHour.service}
            </p>
          </div>
        </header>

       
        <main className="w-full flex flex-col items-center">
          <section className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center">

            {appointments?.map((day) => (
              <div
                key={day.id}
                onClick={() => hendleModal(day)}
                className="group relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] to-[#0f0f0f] px-5 py-6 text-left shadow-md transition-all duration-300 hover:border-[#F28705] hover:shadow-xl hover:-translate-y-1 active:scale-95 cursor-pointer"
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
          </section>
        </main>
      </div>

      <Footer />

    </div>
  )
}