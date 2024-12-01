import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import Electron from './Electron';
import Nucleus from './Nucleus';
import { ElementConfig } from '../types/atom';

interface AtomProps {
  element: ElementConfig;
}

export default function Atom({ element }: AtomProps) {
  const atomRef = useRef<Group>(null);

  useFrame((state) => {
    if (atomRef.current) {
      atomRef.current.rotation.y += 0.001;
    }
  });

  // Calculate electron shell positions
  const shellRadii = element.electrons.map((_, i) => (i + 1) * 3);

  return (
    <group ref={atomRef}>
      <Nucleus element={element} />
      
      {/* Electron shells */}
      {element.electrons.map((electronCount, shellIndex) => {
        const radius = shellRadii[shellIndex];
        return [...Array(electronCount)].map((_, electronIndex) => (
          <Electron
            key={`shell-${shellIndex}-electron-${electronIndex}`}
            radius={radius}
            speed={0.5 / (shellIndex + 1)}
            phase={(electronIndex / electronCount) * Math.PI * 2}
          />
        ));
      })}
      
      {/* Orbital paths */}
      {shellRadii.map((radius, index) => (
        <group key={`orbital-${index}`}>
          <mesh>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshBasicMaterial color="#304FFE" transparent opacity={0.3} />
          </mesh>
          <mesh rotation-x={Math.PI / 2}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshBasicMaterial color="#304FFE" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}