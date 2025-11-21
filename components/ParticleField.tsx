"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles
    const particleCount = 50;
    const generatedParticles: Particle[] = Array.from(
      { length: particleCount },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // 1px to 3px
        duration: Math.random() * 15 + 20, // 20-35s duration
        delay: Math.random() * 5, // 0-5s delay
      })
    );
    setParticles(generatedParticles);
  }, []);

  const particleVariants = {
    animate: {
      y: [0, -200],
      opacity: [0.1, 0.4, 0.2, 0],
      scale: [0.8, 1.2, 0.8],
      x: [0, (Math.random() * 100 - 50)],
    },
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dark gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent dark:to-gray-900/10" />

      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
          }}
          animate={{
            y: `${particle.y - 150}%`,
            opacity: [0, 0.3, 0.4, 0.1, 0],
            scale: [0.5, 1, 1.2, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: `hsl(220, 70%, 60%)`, // Blue-ish particles for light mode
            filter: "blur(0.5px)",
            boxShadow: "0 0 4px rgba(59, 130, 246, 0.6)",
          }}
        />
      ))}

      {/* Dark mode particle color override */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          :root {
            --particle-color: hsl(200, 80%, 70%);
            --particle-glow: rgba(100, 200, 255, 0.8);
          }
        }
      `}</style>
    </div>
  );
}
