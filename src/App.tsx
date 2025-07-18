import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import SolarSystem from './components/SolarSystem'
import PlanetInfo from './components/PlanetInfo'
import { PlanetProvider } from './components/PlanetProvider'
import './App.css'

function App() {
  return (
    <PlanetProvider>
      <div className="w-full h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 0, 50], fov: 60 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.1} />
            <directionalLight
              position={[0, 0, 5]}
              intensity={2}
              color="#ffffff"
              castShadow
            />
            
            {/* Star field background */}
            <Stars
              radius={300}
              depth={60}
              count={8000}
              factor={7}
              saturation={0}
              fade
              speed={0.5}
            />
            
            {/* Solar System */}
            <SolarSystem />
            
            {/* Camera controls */}
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={10}
              maxDistance={200}
              autoRotate={false}
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
        
        {/* UI Overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-6 left-6 pointer-events-auto">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
              3D Planet Explorer
            </h1>
            <p className="text-gray-300 text-lg">
              Click on planets to explore our solar system
            </p>
          </div>
          
          {/* Planet Information Panel */}
          <PlanetInfo />
        </div>
      </div>
    </PlanetProvider>
  )
}

export default App