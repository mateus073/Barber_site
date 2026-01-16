// type com os dados que o componente de contato e localizaçao ira utilizar
export type ContactsType = {
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