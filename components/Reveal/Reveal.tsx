"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function Reveal({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: string;
}) {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const isDark = theme === "dark";
  const [bgColor, setBgColor] = useState("#0B3C6C");

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    // Cambia el color de fondo después de que el componente se haya montado en el cliente
    setBgColor(theme === "dark" ? "#6DE4E8" : "#0B3C6C");
  }, [theme]);

  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
      <>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          exit="hidden"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: bgColor,
            zIndex: 20,
          }}
        ></motion.div>
      </>
    </div>
  );
}
