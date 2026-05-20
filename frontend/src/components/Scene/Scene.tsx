import { Canvas } from "@react-three/fiber";
import {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import Aurora from "./Aurora";
import Particles from "./Particles";

function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const [isTabVisible, setIsTabVisible] = useState(true);

  /*
   * MOBILE DETECTION
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  /*
   * VIEWPORT VISIBILITY
   */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * TAB VISIBILITY
   */
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  /*
   * DISABLE ON MOBILE
   */
  if (isMobile) {
    return null;
  }

  const shouldRender =
    isVisible && isTabVisible;

  return (
    <div ref={containerRef}>
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          frameloop={
            shouldRender ? "always" : "demand"
          }
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