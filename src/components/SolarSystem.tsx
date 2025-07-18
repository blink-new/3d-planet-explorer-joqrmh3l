import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import Planet from './Planet'
import { PlanetData } from '../types/planet'

const planetsData: PlanetData[] = [
  {
    name: 'Sun',
    diameter: '1,392,700 km',
    distance: '0 AU',
    temperature: '5,778 K',
    moons: '0',
    description: 'The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.',
    color: '#FDB813',
    size: 3,
    position: [0, 0, 0],
    rotationSpeed: 0.01,
    orbitSpeed: 0
  },
  {
    name: 'Mercury',
    diameter: '4,879 km',
    distance: '0.39 AU',
    temperature: '167°C',
    moons: '0',
    description: 'Mercury is the smallest planet in our solar system and the closest to the Sun. It has extreme temperature variations.',
    color: '#8C7853',
    size: 0.4,
    position: [8, 0, 0],
    rotationSpeed: 0.02,
    orbitSpeed: 0.04
  },
  {
    name: 'Venus',
    diameter: '12,104 km',
    distance: '0.72 AU',
    temperature: '464°C',
    moons: '0',
    description: 'Venus is the hottest planet in our solar system due to its thick atmosphere of carbon dioxide with clouds of sulfuric acid.',
    color: '#FFC649',
    size: 0.6,
    position: [12, 0, 0],
    rotationSpeed: 0.015,
    orbitSpeed: 0.03
  },
  {
    name: 'Earth',
    diameter: '12,756 km',
    distance: '1.00 AU',
    temperature: '15°C',
    moons: '1',
    description: 'Earth is the only known planet with life. It has liquid water, a breathable atmosphere, and a protective magnetic field.',
    color: '#6B93D6',
    size: 0.6,
    position: [16, 0, 0],
    rotationSpeed: 0.02,
    orbitSpeed: 0.025
  },
  {
    name: 'Mars',
    diameter: '6,792 km',
    distance: '1.52 AU',
    temperature: '-65°C',
    moons: '2',
    description: 'Mars is known as the Red Planet due to iron oxide on its surface. It has the largest volcano and canyon in the solar system.',
    color: '#CD5C5C',
    size: 0.5,
    position: [20, 0, 0],
    rotationSpeed: 0.018,
    orbitSpeed: 0.02
  },
  {
    name: 'Jupiter',
    diameter: '142,984 km',
    distance: '5.20 AU',
    temperature: '-110°C',
    moons: '95',
    description: 'Jupiter is the largest planet in our solar system. It is a gas giant with a Great Red Spot storm larger than Earth.',
    color: '#D8CA9D',
    size: 2,
    position: [28, 0, 0],
    rotationSpeed: 0.03,
    orbitSpeed: 0.015
  },
  {
    name: 'Saturn',
    diameter: '120,536 km',
    distance: '9.58 AU',
    temperature: '-140°C',
    moons: '146',
    description: 'Saturn is famous for its prominent ring system. It is a gas giant composed mostly of hydrogen and helium.',
    color: '#FAD5A5',
    size: 1.8,
    position: [36, 0, 0],
    rotationSpeed: 0.025,
    orbitSpeed: 0.012
  },
  {
    name: 'Uranus',
    diameter: '51,118 km',
    distance: '19.22 AU',
    temperature: '-195°C',
    moons: '27',
    description: 'Uranus is an ice giant that rotates on its side. It has a faint ring system and is composed of water, methane, and ammonia ices.',
    color: '#4FD0E7',
    size: 1.2,
    position: [44, 0, 0],
    rotationSpeed: 0.02,
    orbitSpeed: 0.008
  },
  {
    name: 'Neptune',
    diameter: '49,528 km',
    distance: '30.05 AU',
    temperature: '-200°C',
    moons: '16',
    description: 'Neptune is the windiest planet with speeds up to 2,100 km/h. It is an ice giant with a deep blue color from methane in its atmosphere.',
    color: '#4B70DD',
    size: 1.1,
    position: [52, 0, 0],
    rotationSpeed: 0.022,
    orbitSpeed: 0.005
  }
]

const SolarSystem: React.FC = () => {
  const systemRef = useRef<Group>(null)

  useFrame((state) => {
    if (systemRef.current) {
      // Gentle rotation of the entire system
      systemRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={systemRef}>
      {planetsData.map((planet, index) => (
        <Planet
          key={planet.name}
          planetData={planet}
          index={index}
        />
      ))}
    </group>
  )
}

export default SolarSystem