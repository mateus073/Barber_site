import { useEffect, useState } from "react"
import { api } from "../axiosUrlBase/urlBaseAxios"
import { AppoimentsType } from "../types/appointmentsType"

export const ToAppointments = () => {

    const [posts, setPosts] = useState<AppoimentsType>([])

    useEffect(() => {
        api.get('appointments').then((res) => {
            setPosts(res.data)
            console.log(res.data)
        });
    }, [])

    return (
        <div>
            <button className="border m-2 p-2">voltar</button>
            {posts?.map((days) => {
                return <div key={days.id} className="border m-10 p-10 bg-red-400">{days.dayname}</div>
            })
            }
        </div>
    )
}