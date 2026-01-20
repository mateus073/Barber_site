// dados da sessao de cantato e localização da barbearia na pagina inicial
export type ContactTLocationType = {
    contacts: {
        contato: {
            phone: string;
            whatsapp: string;
            email: string;
        };
        address: {
            street: string;
            number: string;
            city: string;
            state: string;
            cep: string;
        };
        openingHours: {
            weekdays: string;
            weekends: string;
        };
    };
}; 