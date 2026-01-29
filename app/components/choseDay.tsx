// compoente que exibe os dias disponiveis pra agendamento

import { useEffect, useState } from "react"
import { api } from "../axiosUrlBase/urlBaseAxios"
import { AppoimentsType, HourlyType } from "../types/appointmentsType"
import { ModalTime } from "./choseTime"

export const ChoseDay = () => {

    const [showModal, setShowModal] = useState(false)
    const [choseDay, setChoseDay] = useState<null | HourlyType[]>(null)

    const [appointments, setAppointments] = useState<AppoimentsType>([])

    useEffect(() => {
        api.get('appointments').then((res) => {
            setAppointments(res.data)
            console.log(res.data)
        })
    }, [])


    // funcao que abre o modal e passa o dia escolhido
    const hendleModal = (day: HourlyType[]) => {
        setChoseDay(day)
        setShowModal(!showModal)

        console.log(day)
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center px-4">
          
          {/* MODAL */}
          <ModalTime
            hourly={choseDay || []}
            showModal={showModal}
            handleShowModal={() => setShowModal(!showModal)}
          />
      
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
              <button
                onClick={() => hendleModal(days.hours)}
                key={days.id}
                className="
                  w-full
                  max-w-[260px]
                  rounded-xl
                  border border-white/10
                  bg-[#171717]
                  px-4
                  py-6
                  text-base
                  sm:text-lg
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:border-[#F28705]
                  hover:bg-[#F28705]
                  active:scale-95
                "
              >
                {days.dayname}
              </button>
            ))}
          </div>
        </div>
      )
      
}