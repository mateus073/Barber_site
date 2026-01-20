import { BarberShopType } from "../types/BarberShopType";
import { ClientsDataType } from "../types/ClientsDataType";

// dados relacionados a barbearia
export const barberShopData: BarberShopType = {
  id: 'barbearia-001',
  name: 'Barbearia Alpha',
  createdAt: '2018-06-10',

  about: {
    description: {
      title: 'tradiçao que se renova a cada corte',
      text: 'Desde 2015, somos referência em cuidado masculino na região. Nascemos do sonho de resgatar a essência da barbearia clássica, onde cada cliente é tratado com atenção especial e cada corte é feito com maestria. Nossa equipe é formada por profissionais apaixonados e altamente qualificados. Somos atualizados com as últimas tendências, mas sem perder o toque artesanal que nos diferencia.'
    },

    infoCards: [
      { title: 'Execelencia', text: 'qualidade premium em cada serviço', icon: '/imgs/medalha.png' },
      { title: 'Equipe Top', text: 'Barbeiros experientes e dedicados', icon: '/imgs/equipe.png' },
      { title: 'Inovação', text: 'Tendencias e tecnicas modernas', icon: '/imgs/grafico.png' }
    ]
  },

  operatingSchedule: {
    workingDays: ['Monday, tuesday, wednesday, thursday, friday,sunday'],
    businessDays: {
      open: '09:00 am',
      close: '18:00 pm'
    },
    weekends: {
      open: '09:00 am',
      close: '14:00 pm'
    }
  },

  contacts: {
    phone: '11999999999',
    whatsapp: '11999999999',
    email: 'contato@barbearia.com',
  },

  address: {
    street: 'Avenida Paulista',
    number: '1000',
    city: 'São Paulo',
    state: 'SP',
    cep: '01310-100'
  },

  services: [
    {
      id: 'corte',
      title: 'Corte de cabelo',
      text: 'Corte moderno ou clássico, adaptado ao seu estilo e formato de rosto.',
      price: 60,
      duration: 45,
      beneficios: ['labagem relaxante', 'toalha quente', 'finalização com produtos premium'],
      mostPopular: false
    },
    {
      id: 'barba',
      title: 'Barba Completa',
      text: 'aparar, modelar e finalizar com produtos premium para deixar sua barba inpecavel.',
      price: 30,
      duration: 45,
      beneficios: ['oleos especiais', 'toalha quente', 'finalização com produtos premium'],
      mostPopular: false
    },
    {
      id: 'corteBarba',
      title: 'Corte de cabelo + barba',
      text: 'Combo completo pra voce sair renovado e com estilo.',
      price: 90,
      duration: 60,
      beneficios: ['corte', 'barba', 'relaxamento'],
      mostPopular: true
    },
    {
      id: 'tratamentosEspeciais',
      title: 'Tratamentos Especiais',
      text: 'Hidratação, coloração, luzes e outros serviços premium para cuidado total.',
      price: 120,
      duration: 'variavel',
      beneficios: ['hidratação capilar', 'coloração', 'platinado'],
      mostPopular: false
    },
  ],
};




// dados relacionados aos clientes
export const ClientsData: ClientsDataType = {
  clients: [
    {
      id: 'c1',
      name: 'João Silva',
      phone: '11988886666',
      appointmentsCount: 3
    },
    {
      id: 'c2',
      name: 'Pedro Santos',
      phone: '11987775555',
      appointmentsCount: 5
    },
    {
      id: 'c3',
      name: 'Carlos Oliveira',
      phone: '11986664444',
      appointmentsCount: 7
    },
    {
      id: 'c4',
      name: 'Lucas Ferreira',
      phone: '11985553333',
      appointmentsCount: 2
    },
    {
      id: 'c5',
      name: 'Diego Costa',
      phone: '11984442222',
      appointmentsCount: 4
    },
    {
      id: 'c6',
      name: 'Felipe Martins',
      phone: '11983331111',
      appointmentsCount: 6
    },
    {
      id: 'c7',
      name: 'André Souza',
      phone: '11982229999',
      appointmentsCount: 8
    },
    {
      id: 'c8',
      name: 'Rafael Gomes',
      phone: '11981118888',
      appointmentsCount: 3
    },
    {
      id: 'c9',
      name: 'Bruno Alves',
      phone: '11980007777',
      appointmentsCount: 5
    },
    {
      id: 'c10',
      name: 'Gustavo Mendes',
      phone: '11979996666',
      appointmentsCount: 4
    }
  ],

  reviews: [
    {
      id: 'r1',
      clientName: 'Carlos Silva',
      profession: 'Empresário',
      photo: '/imgs/avatar.jpg',
      rating: 5,
      comment: 'Excelente atendimento! Profissional muito atencioso e preciso no corte. Voltarei com certeza!',
      publicationDate: '2024-01-15'
    },
    {
      id: 'r2',
      clientName: 'Lucas Oliveira',
      profession: 'Designer',
      photo: '/imgs/avatar.jpg',
      rating: 5,
      comment: 'Melhor barbearia da região! A qualidade dos produtos é notável e o ambiente muito acolhedor.',
      publicationDate: '2024-01-10'
    },
    {
      id: 'r3',
      clientName: 'Miguel Santos',
      profession: 'Desenvolvedor',
      photo: '/imgs/avatar.jpg',
      rating: 4,
      comment: 'Bom serviço, profissionais competentes. Único ponto é o tempo de espera nos finais de semana.',
      publicationDate: '2024-01-08'
    },
    {
      id: 'r4',
      clientName: 'Rafael Costa',
      profession: 'Advogado',
      photo: '/imgs/avatar.jpg',
      rating: 5,
      comment: 'Perfeito! O corte com barba ficou impecável. Respeito ao horário agendado. Recomendo!',
      publicationDate: '2024-01-05'
    },
    {
      id: 'r5',
      clientName: 'Bruno Ferreira',
      profession: 'Médico',
      photo: '/imgs/avatar.jpg',
      rating: 4,
      comment: 'Ótima experiência. O profissional conhece as tendências atuais e adapta bem ao rosto do cliente.',
      publicationDate: '2025-01-02'
    },
    {
      id: 'r6',
      clientName: 'André Martins',
      profession: 'Atleta',
      photo: '/imgs/avatar.jpg',
      rating: 5,
      comment: 'Voltei diversos times! Ambiente limpo, profissionais qualificados e resultado impecável sempre.',
      publicationDate: '2023-12-28'
    },
  ]
}