'use client'

import { useContext } from "react"
import { CtxAppointment } from "../contexts/appointmentCtx"

type Props = {
  name: string
  phone: string
  shoewModal: boolean
  setShowModal: (show: boolean) => void
}

export const ConfirmModal = ({ name, phone, shoewModal,setShowModal }: Props) => {

 const appointmentCtx = useContext(CtxAppointment)

  if (!appointmentCtx){
        console.log('erro a usar ctx em modalFinish') 
        return null
  } 

  const SendAppoiment = () => {
    // funçao que envia os dados do appointment para a api, usando o obj do ctx, que tem todos os dados do agendamento, inclusive os dados do cliente, e depois fecha o modal
    console.log(appointmentCtx.appointment)
    setShowModal(false)
  }

  if(!shoewModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setShowModal(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[#0B0B0B] p-6 shadow-2xl text-white">

        <h3 className="text-xl font-bold mb-6 text-center">
          Confirme seu Agendamento
        </h3>

        {/* Dados do agendamento */}
        <div className="space-y-3 text-sm border border-white/10 rounded-xl p-4 bg-[#171717]">

          <div className="flex justify-between">
            <span className="text-gray-400">Serviço:</span>
            <span className="font-medium text-[#F28705]">
              <span>{appointmentCtx.appointment?.hour.service}</span>
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Valor:</span>
            <span>R$ {appointmentCtx.appointment?.hour.value}.00</span>
            
          </div>


          <div className="flex justify-between">
            <span className="text-gray-400">Data:</span>
            <span>{appointmentCtx.appointment?.date}</span>
            
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Dia:</span>
            <span>{appointmentCtx.appointment?.dayname}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Horário:</span>
            <span>{appointmentCtx.appointment?.hour.hour}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Nome:</span>
            <span>{name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Telefone:</span>
            <span>{phone}</span>
          </div>

        </div>

        {/* Botões */}
        <div className="mt-6 flex justify-between gap-4">

          <button
            onClick={() => setShowModal(false)}
            className="flex-1 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition"
          >
            Voltar
          </button>

          <button
          onClick={SendAppoiment}        
            className="flex-1 py-3 rounded-md bg-[#F28705] hover:bg-[#d97706] transition font-semibold"
          >
            Enviar
          </button>

        </div>

      </div>
    </div>
  )
}
