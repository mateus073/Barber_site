export const barbershopMock = {
  id: 'barbearia-001',
  name: 'Barbearia Alpha',
  createdAt: '2018-06-10',

  about: {
    description: 'Tradição, estilo e qualidade há mais de 6 anos.',
    highlights: [
      'Profissionais certificados',
      'Ambiente climatizado',
      'Atendimento personalizado'
    ]
  },

  services: [
    {
      id: 'corte',
      name: 'Corte de cabelo',
      price: 40,
      duration: 30
    },
    {
      id: 'barba',
      name: 'Barba',
      price: 30,
      duration: 20
    }
  ],

  schedule: {
    workingDays: [1, 2, 3, 4, 5, 6],
    openTime: '09:00',
    closeTime: '19:00',
    blockedTimes: [
      { date: '2026-01-15', time: '14:00' }
    ]
  },

  reviews: [
    {
      id: 'r1',
      clientName: 'Carlos',
      rating: 5,
      comment: 'Excelente atendimento',
      createdAt: '2025-12-10'
    }
  ],

  clients: [
    {
      id: 'c1',
      name: 'João',
      phone: '11999999999',
      appointmentsCount: 3
    }
  ],

  contacts: {
    phone: '11999999999',
    whatsapp: '11999999999',
    email: 'contato@barbearia.com',
    address: {
      street: 'Rua X',
      number: '123',
      city: 'São Paulo'
    }
  }
};
