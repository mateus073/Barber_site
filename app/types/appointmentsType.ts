// type pra o horario
export type HourlyType = {
    id: string
    date: string
    dayName: string
    hour: string
    nameCustomer: string
    service: string
    value: number
    contact: string
}


// type para o dia
export type DayShedule = {
    id: number;
    date: string;
    dayname: string;
    hours: HourlyType[]
}


// type final: array de dias 
export type AppoimentsType = DayShedule[]