import React from 'react';
import { ELEMENTS } from '../types/atom';

interface ElementSelectorProps {
  selectedElement: string;
  onElementChange: (element: string) => void;
}

export default function ElementSelector({ selectedElement, onElementChange }: ElementSelectorProps) {
  return (
    <div className="absolute top-20 right-4 bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm">
      <h3 className="text-white font-semibold mb-2">Select Element</h3>
      <div className="space-y-2">
        {Object.entries(ELEMENTS).map(([key, element]) => (
          <button
            key={key}
            onClick={() => onElementChange(key)}
            className={`w-full px-4 py-2 rounded ${
              selectedElement === key
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono">{element.symbol}</span>
              <span className="text-sm">{element.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}