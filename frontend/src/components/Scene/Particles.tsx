import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";

import { Points } from "three";

function Particles() {
  const pointsRef = useRef<Points>(null!);

  /*
   * PARTICLE POSITIONS
   */
  const particles = useMemo(() => {
    const COUNT = 250;

    const positions = new Float32Array(
      COUNT * 3
    );

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] =
        (Math.random() - 0.5) * 14;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 10;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 5;
    }

    return positions;
  }, []);

  /*
   * ANIMATION
   */
  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y +=
      delta * 0.02;

    pointsRef.current.rotation.x =
      Math.sin(performance.now() * 0.00005)
      * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default Particles;