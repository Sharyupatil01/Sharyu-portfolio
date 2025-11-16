"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4500); 
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 4 }}
      className="fixed inset-0 z-[999] backdrop-blur-xl bg-black/40 flex items-center justify-center"
    >
      {/* Code Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 border border-white/20 rounded-xl shadow-lg shadow-black/30 p-6 w-[90%] sm:w-[500px] font-mono text-sm text-white"
      >
        {/* Header dots */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        {/* Typing Text */}
        <div className="space-y-2 leading-relaxed">
          {/* Line 1 */}
          <motion.p
            className="text-pink-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Typing text="// Hey, Hello!!" delay={400} />
          </motion.p>

          {/* Line 2 */}
          <motion.p
            className="text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Typing
              text="// Thank you for taking out your time to see my work 💙"
              delay={1200}
            />
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------
   Typing Animation Component
-------------------------- */
function Typing({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === text.length) clearInterval(interval);
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}
