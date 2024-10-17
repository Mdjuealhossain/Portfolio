"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Transition({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main initial="hidden" animate="visible" variants={variants} exit={{ opacity: 0, scale: 0.9 }}>
      {children}
    </motion.main>
  );
}
