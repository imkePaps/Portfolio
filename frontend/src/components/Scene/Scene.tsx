import { Canvas } from "@react-three/fiber";

import Aurora from "./Aurora";
import Particles from "./Particles";

function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <Aurora />

      <Particles />
    </Canvas>
  );
}

export default Scene;