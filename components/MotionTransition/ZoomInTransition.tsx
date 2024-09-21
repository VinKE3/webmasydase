import { useEffect, useRef } from "react";
import { MotionTransitionProps } from "./MotionTransition.types";
import { useAnimation, useInView, motion } from "framer-motion";
import { fadeIn } from "@/lib/transitions";

export function ZoomInTransition(props: MotionTransitionProps) {
  const { children, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref}>
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
