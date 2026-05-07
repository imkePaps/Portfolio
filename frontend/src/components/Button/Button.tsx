import styles from "./Button.module.css";

type Props = {
  text: string;
  variant?: "primary" | "secondary";
};

function Button({ text, variant = "primary" }: Props) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>{text}</button>
  );
}

export default Button;
