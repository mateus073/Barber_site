'use client'

import { useContext, useState } from "react"
import { CtxAppointment } from "../contexts/appointmentCtx"
import { ConfirmModal } from "../components/modalFinish"


type Props = {
    onNavigate: (screen: 'home' | 'selectAppointmentDate' | 'confirmAppointment') => void
}

// componente de finalizar o agendamento
export const ConfirmAppointment = ({onNavigate}: Props) => {

    const appointmentCtx = useContext(CtxAppointment)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [showModal, setShowModal] = useState(false)

    
    if (!appointmentCtx) {
        console.log('erro no uso do ctx em finishScheduling')
        return null
    }


    const handleConfirm = () => {
        const trimmedName = name.trim()
        const trimmedPhone = phone.trim()
    
        // Verifica campos vazios
        if (!trimmedName || !trimmedPhone) {
            alert('Preencha todos os campos.')
            return
        }
    
        // Nome mínimo 3 caracteres
        if (trimmedName.length < 3) {
            alert('Nome deve ter pelo menos 3 caracteres.')
            return
        }
    
        // Remove tudo que não for número
        const onlyNumbersPhone = trimmedPhone.replace(/\D/g, '')
    
        // Validação simples de telefone brasileiro (10 ou 11 dígitos)
        if (onlyNumbersPhone.length < 10 || onlyNumbersPhone.length > 11) {
            alert('Telefone inválido.')
            return
        }
    
        appointmentCtx?.fourthSetAppointment(trimmedName, onlyNumbersPhone)
        setShowModal(true)
    }


    return (
        
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 gap-12 ">

            {/* modal que exibe os dados do agendamento e pede a confirmacao do usuario */}
            <ConfirmModal name={name} phone={phone} shoewModal={showModal} setShowModal={setShowModal} />

            {/* HEADER */}
            <div className="text-center max-w-2xl mb-10">
                <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 mb-6 text-lg border border-[#F28705] font-semibold text-[#F28705]">
                    Finalização do Agendamento
                </span>

                <h2 className="text-4xl font-bold text-white">
                    Finalize Seu <span className="text-[#F28705]">Agendamento</span>
                </h2>
            </div>

            {/* FORM */}
            <div className="flex flex-col gap-4 items-center">

                <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-80 p-3 rounded-md bg-[#171717] text-white border border-white/10"
                />

                <input
                    type="tel"
                    placeholder="Seu telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-80 p-3 rounded-md bg-[#171717] text-white border border-white/10"
                />

                <button
                    onClick={handleConfirm}
                    disabled={!name || !phone}
                    className={`
                        px-6 py-3 rounded-md font-semibold transition
                        ${name && phone
                            ? "bg-[#F28705] text-white hover:bg-[#d97706]"
                            : "bg-gray-700 text-gray-400 cursor-not-allowed"}
                    `}
                >
                    Confirmar
                </button>
            </div>

        </div>
    )
}
