// type usado pra passar os dados pra sessao de serviços "Quem Somos" na pagina inicial
export type WhoWeAreDataType = {
    title: string;
    text: string;
    cards: {
        title: string;
        text: string;
        icon: string;
    }[];
}