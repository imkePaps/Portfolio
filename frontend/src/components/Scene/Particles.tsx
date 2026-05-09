import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";

import { Points } from "three";

function Particles() {
  const pointsRef = useRef<Points>(null!);

  const particles = useMemo(() => {
    const COUNT = 500;

    const positions = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;

      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;

      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime;

    pointsRef.current.rotation.y = time * 0.008;

    pointsRef.current.rotation.x = Math.sin(time * 0.08) * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default Particles;
