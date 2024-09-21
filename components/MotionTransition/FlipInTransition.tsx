import { useEffect, useRef } from "react";
import { MotionTransitionProps } from "./MotionTransition.types";
import { useAnimation, useInView, motion } from "framer-motion";

export function FlipInTransition(props: MotionTransitionProps) {
  const { children, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const flipIn = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <div ref={ref}>
      <motion.div
        variants={flipIn}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
