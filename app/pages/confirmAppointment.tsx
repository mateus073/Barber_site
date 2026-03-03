'use client'

import { useContext, useState } from "react"
import { CtxAppointment } from "../contexts/appointmentCtx"
import { ConfirmModal } from "../components/modalFinish"
import { Footer } from "../components/footer"
import { on } from "node:events"

type Props = {
    onNavigate: (screen: 'home' | 'selectAppointmentDate' | 'confirmAppointment') => void
}

export const ConfirmAppointment = ({ onNavigate }: Props) => {

    const appointmentCtx = useContext(CtxAppointment)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [showModal, setShowModal] = useState(false)

    if (!appointmentCtx || !appointmentCtx.appointment) {
        console.log('erro no uso do ctx em finishScheduling')
        return null
    }

    const handleConfirm = () => {
        const trimmedName = name.trim()
        const trimmedPhone = phone.trim()

        if (!trimmedName || !trimmedPhone) {
            alert('Preencha todos os campos.')
            return
        }

        if (trimmedName.length < 3) {
            alert('Nome deve ter pelo menos 3 caracteres.')
            return
        }

        const onlyNumbersPhone = trimmedPhone.replace(/\D/g, '')

        if (onlyNumbersPhone.length < 10 || onlyNumbersPhone.length > 11) {
            alert('Telefone inválido.')
            return
        }

        appointmentCtx.dispatch({
            type: 'setNameContact',
            payload: {
                nameCustomer: trimmedName,
                contact: onlyNumbersPhone
            }
        })
        setShowModal(true)
    }



    const onNavigateHome = () => {
        appointmentCtx.dispatch({
            type: 'clear'
        })

        setShowModal(false)
        onNavigate('home')
    }

    return (
        <div className="min-h-screen w-full flex flex-col bg-[#0b0b0b]">

            {/* Modal que exibe todos os dados do agendamento e envia*/}
            <ConfirmModal
                shoewModal={showModal}
                setShowModal={setShowModal}
            />

            <div className="flex-1 flex flex-col items-center px-4 pt-16 gap-12">
                <header className="w-full max-w-6xl mx-auto flex flex-col gap-6">
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Finalize seu agendamento
                        </h2>
                    </div>
                </header>


                <main className="flex flex-col items-center">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleConfirm()
                        }}
                        className="flex flex-col gap-4 items-center"
                    >
                        <input
                            type="text"
                            placeholder="Seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-80 p-3 rounded-md bg-[#171717] text-white border border-white/10 outline-none focus:border-[#F28705]"
                        />
                        <input
                            type="tel"
                            placeholder="Seu telefone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-80 p-3 rounded-md bg-[#171717] text-white border border-white/10 outline-none focus:border-[#F28705]"
                        />
                        <button
                            type="submit"
                            disabled={!name || !phone}
                            className={`w-80 px-6 py-3 rounded-md font-semibold transition-all duration-200
                                ${name && phone
                                    ? "bg-[#F28705] text-white hover:bg-[#d97706]"
                                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                }
                            `}>
                            Confirmar
                        </button>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    )
}