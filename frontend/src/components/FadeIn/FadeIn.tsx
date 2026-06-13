import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
};

function FadeIn({ children, delay = 0, y = 10 }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }
      }
      whileInView={
        { opacity: 1, y: 0 }
      }
      viewport={{
        once: true,
        amount: 0.05, 
        margin: "-10% 0px -10% 0px", 
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;