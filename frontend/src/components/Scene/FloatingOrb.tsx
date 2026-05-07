import { useFrame } from "@react-three/fiber";

import { Mesh } from "three";

import { useRef } from "react";

type Props = {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
};

function FloatingOrb({ position, color, speed = 0.4, scale = 1 }: Props) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.2;

    meshRef.current.position.x =
      position[0] + Math.cos(time * speed * 0.7) * 0.15;

    meshRef.current.rotation.y += 0.0015;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />

      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.18}
        emissive={color}
        emissiveIntensity={1.5}
        roughness={0.4}
      />
    </mesh>
  );
}

export default FloatingOrb;
