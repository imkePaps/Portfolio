import { useFrame } from "@react-three/fiber";

import { Mesh } from "three";

import { useRef } from "react";

function Aurora() {
  const ribbon1 = useRef<Mesh>(null!);
  const ribbon3 = useRef<Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    ribbon1.current.position.x =
      Math.sin(time * 0.12) * 0.4;

    ribbon1.current.rotation.z =
      -0.9 + Math.sin(time * 0.1) * 0.08;

      0.5 + Math.cos(time * 0.08) * 0.08;

    ribbon3.current.position.y =
      Math.sin(time * 0.15) * 0.3;

    ribbon3.current.rotation.z =
      -0.4 + Math.sin(time * 0.12) * 0.06;
  });

  return (
    <>
      {/* TOP RIGHT */}
      <mesh
        ref={ribbon1}
        position={[7, 4, -3]}
      >
        <planeGeometry args={[2, 18]} />

        <meshBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.08}
        />
      </mesh>
     

      {/* LOWER FLOW */}
      <mesh
        ref={ribbon3}
        position={[-3, -5, -3]}
      >
        <planeGeometry args={[10, 12]} />

        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.05}
        />
      </mesh>
    </>
  );
}

export default Aurora;