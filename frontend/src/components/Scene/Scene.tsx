import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import Aurora from "./Aurora";
import Particles from "./Particles";

function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const canvas = containerRef.current?.querySelector("canvas");
        if (!canvas) return;

        // Pause rendering when out of view
        if (!entry.isIntersecting) {
          canvas.style.pointerEvents = "none";
          canvas.style.opacity = "0.5";
        } else {
          canvas.style.pointerEvents = "auto";
          canvas.style.opacity = "1";
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        frameloop="always"
      >
        <Aurora />
        {/* <FloatingOrb
          position={[2, 1, -2]}
          color="#7dd3fc"
        /> */}
        <Particles />
      </Canvas>
    </div>
  );
}

export default Scene;
