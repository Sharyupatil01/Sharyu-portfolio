"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
      }}
      className="px-4 py-2 rounded-full text-sm font-semibold
      bg-gradient-to-r from-purple-500/20 to-pink-500/20
      border border-purple-400/50 hover:border-pink-400/80
      text-purple-100 hover:text-pink-100
      transition-all duration-300 cursor-default
      backdrop-blur-sm shadow-lg hover:shadow-pink-500/50"
    >
      {skill}
    </motion.span>
  );
}
