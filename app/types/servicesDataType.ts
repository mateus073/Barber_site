// dados da sessao de serçosos oferecidos pela barbearia na pagina inicial
import { ServiceType } from "./servicesType"

// type da lista de serviços
export type servicesListType = ServiceType[]


// type pra os dados passados pra sessao de servicos em home
export type ServicesDataType = {
  servicesList: servicesListType; // A lista de serviços vinda do mock
  onNavigate: (screen: 'home' | 'toAppointment') => void; // A função de navegação
};