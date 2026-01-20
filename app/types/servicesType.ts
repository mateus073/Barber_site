// type usado pra o array de serviços oferecidos pela barbearia
export type ServiceType = {
    id: string;
    title: string;
    text: string;
    price: number;
    duration: number | string;
    beneficios: string[];
    mostPopular: boolean
}
