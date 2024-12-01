import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Group } from 'three';

interface ElectronProps {
  radius: number;
  speed: number;
  phase: number;
}

export default function Electron({ radius, speed, phase }: ElectronProps) {
  const electronRef = useRef<Group>(null);

  useFrame((state) => {
    if (electronRef.current) {
      const time = state.clock.getElapsedTime();
      electronRef.current.position.x = radius * Math.cos(speed * time + phase);
      electronRef.current.position.z = radius * Math.sin(speed * time + phase);
    }
  });

  return (
    <group ref={electronRef}>
      <Sphere args={[0.2]}>
        <meshStandardMaterial
          color="#2196F3"
          emissive="#1565C0"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </group>
  );
}