import { useContext } from 'react'
import { PlanetContext } from '../context/planetContext'

export const usePlanet = () => {
  const context = useContext(PlanetContext)
  if (!context) {
    throw new Error('usePlanet must be used within a PlanetProvider')
  }
  return context
}