"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingLineProps {
  text: string;
  delay: number;
  className?: string;
  includeSpace?: boolean;
}

export default function TypingLine({
  text,
  delay,
  className = "",
  includeSpace = false,
}: TypingLineProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const startTime = Date.now() + delay * 1000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const typingSpeed = 20; // ms per character - faster typing
      const newIndex = Math.floor(elapsed / typingSpeed);

      if (newIndex >= text.length) {
        setDisplayedText(text);
        setIsComplete(true);
        clearInterval(interval);
      } else {
        setDisplayedText(text.slice(0, newIndex));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      <span>{displayedText}</span>
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, times: [0, 0.5, 1] }}
          className="inline-block w-2 h-4 bg-cyan-400 ml-1"
        />
      )}
      {isComplete && includeSpace && <span>&nbsp;</span>}
    </div>
  );
}
