import { createContext } from 'react'
import { PlanetData } from '../types/planet'

export interface PlanetContextType {
  selectedPlanet: PlanetData | null
  setSelectedPlanet: (planet: PlanetData | null) => void
}

export const PlanetContext = createContext<PlanetContextType | undefined>(undefined)