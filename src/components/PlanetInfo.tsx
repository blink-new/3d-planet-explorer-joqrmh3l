import React from 'react'
import { usePlanet } from '../hooks/usePlanet'
import { X } from 'lucide-react'

const PlanetInfo: React.FC = () => {
  const { selectedPlanet, setSelectedPlanet } = usePlanet()

  if (!selectedPlanet) return null

  return (
    <div className="absolute top-6 right-6 w-80 bg-black/80 backdrop-blur-md rounded-xl border border-white/20 p-6 pointer-events-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: selectedPlanet.color }}
          />
          {selectedPlanet.name}
        </h2>
        <button
          onClick={() => setSelectedPlanet(null)}
          className="text-gray-400 hover:text-white transition-colors p-1"
        >
          <X size={20} />
        </button>
      </div>

      {/* Planet Stats */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-300">Diameter:</span>
          <span className="text-white font-medium">{selectedPlanet.diameter}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Distance from Sun:</span>
          <span className="text-white font-medium">{selectedPlanet.distance}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Temperature:</span>
          <span className="text-white font-medium">{selectedPlanet.temperature}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Moons:</span>
          <span className="text-white font-medium">{selectedPlanet.moons}</span>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-white/20 mb-4" />

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">About {selectedPlanet.name}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {selectedPlanet.description}
        </p>
      </div>

      {/* Visual indicator */}
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Click other planets to explore
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo