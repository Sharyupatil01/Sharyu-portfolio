"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DeveloperCard() {
  const developer = {
    name: "Sharyu  Patil",
    role: "Full-Stack Developer",
    expertise: ["Java", "React", "Node.js", "JavaScript", "AI/ML"],
    passion: "Building scalable apps",
    currentlyLearning: "Exploring AI/LLM",
    funFact: "365-day LeetCode streak! 🔥",
  };

  // ---------------- Typing Animation Logic ----------------
  const lines = [
    `const developer = {`,
    `  name: "${developer.name}",`,
    `  role: "${developer.role}",`,
    `  expertise: [${developer.expertise.map(e => `"${e}"`).join(", ")}],`,
    `  passion: "${developer.passion}",`,
    `  currentlyLearning: "${developer.currentlyLearning}",`,
    `  funFact: "${developer.funFact}"`,
    `};`,
  ];

  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLines(prev => [...prev, lines[index]]);
      index++;
      if (index === lines.length) clearInterval(interval);
    }, 500); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="
        p-6 rounded-2xl max-w-md backdrop-blur-xl
        bg-white/10 dark:bg-black/20 
        border border-white/20 dark:border-white/10 
        shadow-xl text-green-200 font-mono text-sm leading-relaxed
      "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      style={{ cursor: "grab" }}
    >
      {/* Floating Animation */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {displayedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}

        {/* Blinking Cursor */}
        <span className="text-green-300 animate-pulse">|</span>
      </motion.div>
    </motion.div>
  );
}
