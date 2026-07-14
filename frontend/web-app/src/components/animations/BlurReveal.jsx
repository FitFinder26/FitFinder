import { motion } from "framer-motion";

export default function BlurReveal({ children, className, delay = 0, duration = 1.2 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
