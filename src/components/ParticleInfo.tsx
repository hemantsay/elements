import React from 'react';
import { ElementConfig } from '../types/atom';

interface ParticleInfoProps {
  element: ElementConfig;
}

export default function ParticleInfo({ element }: ParticleInfoProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{element.name} ({element.symbol})</h2>
          <p className="text-gray-300">Atomic Number: {element.atomicNumber}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="font-semibold">Protons</h3>
            <p className="text-xl font-mono text-red-400">{element.protons}</p>
            <p className="text-sm text-gray-300">Positively charged particles (red)</p>
          </div>
          <div>
            <h3 className="font-semibold">Neutrons</h3>
            <p className="text-xl font-mono text-purple-400">{element.neutrons}</p>
            <p className="text-sm text-gray-300">Neutral particles (purple)</p>
          </div>
          <div>
            <h3 className="font-semibold">Electrons</h3>
            <p className="text-xl font-mono text-blue-400">{element.electrons.reduce((a, b) => a + b, 0)}</p>
            <p className="text-sm text-gray-300">Negatively charged particles (blue)</p>
          </div>
        </div>
      </div>
    </div>
  );
}