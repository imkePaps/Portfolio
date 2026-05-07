import type { ReactNode } from "react";

import Navbar from "../components/Navbar/Navbar";
import Scene from "../components/Scene/Scene";
import CursorGlow from "../components/CursorGlow/CursorGlow";

import styles from "./MainLayout.module.css";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />
      <div className={styles.scene}>
        <Scene />
      </div>
      <CursorGlow />

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default MainLayout;
