/*exibe info simples de cabeclaho com img de fundo e botao de agendamento 

recebe por props : 

- numero que indica a idade da barbearia
- clientes satisfeitos
- avaliacao

 

- O que e clicavel?
    - botao de agendamento
- O que muda dinamicamente?
- nada */

import { Button } from "./button"


type Props = {
  age: number;
  customers: number;
  assessment: number;
};

export const Header = ({ age, customers, assessment }: Props) => {
  return (
    <section className="relative h-[600px] w-full bg-[url('/imgs/header.jpg')] bg-cover bg-center">
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-6 md:px-20 max-w-3xl">
        
        <span className="inline-block w-fit rounded-full bg-[#F28705]/20 px-5 py-2 border border-solid border-[#F28705] text-sm font-semibold text-[#F28705]">
          +{age} anos de tradição
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Estilo, precisão <br />
          <span className="text-[#F28705]">e tradição</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Mais do que um corte, uma experiência única de cuidado masculino.
          Venha viver a tradição da barbearia clássica com o conforto moderno.
        </p>

        <div>
          <Button color="laranja" text="Agendar horário" />
        </div>

        {/* Métricas */}
        <div className="mt-8 flex gap-8">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#F28705]">
              {age}+
            </span>
            <span className="text-sm text-gray-300">
              anos
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#F28705]">
              {customers}K+
            </span>
            <span className="text-sm text-gray-300">
              clientes
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#F28705]">
              {assessment}★
            </span>
            <span className="text-sm text-gray-300">
              avaliação
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};