/*componente final do agendamento
  - pega nome e numero no modal 
  - acaba de preencher o context e exibe os dados 
  - aenvia os dados do agendamento e limpa o context 
  */
'use client'

import { useContext } from "react"
import { CtxAppointment } from "../contexts/appointmentCtx"
import { HourlyType } from "../types/appointmentsType"
import { api } from "../axiosUrlBase/urlBaseAxios"


type Props = {
  shoewModal: boolean
  setShowModal: (show: boolean) => void
}


export const ConfirmModal = ({shoewModal, setShowModal }: Props) => {  
  const appointmentCtx = useContext(CtxAppointment)

  if (!appointmentCtx || !appointmentCtx.appointment) {
    console.log('erro a usar ctx em modalFinish')
    return null
  }

  /* acha o horario escolhido no ctx, 
  pega os dados do agendamento, 
  e envia pra api,
   depois limpa o ctx e fecha o modal
  */
   const handleSendAppointment  = async () => {
    if(!appointmentCtx.appointment) {
      console.log('erro a usar ctx em modalFinish')
      return
    }
    console.log('dados presentes no meu context', appointmentCtx.appointment)

    try {
      const res = await api.get(`appointments/${appointmentCtx.appointment.id}`);
      console.log('resposta da api: ', res.data.appointmentHour);
      
      const updateHour = res.data.appointmentHour.map((h: HourlyType) => {
        if (h.hour === appointmentCtx.appointment?.appointmentHour.hour) {
          return {
            nameCustomer: appointmentCtx.appointment.appointmentHour.nameCustomer,
            contact: appointmentCtx.appointment.appointmentHour.contact,
            service: appointmentCtx.appointment.appointmentHour.service,
            value: appointmentCtx.appointment.appointmentHour.value,
            hour: appointmentCtx.appointment.appointmentHour.hour
          }
        } else {
           return h 
          }
      })

      const resPatch = await api.patch(`appointments/${appointmentCtx.appointment.id}`, {
        appointmentHour: updateHour
      })

      console.log('resposta do patch', resPatch)

    } 
    catch (err) { 
      console.error('erro ao buscar os horarios do dia escolhido', err)
    }
      // appointmentCtx.clearAppointment()
      setShowModal(false)
  }

  if (!shoewModal) return null

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
              <span>{appointmentCtx.appointment?.appointmentHour.service}</span>
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Valor:</span>
            <span>R$ {appointmentCtx.appointment?.appointmentHour.value}.00</span>

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
            <span>{appointmentCtx.appointment?.appointmentHour.hour}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Nome:</span>
            <span>{appointmentCtx.appointment.appointmentHour.nameCustomer}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Telefone:</span>
            <span>{appointmentCtx.appointment.appointmentHour.contact}</span>
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
            onClick={handleSendAppointment }
            className="flex-1 py-3 rounded-md bg-[#F28705] hover:bg-[#d97706] transition font-semibold"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}