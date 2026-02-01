
import { ReactNode, createContext, useState } from "react"


type HourType = {
    hour: string
    nameCustomer: string
    service: string
    value: number
    contact: string
}

type AppointmentType = {
    id: number
    date: string
    dayname: string
    hour: HourType
}

type AppointmentCtxData = {
    appointment: AppointmentType | null
    firstSetAppointment: (service: string, value: number, id: number, date: string, dayname: string) => void
    secondSetAppointment: (hour: string) => void
    thirdSetAppointment: (nameCustomer: string, contact: string) => void
}





export const CtxAppointment = createContext<AppointmentCtxData | null>(null)




export const AppointmentProvider = ({ children }: { children: ReactNode }) => {

    const [appointment, setAppointment] = useState<AppointmentType | null>(null)


    // primeira funçao, INICIALIZA o obj do meu context com os dados pegos no comp de choseDay
    const firstSetAppointment = (service: string, value: number, id: number, date: string, dayname: string) => {
        setAppointment({
            id: id,
            date: date,
            dayname: dayname,
            hour: {
                hour: '',
                nameCustomer: '',
                service: service,
                value: value,
                contact: ''
            }
        });
    }


    // segunda funçao, adiciona o horario escolhido no comp de choseTime
    const secondSetAppointment = (hour: string) => {
        if (!appointment) return;

        // a func dentro do meu set e pra garantir que eu to pegando o estado mais atual do appointment (caso o clinete faça muitas alteraçoes rapidas)
        setAppointment((newpAppointment) => {
            if (!newpAppointment) return null;

            return {
                ...newpAppointment,
                hours: {
                    ...newpAppointment.hour,
                    hour: hour
                }
            }
        });
    }

    // terceira funçao, adiciona o nome e contato do cliente no comp de confirmation
    const thirdSetAppointment = (nameCustomer: string, contact: string) => {
        if (!appointment) return;

        setAppointment((newpAppointment) => {            
            if (!newpAppointment) return null;

            return {
                ...newpAppointment,
                hours: {
                    ...newpAppointment.hour,
                    nameCustomer: nameCustomer,
                    contact: contact
                }
            }
        })
    }


    return (
        <CtxAppointment.Provider value={
            {
                appointment: appointment,
                firstSetAppointment,
                secondSetAppointment,
                thirdSetAppointment
            }
        }>

            {children}
        </CtxAppointment.Provider>
    )
}