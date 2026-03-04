// type pra o horario
export type HourlyType = {
    hour: string
    nameCustomer: string
    service: string
    value: number
    contact: string
}


// type para o dia completo com os horarios disponiveis, e os dados do dia, como id, data e nome do dia da semana
export type DayShedule = {
    id: number;
    date: string;
    dayname: string;
    appointmentHour: HourlyType[]
}


// type final: array de agendamentos 
export type AppoimentsType =DayShedule[]