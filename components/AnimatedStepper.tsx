"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";

interface StepperDotProps {
  index: number;
  isActive: boolean;
  label: string;
}

export default function AnimatedStepper({
  steps,
  onStepComplete,
}: {
  steps: string[];
  onStepComplete: (index: number) => void;
}) {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  // Dot animation variants
  const dotContainerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  const dotVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
      },
    }),
  };

  const glowVariants = {
    pulse: {
      boxShadow: [
        "0 0 10px rgba(168, 85, 247, 0.5)",
        "0 0 30px rgba(236, 72, 153, 0.8)",
        "0 0 10px rgba(168, 85, 247, 0.5)",
      ],
      scale: [1, 1.15, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.3 + 0.2,
      },
    }),
  };

  // Handle step completion animation
  const handleStepComplete = (index: number) => {
    const newCompleted = [...completedSteps];
    newCompleted[index] = true;
    setCompletedSteps(newCompleted);
    onStepComplete(index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Stepper Container */}
      <div className="relative w-full flex flex-col items-center">
        {/* Vertical Line Background */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/20 to-transparent" />

        {/* Dots and Steps */}
        <div className="relative w-full flex flex-col gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={dotContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="relative w-full flex items-center justify-center"
            >
              {/* Connecting Line (between dots) */}
              {index < steps.length - 1 && (
                <motion.div
                  custom={index}
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-400 to-pink-400 origin-top"
                  style={{ top: "100%" }}
                />
              )}

              {/* Animated Dot */}
              <motion.div
                custom={index}
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                onAnimationComplete={() => handleStepComplete(index)}
              >
                <motion.div
                  variants={glowVariants}
                  animate="pulse"
                  className="relative w-16 h-16 flex items-center justify-center"
                >
                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-60" />

                  {/* Main Dot */}
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-purple-300">
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-80" />

                    {/* Step Number */}
                    <span className="relative text-white font-bold text-lg z-10">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Step Label */}
              <motion.div
                custom={index}
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="absolute left-1/2 transform -translate-x-1/2 mt-20 text-center"
              >
                <p className="text-sm font-semibold text-purple-200 whitespace-nowrap bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-500/30">
                  {step}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
