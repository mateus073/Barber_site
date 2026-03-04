
import { ReactNode, createContext, useReducer, useState } from "react"
import { AppointmentActionsType, appointmentReducer } from "../reducer/reducer"
import { ctxAppointmentType } from "../types/ctxAppointmentType"



// objeto inicial do meu ctx, ou seja, o estado inicial do meu ctx, que é um obj vazio, sem dados, e que tem a mesma estrutura do meu AppointmentDayType
const initialAppointment: ctxAppointmentType = {
    id: 0,
    date: '',
    dayname: '',
    appointmentHour: {
        hour: '',
        nameCustomer: '',
        service: '',
        value: 0,
        contact: ''
    }
}



type AppointmentCtxData = {
    appointment: ctxAppointmentType,
    addDataDay: (id: number, date: string, dayname: string) => void,
    addDataHour: (hour: string) => void,
    addDataNameContact: (nameCustomer: string, contact: string) => void,
    addDataServicePrice: (service: string, price: number) => void,
    clearData: () => void,
}



export const CtxAppointment = createContext<AppointmentCtxData | null>(null)


export const AppointmentProvider = ({ children }: { children: ReactNode }) => {

    const [appointment, dispatch] = useReducer(appointmentReducer , initialAppointment)

    const addDataServicePrice = (service: string, price: number) => {
        dispatch({
            type: 'setServicePrice',
            payload: {
                service: service,
                price: price
            }
        })
    }


    const addDataDay = (id: number, date: string, dayname: string) => {
        dispatch({
            type: 'setDay',
            payload: {
                id: id,
                date: date,
                dayname: dayname
            }
        })
    }

    const addDataHour = (hour: string) => {
        dispatch({
            type: 'setHour',
            payload: {
                hour: hour
            }
        })
    }

    const addDataNameContact = (nameCustomer: string, contact: string) => {
        dispatch({
            type: 'setNameContact',
            payload: {
                nameCustomer: nameCustomer,
                contact: contact
            }
        })
    }

    const clearData = () => {
        dispatch({
            type: 'clear'
        })
    }


    return (
        <CtxAppointment.Provider value={
            {
                appointment: appointment,
                addDataDay,
                addDataHour,
                addDataNameContact,
                addDataServicePrice,
                clearData
            }
        }>
            {children}
        </CtxAppointment.Provider>
    )
}