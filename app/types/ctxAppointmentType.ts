export type ctxAppointmentType = {
    id: number
    date: string
    dayname: string
    appointmentHour: {
        hour: string
        nameCustomer: string
        service: string
        value: number
        contact: string
    }
}
