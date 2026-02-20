'use client'

import { useState } from "react";
import { Home } from "./pages/home";
import { AppointmentProvider } from "./contexts/appointmentCtx";
import { SelectAppointmentDate } from "./pages/selectAppointmentDate";
import { ConfirmAppointment } from "./pages/confirmAppointment";


const Page = () => {
  type ScreenType = 'home' | 'selectAppointmentDate' | 'confirmAppointment'
  
  const [screen, setScreen] = useState<ScreenType>('home')

  const handleScreen = (currentScreen: ScreenType) => {
    setScreen(currentScreen)
  }

  return (
    <div className="h-full w-full">
      <AppointmentProvider>
        {screen === 'home' && <Home onNavigate={handleScreen} />}
        {screen === 'selectAppointmentDate' && <SelectAppointmentDate onNavigate={handleScreen} />}
        {screen === 'confirmAppointment' && <ConfirmAppointment onNavigate={handleScreen} />}
      </AppointmentProvider>
    </div>
  );
};

export default Page;