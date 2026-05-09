import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import Aurora from "./Aurora";
import Particles from "./Particles";

function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const canvas = containerRef.current?.querySelector("canvas");

        if (!canvas) return;

        if (!entry.isIntersecting) {
          canvas.style.opacity = "0";

          canvas.style.pointerEvents = "none";
        } else {
          canvas.style.opacity = "1";

          canvas.style.pointerEvents = "auto";
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* DISABLE R3F ON MOBILE */
  if (isMobile) {
    return null;
  }

  return (
    <div ref={containerRef}>
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          frameloop="always"
          gl={{
            antialias: false,
            powerPreference: "high-performance",
          }}
          camera={{
            position: [0, 0, 5],
            fov: 45,
          }}
        >
          <Aurora />

          <Particles />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Scene;
