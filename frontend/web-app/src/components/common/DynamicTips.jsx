import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function DynamicTips({ tips }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!tips || tips.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tips]);

  if (!tips || tips.length === 0) return null;

  return (
    <div className="w-full flex justify-center h-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-6 py-1.5 rounded-full bg-primary/5 border border-primary/10"
        >
          <Sparkles size={12} className="text-primary animate-pulse shrink-0" />
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-primary/70 italic whitespace-nowrap overflow-hidden">
            {tips[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
