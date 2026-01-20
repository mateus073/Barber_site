    // type usado pra agrupar os dados dos clientes e reviews/testemunhos
import { ClientType } from "./ClientType"
import { ReviewType } from "./reviewType"

export type ClientsDataType = {
  clients: ClientType[],
  reviews: ReviewType[]
}