
// pagina de main onde ficaram os componentes principais da pagina inicial

import { barbershopMock } from "../mocks/mock"
import { ServiceType } from "../types/servicesType"
import { WhoWeAreType } from "../types/whoWeAreType"
import { Header } from "./header"
import { Reviews } from "./reviews"
import { Services } from "./services"
import { WhoWeAre } from "./whoWeAre"

export const Home = () => {
    const mockBarber = barbershopMock 

    // data da sessao sobre nois
    const WhoWeAreData: WhoWeAreType = {
        title: mockBarber.about.description.title,
        text: mockBarber.about.description.text,
        cards: mockBarber.about.infoCards
    }


    // data da seçao serviçoes 
    const servicesData: ServiceType[] = mockBarber.services


    return (
        <main className="flex flex-col">  
            <Header age={9} customers={5} assessment={4.8} />
            <WhoWeAre whoWeAreData={WhoWeAreData} />
            <Services servicesData={servicesData} />
            <Reviews/>
        </main>
    )
}
