"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import clsx from "clsx";
// const ButtonWrapper = () => {
//   return (
//     <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
//       <SpotlightButton />
//     </div>
//   );
// };
type SpotlightButtonProps = {
  textButton: string;
  classNames?: string;
  classNamesSpan?: string;
};

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  textButton = "Boton",
  classNames = "",
  classNamesSpan = "",
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current!.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current!.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef?.current?.addEventListener("mousemove", handleMouseMove);
    btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef?.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={clsx(
        "relative w-full max-w-64 overflow-hidden rounded-lg bg-blueRadial px-4 py-3 text-lg font-medium text-white",
        classNames
      )}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference text-grisClarito">
        {textButton}
      </span>
      <span
        ref={spanRef}
        className={clsx(
          "pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-sky-200",
          classNamesSpan
        )}
      />
    </motion.button>
  );
};

export default SpotlightButton;
