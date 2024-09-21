import { useEffect, useRef } from "react";
import { MotionTransitionProps } from "./MotionTransition.types";
import { useAnimation, useInView, motion } from "framer-motion";
import { fadeIn } from "@/lib/transitions";

export function FadeInRotateTransition(props: MotionTransitionProps) {
  const { children, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeInRotate = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.7 } },
  };

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeInRotate}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
