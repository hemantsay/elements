import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Atom from './Atom';
import { ElementConfig } from '../types/atom';

interface SceneProps {
  element: ElementConfig;
}

export default function Scene({ element }: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
      <color attach="background" args={['#000817']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Atom element={element} />
      <OrbitControls enablePan={false} />
      <Environment preset="city" />
    </Canvas>
  );
}