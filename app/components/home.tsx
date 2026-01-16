
// pagina de main onde ficaram os componentes principais da pagina inicial

import { barbershopMock } from "../mocks/mock"
import { ContactsType } from "../types/contactsType"
import { ServiceType } from "../types/servicesType"
import { WhoWeAreType } from "../types/whoWeAreType"
import { ContactLocation } from "./contactLocation"
import { Footer } from "./footer"
// import { ReviewsType } from "../types/reviewsType"
import { Header } from "./header"
import { Reviews } from "./reviews"
import { Services } from "./services"
import { WhoWeAre } from "./whoWeAre"

export const Home = () => {

    const mockBarber = barbershopMock

    // FUNÇOES - FUNÇOES - FUNÇOES
    // funcao pra obter a idade da barbearia 
    const getBarberAge = (createdAt: string) => {
        const createdDate = new Date(createdAt)
        const currentDate = new Date()
        let age = currentDate.getFullYear() - createdDate.getFullYear()

        // Ajusta se o aniversário ainda não ocorreu este ano
        const monthDifference = currentDate.getMonth() - createdDate.getMonth()
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < createdDate.getDate())) {
            age--
        }

        return age
    }

    // funcao para calcular a avaliaçao media
    const getAverageRating = (reviews: any[]) => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / reviews.length;
        return parseFloat(averageRating.toFixed(1));
    }

    // funcao pra selecionar as 4 avaliçaoes mais recentes
    const getRecentReviews = (reviews: any[],) => {
        const sortedReviews = reviews.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
        return sortedReviews.slice(0, 4);
    }





    // DADOS - DADOS - DADOS - DADOS - DADOS - DADOS
    // data de headers 
    const headerData = {
        age: getBarberAge(mockBarber.createdAt),
        customers: mockBarber.reviews.length,
        assessment: getAverageRating(mockBarber.reviews)
    }

    // data da sessao sobre nois
    const WhoWeAreData: WhoWeAreType = {
        title: mockBarber.about.description.title,
        text: mockBarber.about.description.text,
        cards: mockBarber.about.infoCards
    }

    // data da sessao serviçoes 
    const servicesData: ServiceType[] = mockBarber.services

    // data da sessao de avaliçaoes
    const reviewsData = {
        satisfiedCustomers: mockBarber.reviews.length,
        averageRating: getAverageRating(mockBarber.reviews),
        customersReturning: 85,
        ageBarber: getBarberAge(mockBarber.createdAt),
        reviews: mockBarber.reviews
    }

    // data da sessao de contato e localizaçao
    const contactsData: ContactsType = {
        contacts: mockBarber.contacts
    }


    return (
        <main className="flex flex-col">
            <Header headerData={headerData} />
            <WhoWeAre whoWeAreData={WhoWeAreData} />
            <Services servicesData={servicesData} />
            <Reviews satisfiedCustomers={reviewsData.satisfiedCustomers} averageRating={reviewsData.averageRating} customersReturning={reviewsData.customersReturning} ageBarber={reviewsData.ageBarber} reviews={getRecentReviews(reviewsData.reviews)} />
            <ContactLocation contactsData={contactsData} />
            <Footer />
        </main>
    )
}
