import React, { useRef, useState } from 'react'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import { Mesh, Vector3 } from 'three'
import { usePlanet } from '../hooks/usePlanet'
import { PlanetData } from '../types/planet'

interface PlanetProps {
  planetData: PlanetData
  index: number
}

const Planet: React.FC<PlanetProps> = ({ planetData, index }) => {
  const meshRef = useRef<Mesh>(null)
  const orbitRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedPlanet } = usePlanet()

  useFrame((state) => {
    if (meshRef.current && orbitRef.current) {
      // Planet rotation
      meshRef.current.rotation.y += planetData.rotationSpeed
      
      // Orbital motion (except for the Sun)
      if (planetData.name !== 'Sun') {
        const time = state.clock.elapsedTime * planetData.orbitSpeed
        const radius = planetData.position[0]
        orbitRef.current.position.x = Math.cos(time) * radius
        orbitRef.current.position.z = Math.sin(time) * radius
      }
    }
  })

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    setSelectedPlanet(planetData)
  }

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation()
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    setHovered(false)
    document.body.style.cursor = 'auto'
  }

  // Special handling for the Sun
  if (planetData.name === 'Sun') {
    return (
      <mesh
        ref={meshRef}
        position={planetData.position}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[planetData.size, 32, 32]} />
        <meshBasicMaterial
          color={planetData.color}
          emissive={planetData.color}
          emissiveIntensity={hovered ? 0.8 : 0.5}
        />
        {/* Sun glow effect */}
        <mesh scale={hovered ? 1.3 : 1.2}>
          <sphereGeometry args={[planetData.size, 32, 32]} />
          <meshBasicMaterial
            color={planetData.color}
            transparent
            opacity={0.2}
          />
        </mesh>
      </mesh>
    )
  }

  return (
    <group ref={orbitRef}>
      {/* Orbit line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[planetData.position[0] - 0.05, planetData.position[0] + 0.05, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          side={2}
        />
      </mesh>
      
      {/* Planet */}
      <mesh
        ref={meshRef}
        position={[planetData.position[0], 0, 0]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[planetData.size, 32, 32]} />
        <meshStandardMaterial
          color={planetData.color}
          roughness={0.8}
          metalness={0.1}
          emissive={hovered ? planetData.color : '#000000'}
          emissiveIntensity={hovered ? 0.1 : 0}
        />
        
        {/* Atmosphere glow for some planets */}
        {(planetData.name === 'Earth' || planetData.name === 'Venus' || planetData.name === 'Mars') && (
          <mesh scale={1.1}>
            <sphereGeometry args={[planetData.size, 32, 32]} />
            <meshBasicMaterial
              color={planetData.color}
              transparent
              opacity={hovered ? 0.15 : 0.08}
            />
          </mesh>
        )}
      </mesh>
    </group>
  )
}

export default Planet