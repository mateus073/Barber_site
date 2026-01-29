import { HourlyType } from "../types/appointmentsType";
import { Button } from "./button";

type Props = {
  hourly: HourlyType[];
  showModal: boolean;
  handleShowModal: () => void;
}


export const ModalTime = ({ hourly, showModal, handleShowModal }: Props) => {


  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-[#0B0B0B] p-6 m-5 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white"></h2>
          <button
            onClick={() => handleShowModal()}
          >
            <img src="/imgs/btn-X.png" alt="" className="w-8 h-8" />
          </button>
        </div>

        {/* Conteúdo (loop dos horários entra aqui) */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {hourly.map((time, index) => {
            const isReserved = time.nameCustomer !== ""

            return (
              <button
                key={index}
                disabled={isReserved}
                className={`
          w-full
          rounded-xl
          px-4 py-6
          text-sm
          font-medium
          transition
          ${isReserved
                    ? "bg-red-600 text-white cursor-not-allowed"
                    : "border border-white/10 bg-[#171717] text-white hover:border-[#F28705] hover:bg-[#F28705] active:scale-95"
                  }
        `}
              >
                {isReserved ? "Reservado" : time.hour}
              </button>
            )
          })}
        </div>

        {/* Footer (opcional) */}
        <div className="mt-8 flex justify-center w-full">
          <Button color="laranja" text="Confirmar" />
        </div>
      </div>
    </div>
  );
}
