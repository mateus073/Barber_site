import { ctxAppointmentType } from "../types/ctxAppointmentType"

type setServicePriceType = {
    type: 'setServicePrice',
    payload: {
        service: string,
        price: number
    }
}

type setDayType = {
    type: 'setDay',
    payload: {
        id: number,
        date: string,
        dayname: string
    }
}

type setHourType = {
    type: 'setHour',
    payload: {
        hour: string
    }
}

type setNameContactType = {
    type: 'setNameContact',
    payload: {
        nameCustomer: string,
        contact: string
    }
}

type clearType = {
    type: 'clear'
}

export type AppointmentActionsType = setServicePriceType | setDayType | setHourType | setNameContactType | clearType




// 


export const appointmentReducer = (appointmentData: ctxAppointmentType, action: AppointmentActionsType) => {
    switch (action.type) {
        case 'setServicePrice':
            return {
                ...appointmentData,
                appointmentHour: {
                    ...appointmentData.appointmentHour,
                    service: action.payload.service,
                    value: action.payload.price
                }
            }
        case 'setDay':
            return {
                ...appointmentData,
                id: action.payload.id,
                date: action.payload.date,
                dayname: action.payload.dayname
            }
        case 'setHour':
            return {
                ...appointmentData,
                appointmentHour: {
                    ...appointmentData.appointmentHour,
                    hour: action.payload.hour
                }
            }
        case 'setNameContact':
            return {
                ...appointmentData,
                appointmentHour: {
                    ...appointmentData.appointmentHour,
                    nameCustomer: action.payload.nameCustomer,
                    contact: action.payload.contact
                }
            }
        case 'clear':
            return {
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
        default:
            return appointmentData
    }
}