import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  blur?: boolean;
}

export default function ScrollReveal({ 
  children, 
  width = "100%", 
  delay = 0,
  className = "",
  direction = "up",
  blur = false
}: ScrollRevealProps) {
  
  const getHiddenState = () => {
    let state: any = { opacity: 0 };
    switch(direction) {
      case "up": state.y = 50; break;
      case "down": state.y = -50; break;
      case "left": state.x = 50; break;
      case "right": state.x = -50; break;
      case "scale": state.scale = 0.92; break;
      case "none": break;
    }
    if (blur) {
      state.filter = "blur(8px)";
    }
    return state;
  };

  const getVisibleState = () => {
    let state: any = { opacity: 1, y: 0, x: 0, scale: 1 };
    if (blur) {
      state.filter = "blur(0px)";
    }
    return state;
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        initial={getHiddenState()}
        whileInView={getVisibleState()}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}