
// pagina de main onde ficaram os componentes principais da pagina inicial

import { Header } from "./header"
import { WhoWeAre } from "./whoWeAre"

export const Home = () => {

    return (
        <main className="flex flex-col">  
            <Header age={9} customers={5} assessment={4.8} />
            <WhoWeAre />
        </main>
    )
}
