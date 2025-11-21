"use client";

import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

export default function AnimatedBackground() {
  return (
    <>
      {/* Static Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" />

      {/* Animated Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <ParticleField />
      </div>

      {/* Light rays / Ambient light effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 z-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Content will appear on top with z-20+ */}
    </>
  );
}
