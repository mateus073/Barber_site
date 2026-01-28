// componente padrao de botao

export const Button = ({
  color,
  text
}: {
  color: 'laranja' | 'branco' | 'cinza';
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
            : color === 'cinza'
            ? 'bg-[#1E1E1E] text-white hover:bg-[#F28705]'
            : 'bg-white text-[#F28705] hover:bg-gray-100'
        }
      `}
    >
      {text}
    </button>
  );
};
