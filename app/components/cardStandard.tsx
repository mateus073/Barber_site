/*componente de card padrao apenas cria um card com formato e padding igual */

export const CardStandard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="border border-solid border-[#2A2A2A] max-w-md bg-[#171717] p-5 rounded-lg shadow-md flex flex-col"> 
            {children}  
        </div>
    )
}