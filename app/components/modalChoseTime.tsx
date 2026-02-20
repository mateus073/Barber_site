'use client'

import { useContext, useEffect, useState } from "react";
import { HourlyType } from "../types/appointmentsType";
import { CtxAppointment } from "../contexts/appointmentCtx";


type Props = {
  hourly: HourlyType[];
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  onNavigate: (screen: 'selectAppointmentDate' | 'confirmAppointment') => void
}


export const ModalTime = ({ hourly, showModal, setShowModal, onNavigate }: Props) => {

  const [selectedHour, setSelectedHour] = useState<string | null>(null)

  const ctx = useContext(CtxAppointment)

  // limpa o horario selecionado quando o modal for fechado
  useEffect(() => {
    if (!showModal) return
    setSelectedHour(null)
  }, [showModal])

  // fucao de efeito pra confima agendamento
  const handleSelectHour = () => {
    if(selectedHour === null || !ctx) { 
      alert('erro em selecionar horario ou ctx.')
      return
    }
    ctx?.thirdSetAppointment(selectedHour)
    setShowModal(false)
    onNavigate('confirmAppointment')
  }


  // funcao pra fechar modal e exibir tela de dias
  const handleScreen = (screen: 'selectAppointmentDate' | 'confirmAppointment') => {
    setShowModal(false)
    onNavigate(screen)
  }


  if (!showModal) return null;
  
  if (!ctx) {
    console.log('erro no uso do ctx em modalTime')
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />


      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-[#0B0B0B] p-6 m-5 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Escolha um horario disponivel</h2>
          <button
            onClick={() => handleScreen('selectAppointmentDate')}
          >
            <img src="/imgs/btn-X.png" alt="" className="w-8 h-8" />
          </button>
        </div>

        {/* Conteúdo (loop dos horários) */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {hourly.map((time) => {
            const isReserved = Boolean(time.nameCustomer) // Verifica se o horário está reservado

            return (
              <button
                key={time.hour}
                disabled={isReserved}
                onClick={() => !isReserved && setSelectedHour(time.hour)}
                className={`
                  w-full rounded-xl px-4 py-6 text-sm font-medium transition
                  ${isReserved
                    ? "bg-red-600 text-white cursor-not-allowed"
                    : selectedHour === time.hour
                      ? "bg-[#F28705] text-white"
                      : "border border-white/10 bg-[#171717] text-white hover:border-[#F28705] hover:bg-[#F28705] active:scale-95"
                  }
                `}>
                {isReserved ? "Reservado" : time.hour}
              </button>
            )
          })}
        </div>

        {/* Footer (opcional) */}
        <div className="mt-8 flex justify-center w-full">
          <button
            disabled={!selectedHour}
            onClick={handleSelectHour}
            className={` inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200
            ${selectedHour
                ? 'bg-[#F28705] text-white hover:bg-[#d97706]'
                : 'bg-[#1E1E1E] text-gray-500 cursor-not-allowed'
              }
          `}
          >
            Confirmar Horário
          </button>
        </div>
      </div>
    </div>
  );
}
