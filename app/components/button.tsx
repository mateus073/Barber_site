// componente padrao de botao
/*
quando ele for chamado recebe uma string q e laranja ou branco pra saber qual a configuraçao de cor dele
*/
export const Button = ({
  color,
  text
}: {
  color: 'laranja' | 'branco';
  text: string;
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-md px-6 py-3
        text-sm font-semibold
        transition-colors duration-200
        ${
          color === 'laranja'
            ? 'bg-[#F28705] text-white hover:bg-[#d97706]'
            : 'bg-white text-black hover:bg-gray-100'
        }
      `}
    >
      {text}
    </button>
  );
};
