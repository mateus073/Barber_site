
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
    firstSetAppointment: (service: string, price: number) => void
    secondSetAppointment: (id: number, date: string, dayname: string) => void
    thirdSetAppointment: (hour: string) => void
    fourthSetAppointment: (nameCustomer: string, contact: string) => void
}



export const CtxAppointment = createContext<AppointmentCtxData | null>(null)



export const AppointmentProvider = ({ children }: { children: ReactNode }) => {

    const [appointment, setAppointment] = useState<AppointmentType | null>(null)

    // primeira funçao, INCIALIZA o obj do meu context com os dados pegos no comp de serviçoes em home 
    const firstSetAppointment = (service: string, price: number) => {
        
        setAppointment({
            id: 0,
            date: '',
            dayname: '',
            hour: {
                hour: '',
                nameCustomer: '',
                service: service,
                value: price,
                contact: ''
            }
        })
    }

    // segunda funçao, passa pro ctx os dados pegos no comp de choseDay

    const secondSetAppointment = (id: number, date: string, dayname: string) => {
        if (!appointment) return null;

        setAppointment((newpAppointment) => {
            if (!newpAppointment) return null

            return {
                ...newpAppointment,
                id: id,
                date: date,
                dayname: dayname,
                hour: {
                    ...newpAppointment.hour
                }
            }
        }
        
        );
    }


    // terceira funçao, adiciona o horario escolhido no comp de choseTime
    const thirdSetAppointment = (hour: string) => {
        if (!appointment) return;

        // a func dentro do meu set e pra garantir que eu to pegando o estado mais atual do appointment (caso o clinete faça muitas alteraçoes rapidas)
        setAppointment((newpAppointment) => {
            if (!newpAppointment) return null;

            return {
                ...newpAppointment,
                hour: {
                    ...newpAppointment.hour,
                    hour: hour
                }
            }
        });
    }

    // quarta funçao, adiciona o nome e contato do cliente no comp de confirmation
    const fourthSetAppointment = (nameCustomer: string, contact: string) => {
        if (!appointment) return;

        setAppointment((newpAppointment) => {
            if (!newpAppointment) return null;

            return {
                ...newpAppointment,
                hour: {
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
                thirdSetAppointment,
                fourthSetAppointment
            }
        }>

            {children}
        </CtxAppointment.Provider>
    )
}