/*componente final do agendamento
  - pega nome e numero no modal 
  - acaba de preencher o context e exibe os dados 
  - aenvia os dados do agendamento e limpa o context 
  */
'use client'

import { useContext } from "react"
import { CtxAppointment } from "../contexts/appointmentCtx"
import { api } from "../axiosUrlBase/urlBaseAxios"
import { apiAppointmentType } from "../types/apiAppointmentType"
import { barberShopData } from "../mocks/mock"
import { ctxAppointmentType } from "../types/ctxAppointmentType"


type Props = {
  showModal: boolean
  setShowModal: (show: boolean) => void
  onNavigate: (screen: 'home' | 'selectAppointmentDate' | 'confirmAppointment') => void
}


export const ConfirmModal = ({showModal, setShowModal, onNavigate }: Props) => {  
  const appointmentCtx = useContext(CtxAppointment)

  if (!appointmentCtx || !appointmentCtx.appointment) {
    console.log('erro a usar ctx em modalFinish')
    return null
  }

  // envia dados do agendamento para api
   const SendAppointmentApi  = async () => {
    const appointmentData = appointmentCtx.appointment // seleciona so os dados do ctx
    console.log('dados presentes no meu context', appointmentData)

    try {
      const res = await api.get(`appointments/${appointmentData.id}`);
      console.log('resposta da api: ', res.data.appointmentHour);
      
      // monta array de horarios atualizado pronto pra patch
      const updateHour = buildUpdatedAppointmentHours(res.data.appointmentHour, appointmentData)
      console.log('dados atualizados do horario escolhido', updateHour)

      // atualiza o horario escolhido na api, enviando o array atualizado de horarios do dia escolhido, e mantendo os outros dados do agendamento inalterados
      const resPatch = await api.patch(`appointments/${appointmentData.id}`, {
        appointmentHour: updateHour
      })
     
      sendMsgAppointmentWhats(appointmentData) // envia mensagem de confirmação do agendamento para o whatsapp da barbearia
      
      appointmentCtx.clearData()
      setShowModal(false)
      onNavigate('home')
      console.log('resposta do patch', resPatch)
    } 
     catch (err) { 
      console.error('erro ao buscar os horarios do dia escolhido', err)
    }
  }


  // monta o array de horarios do dia escolhido, atualizando o horario escolhido com os dados do agendamento, e mantendo os outros horarios inalterados
  const buildUpdatedAppointmentHours = (respApi: apiAppointmentType[], appointmentDataCtx: ctxAppointmentType) => {
    const updateHour = respApi.map((h) => {
        if (h.hour === appointmentDataCtx.appointmentHour.hour) {
          return {
            nameCustomer: appointmentDataCtx.appointmentHour.nameCustomer,
            contact: appointmentDataCtx.appointmentHour.contact,
            service: appointmentDataCtx.appointmentHour.service,
            value: appointmentDataCtx.appointmentHour.value,
            hour: appointmentDataCtx.appointmentHour.hour
          }
        } else {
           return h 
          }
      })
      return updateHour
  }

  // envia mensagem de confirmação do agendamento para o whatsapp da barbearia, com os dados do agendamento
  const sendMsgAppointmentWhats = (appointmentData:ctxAppointmentType) => { 
    const phoneBarber = barberShopData.contacts.whatsapp
    const mensagem = `Olá, gostaria de confirmar meu agendamento para o dia ${appointmentData.date} às ${appointmentData.appointmentHour.hour}. Meu nome é ${appointmentData.appointmentHour.nameCustomer} e meu telefone é ${appointmentData.appointmentHour.contact}. O serviço escolhido foi ${appointmentData.appointmentHour.service} no valor de R$${appointmentData.appointmentHour.value}.00. Por favor, confirme meu agendamento. Obrigado!`
    const url = `https://wa.me/${phoneBarber}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }


  if (!showModal) return null

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

        <div className="mt-6 flex justify-between gap-4">
          <button
            onClick={() => setShowModal(false)}
            className="flex-1 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition"
          >
            Voltar
          </button>

          <button
            onClick={SendAppointmentApi}
            className="flex-1 py-3 rounded-md bg-[#F28705] hover:bg-[#d97706] transition font-semibold"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}