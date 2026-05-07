import { useRef } from "react";

import styles from "./Button.module.css";

type Props = {
  text: string;
  variant?: "primary" | "secondary";
};

function Button({
  text,
  variant = "primary",
}: Props) {
  const buttonRef =
    useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!buttonRef.current) return;

    const rect =
      buttonRef.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    buttonRef.current.style.transform = `
      translate(${x * 0.15}px, ${
      y * 0.15
    }px)
    `;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    buttonRef.current.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <button
      ref={buttonRef}
      className={`${styles.button} ${
        styles[variant]
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
}

export default Button;