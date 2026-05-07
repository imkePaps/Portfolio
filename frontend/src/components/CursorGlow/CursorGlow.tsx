import { useEffect, useRef } from "react";

import styles from "./CursorGlow.module.css";

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const position = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.08;

      position.current.y += (mouse.current.y - position.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(
            ${position.current.x}px,
            ${position.current.y}px,
            0
          ) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} />;
}

export default CursorGlow;
