import React, { useState } from 'react';
import Scene from './components/Scene';
import ElementSelector from './components/ElementSelector';
import ParticleInfo from './components/ParticleInfo';
import { Atom } from 'lucide-react';
import { ELEMENTS } from './types/atom';

function App() {
  const [selectedElement, setSelectedElement] = useState('hydrogen');
  const element = ELEMENTS[selectedElement];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute top-0 left-0 w-full p-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-white">
            <Atom className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Interactive Atom Visualization</h1>
          </div>
          <p className="text-gray-300 mt-2">
            Explore different atomic structures with this interactive 3D visualization.
            Use your mouse to rotate and zoom around the atom.
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0">
        <Scene element={element} />
      </div>

      <ElementSelector
        selectedElement={selectedElement}
        onElementChange={setSelectedElement}
      />
      
      <ParticleInfo element={element} />
    </div>
  );
}

export default App;