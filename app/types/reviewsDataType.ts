// dados da seçao de reviews/testemunhos dos clientes na pagina inicial
import { ReviewType } from "./reviewType"

export type ReviewsDataType = {
    satisfiedCustomers: number
    averageRating: number
    customersReturning: number
    ageBarber: number
    reviews: ReviewType[]
}

