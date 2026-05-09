import { useRef } from "react";
import type { ReactNode } from "react";
import { throttle } from "../../utils/throttle";

type Props = {
  children: ReactNode;
};

function Magnetic({ children }: Props) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = throttle((e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    elementRef.current.style.transform = `translate(${x * 0.15}px, ${
      y * 0.15
    }px)`;
  }, 16);

  const handleMouseLeave = () => {
    if (!elementRef.current) return;

    elementRef.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.25s ease",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export default Magnetic;
