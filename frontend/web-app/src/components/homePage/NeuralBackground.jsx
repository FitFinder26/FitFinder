import { motion, useScroll, useTransform } from "framer-motion";
import React, { useMemo } from "react";

export default function NeuralBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax movement for the background layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 0.8, 0.8, 0.4]);

  // Generate a stable set of random "neural nodes"
  const nodes = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Layer 1: The Brutalist Grid */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:80px_80px]" />
      </motion.div>

      {/* Layer 2: Neural Nodes (Pulsing points) */}
      <motion.div style={{ y: y2, opacity }} className="absolute inset-0">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-primary/40 shadow-[0_0_20px_rgba(250,88,126,0.5)]"
            style={{
              left: node.left,
              top: node.top,
              width: node.size,
              height: node.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3: The Scanning Line (Fit Processing) */}
      <motion.div
        animate={{
          top: ["-10%", "110%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_20px_rgba(250,88,126,0.5)] z-10"
      />

      {/* Layer 4: Depth Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)] opacity-80" />
    </div>
  );
}
