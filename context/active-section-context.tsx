"use client"
import type { SectionName } from "@/lib/types";
import { createContext, Dispatch, ReactNode, useContext, useState } from "react"


type ActiveSectionContextProviderProps = {
    children: ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); //por defecto lo dejamos en null

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionName>('Inicio')

    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    //Hacemos un seguimiento de este state para deshabilitar el observador temporalmente cuando el usuario hace click en un link
  
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    ) 
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
  }
