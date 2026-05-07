import type { ReactNode } from "react";

import Navbar from "../components/Navbar/Navbar";

import styles from "./MainLayout.module.css";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;