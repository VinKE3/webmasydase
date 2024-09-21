"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function RevealRotate({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, rotate: 45 },
          visible: { opacity: 1, y: 0, rotate: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
