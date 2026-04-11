import { motion } from "framer-motion";

export default function SplitText({ children, className, delay = 0 }) {
  if (typeof children !== "string") {
    return <span className={className}>{children}</span>;
  }
  const words = children.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-1 me-[0.2em]">
          <motion.span
            className="inline-block origin-bottom"
            initial={{ y: "100%", rotate: 5 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: delay + i * 0.05,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
