import { useEffect, useRef } from "react";
import { MotionTransitionProps } from "./MotionTransition.types";
import { useAnimation, useInView, motion } from "framer-motion";
import { fadeIn } from "@/lib/transitions";

export function SlideInLeftTransition(props: MotionTransitionProps) {
  const { children, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const slideInLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div ref={ref}>
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
