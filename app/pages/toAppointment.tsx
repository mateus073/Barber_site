
// componente pai do sistema de agendamento de horarios
import { useEffect, useState } from "react"
import { api } from "../axiosUrlBase/urlBaseAxios"
import { AppoimentsType } from "../types/appointmentsType"
import { ChoseDay } from "../components/choseDay"

export const ToAppointments = () => {

    // const [posts, setPosts] = useState<AppoimentsType>([])

    // useEffect(() => {
    //     api.get('appointments').then((res) => {
    //         setPosts(res.data)
    //         console.log(res.data)
    //     });
    // }, [])

    return (
        <div className="w-full min-h-screen mx-auto px-6 flex flex-col items-center justify-center">
        <ChoseDay />
      </div>
      
    )
}