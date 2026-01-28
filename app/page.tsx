'use client'

import { useState } from "react";
import { Home } from "./pages/home";
import { ToAppointments } from "./pages/toAppointment";


const Page = () => {
  const [screen, setScreen] = useState<ScreenType>('home')

  type ScreenType = 'home' | 'toAppointment'

  const handleScreen = (currentScreen: ScreenType) => {
    setScreen(currentScreen)
  }

  return (
    <div className="h-full w-full">
      {screen === 'home' && <Home onNavigate={handleScreen} />}
      {screen === 'toAppointment' && <ToAppointments/>}
    </div>
    
    
  );
};

export default Page;