import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Group } from 'three';
import { ElementConfig } from '../types/atom';

interface NucleusProps {
  element: ElementConfig;
}

export default function Nucleus({ element }: NucleusProps) {
  const nucleusRef = useRef<Group>(null);

  useFrame((state) => {
    if (nucleusRef.current) {
      nucleusRef.current.rotation.y += 0.01;
    }
  });

  const particleRadius = 0.4;
  const orbitRadius = 0.6;

  return (
    <group ref={nucleusRef}>
      {/* Protons */}
      {[...Array(element.protons)].map((_, i) => (
        <Sphere
          key={`proton-${i}`}
          args={[particleRadius]}
          position={[
            Math.cos((i / element.protons) * Math.PI * 2) * orbitRadius,
            Math.sin((i / element.protons) * Math.PI * 2) * orbitRadius,
            0
          ]}
        >
          <meshStandardMaterial
            color="#F44336"
            emissive="#D32F2F"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}

      {/* Neutrons */}
      {[...Array(element.neutrons)].map((_, i) => (
        <Sphere
          key={`neutron-${i}`}
          args={[particleRadius]}
          position={[
            Math.cos((i / element.neutrons) * Math.PI * 2 + 0.5) * orbitRadius,
            0,
            Math.sin((i / element.neutrons) * Math.PI * 2 + 0.5) * orbitRadius
          ]}
        >
          <meshStandardMaterial
            color="#9C27B0"
            emissive="#7B1FA2"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  );
}