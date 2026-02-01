'use client'

import { useState } from "react";
import { Home } from "./pages/home";
import { ToAppointments } from "./pages/toAppointment";
import { AppointmentProvider } from "./contexts/appointmentCtx";


const Page = () => {
  const [screen, setScreen] = useState<ScreenType>('home')

  type ScreenType = 'home' | 'toAppointment'

  const handleScreen = (currentScreen: ScreenType) => {
    setScreen(currentScreen)
  }

  return (
    <div className="h-full w-full">
      {screen === 'home' && <Home onNavigate={handleScreen} />}
      
      {screen === 'toAppointment' &&
        <AppointmentProvider>
          <ToAppointments />
        </AppointmentProvider>
      }
    </div>
  );
};

export default Page;