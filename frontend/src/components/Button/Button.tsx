import styles from "./Button.module.css";

type Props = {
  text: string;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
};

function Button({ text, variant = "primary", ariaLabel }: Props) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      aria-label={ariaLabel || text}
    >
      {text}
    </button>
  );
}

export default Button;
