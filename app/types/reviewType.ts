// type usado pra o array de reviews/testemunhos dos clientes da barbearia
export type ReviewType = {
  id: string
  clientName: string
  profession: string
  photo: string
  rating: number
  comment: string
  publicationDate: string
}