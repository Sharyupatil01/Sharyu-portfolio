"use client";

import { motion } from "framer-motion";
import TypingLine from "./TypingLine";

const developerData = {
  name: "Sharyu Popat Patil",
  role: "Full-Stack Developer",
  expertise: ["Java", "React", "Node.js", "Javascript", "AI/ML"],
  passion: "Building scalable apps",
  currentlyLearning: "Exploring AI/LLM",
  funFact: "365-day LeetCode streak! 🔥",
};

export default function DeveloperCard() {
  const lines = [
    { text: 'const developer = {', delay: 0, color: "text-purple-400" },
    {
      text: '  name: "Sharyu Popat Patil",',
      delay: 0.8,
      color: "text-gray-300",
    },
    {
      text: '  role: "Full-Stack Developer",',
      delay: 1.6,
      color: "text-gray-300",
    },
    { text: "  expertise: [", delay: 2.4, color: "text-gray-300" },
    {
      text: '    "Java",',
      delay: 3.0,
      color: "text-green-400",
    },
    {
      text: '    "React",',
      delay: 3.6,
      color: "text-green-400",
    },
    {
      text: '    "Node.js",',
      delay: 4.2,
      color: "text-green-400",
    },
    {
      text: '    "Javascript",',
      delay: 4.8,
      color: "text-green-400",
    },
    {
      text: '    "AI/ML"',
      delay: 5.4,
      color: "text-green-400",
    },
    { text: "  ],", delay: 6.0, color: "text-gray-300" },
    {
      text: '  passion: "Building scalable apps",',
      delay: 6.6,
      color: "text-gray-300",
    },
    {
      text: '  currentlyLearning: "Exploring AI/LLM",',
      delay: 7.4,
      color: "text-gray-300",
    },
    {
      text: '  funFact: "365-day LeetCode streak! 🔥"',
      delay: 8.2,
      color: "text-gray-300",
    },
    { text: "};", delay: 8.8, color: "text-purple-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative group">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

        {/* Glass Card */}
        <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-white/20 shadow-2xl overflow-hidden transition-all duration-300">
          {/* Top decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />

          {/* Chrome tabs styling */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
            <span className="ml-3 text-xs text-gray-400 font-mono">developer.js</span>
          </div>

          {/* Code content */}
          <div className="space-y-0 relative z-10">
            {lines.map((line, idx) => (
              <TypingLine
                key={idx}
                text={line.text}
                delay={line.delay}
                className={`${line.color} font-mono text-sm leading-6`}
              />
            ))}
          </div>

          {/* Bottom glow effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
