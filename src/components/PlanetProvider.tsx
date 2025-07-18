import React, { useState, ReactNode } from 'react'
import { PlanetContext } from '../context/planetContext'
import { PlanetData } from '../types/planet'

interface PlanetProviderProps {
  children: ReactNode
}

export const PlanetProvider: React.FC<PlanetProviderProps> = ({ children }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null)

  return (
    <PlanetContext.Provider value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </PlanetContext.Provider>
  )
}