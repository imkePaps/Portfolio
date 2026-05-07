import type { ReactNode } from "react";

import styles from "./Section.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function Section({ children, className = "", id }: Props) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {children}
    </section>
  );
}

export default Section;
