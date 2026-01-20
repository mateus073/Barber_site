//type do objeto principal que contem os dados da beraria (exeto os dados de agendamentos e clientes)

import { ServiceType } from './servicesType'

export type BarberShopType = {
  id: string
  name: string
  createdAt: string

  about: {
    description: {
      title: string
      text: string
    }

    infoCards: {
      title: string
      text: string
      icon: string
    }[]
  }

  operatingSchedule: {
    workingDays: string[]
    businessDays: {
      open: string
      close: string
    }
    weekends: {
      open: string
      close: string
    }
  }

  contacts: {
    phone: string
    whatsapp: string
    email: string
  }

  address: {
    street: string
    number: string
    city: string
    state: string
    cep: string
  }

  services: ServiceType[]
}