
'use client'
// pagina de main onde ficaram os componentes principais da pagina inicial
import { barberShopData, ClientsData } from "../mocks/mock"
import { BarberShopType } from "../types/BarberShopType"
import { ClientsDataType } from "../types/ClientsDataType"
import { ContactTLocationType } from "../types/contactLocationType"
import { HeaderDataType } from "../types/headerDataType"
import { ReviewsDataType } from "../types/reviewsDataType"
import { ReviewType } from "../types/reviewType"
import { WhoWeAreDataType } from "../types/whoWeAreDataType"
import { ContactLocation } from "../components/contactLocation"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Reviews } from "../components/reviews"
import { Services } from "../components/services"
import { WhoWeAre } from "../components/whoWeAre"
import { ServicesDataType } from "../types/servicesDataType"


type Props = {
    onNavigate: (Screen: 'home' | 'toAppointment') => void
}

export const Home = ({ onNavigate }: Props) => {

    const barberShop: BarberShopType = barberShopData

    const clients: ClientsDataType = ClientsData

    if (!barberShop || !clients) {
        return <div className="p-10 text-center text-red-500">Erro ao carregar dados.</div>;
    }

    // FUNÇOES - FUNÇOES - FUNÇOES - FUNÇOES - FUNÇOES - FUNÇOES
    const getBarberAge = (createdAt: string) => {
        const createdDate = new Date(createdAt)
        const currentDate = new Date()
        let age = currentDate.getFullYear() - createdDate.getFullYear()

        const monthDifference = currentDate.getMonth() - createdDate.getMonth()
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < createdDate.getDate())) {
            age--
        }
        return age
    }


    const getAverageRating = (reviews: ReviewType[]) => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / reviews.length;
        return parseFloat(averageRating.toFixed(1));
    }


    // DADOS - DADOS - DADOS - DADOS - DADOS - DADOS
    const headerData: HeaderDataType = {
        age: getBarberAge(barberShop.createdAt),
        customers: clients.clients.length,
        assessment: getAverageRating(clients.reviews)
    }


    const WhoWeAreData: WhoWeAreDataType = {
        title: barberShop.about.description.title,
        text: barberShop.about.description.text,
        cards: barberShop.about.infoCards
    }


    const servicesData: ServicesDataType = {
        servicesList: barberShop.services,
        onNavigate: onNavigate
    }


    const reviewsData: ReviewsDataType = {
        satisfiedCustomers: clients.reviews.length,
        averageRating: getAverageRating(clients.reviews),
        customersReturning: 85,
        ageBarber: getBarberAge(barberShop.createdAt),
        reviews: clients.reviews.slice(0, 4)
    }


    const contactLocationData: ContactTLocationType = {
        contacts: {
            contato: {
                phone: barberShop.contacts.phone,
                whatsapp: barberShop.contacts.whatsapp,
                email: barberShop.contacts.email
            },
            address: {
                street: barberShop.address.street,
                number: barberShop.address.number,
                city: barberShop.address.city,
                state: barberShop.address.state,
                cep: barberShop.address.cep
            },
            openingHours: {
                weekdays: barberShop.operatingSchedule.businessDays.open + " - " + barberShop.operatingSchedule.businessDays.close,
                weekends: barberShop.operatingSchedule.weekends.open + " - " + barberShop.operatingSchedule.weekends.close
            }
        }
    }


    const ExibeJson = () => {

    }

    return (
        <main className="flex flex-col">
            <Header headerData={headerData} />
            <WhoWeAre whoWeAreData={WhoWeAreData} />
            <Services 
            servicesList={servicesData.servicesList} 
            onNavigate={servicesData.onNavigate}
            />
            <Reviews reviewData={reviewsData} />
            <ContactLocation contactLocationData={contactLocationData} />
            <Footer />
        </main>
    )
}
