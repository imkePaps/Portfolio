import { Suspense, lazy, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

const Scene = lazy(() => import("../components/Scene/Scene"));
const CursorGlow = lazy(() => import("../components/CursorGlow/CursorGlow"));

import styles from "./MainLayout.module.css";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  const location = useLocation();
  const [showDecor, setShowDecor] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    setShowDecor(true);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const showScene = isHomePage && showDecor && isDesktop;

  return (
    <div className={styles.layout}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />
      {showScene ? (
        <Suspense fallback={null}>
          <div className={styles.scene}>
            <Scene />
          </div>
          <CursorGlow />
        </Suspense>
      ) : null}

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default MainLayout;
