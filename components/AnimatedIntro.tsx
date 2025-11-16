"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedIntro() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center"
    >
      <div className="relative w-32 h-32">
        {/* Rotating rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />

        <motion.div
          className="absolute inset-4 rounded-full border-4 border-transparent border-b-white border-l-white"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />

        {/* Center text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.p
              className="text-white font-bold text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Sharyu
            </motion.p>
            <motion.p
              className="text-white/80 text-xs mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Developer
            </motion.p>
          </div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            animate={{
              x: Math.cos((i / 5) * Math.PI * 2) * 50,
              y: Math.sin((i / 5) * Math.PI * 2) * 50,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              repeat: Infinity,
            }}
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-4px",
              marginTop: "-4px",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
