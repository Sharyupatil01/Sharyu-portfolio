"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StepperProps {
  totalSteps: number;
  onStepReady: (step: number) => void;
}

export default function Stepper({ totalSteps, onStepReady }: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(-1);

  useEffect(() => {
    // Trigger steps in sequence when component mounts and on scroll
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate through all steps
          totalSteps > 0 && setCurrentStep(0);
          const interval = setInterval(() => {
            setCurrentStep((prev) => {
              if (prev < totalSteps - 1) {
                onStepReady(prev + 1);
                return prev + 1;
              }
              return prev;
            });
          }, 600); // Step duration

          return () => clearInterval(interval);
        }
      });
    }, observerOptions);

    const element = document.getElementById("stepper-container");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [totalSteps, onStepReady]);

  const stepColors = [
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600",
    "from-green-400 to-green-600",
    "from-pink-400 to-pink-600",
  ];

  return (
    <div id="stepper-container" className="relative flex flex-col items-center h-full">
      {/* Main vertical glowing line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 origin-top"
        style={{
          background: "linear-gradient(to bottom, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.6), transparent)",
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
        }}
      />

      {/* Animated dot traveling down the line */}
      <motion.div
        animate={{
          y: currentStep >= 0 ? (currentStep * 240) : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 15px rgba(168, 85, 247, 0.6), 0 0 30px rgba(168, 85, 247, 0.3)",
              "0 0 30px rgba(236, 72, 153, 0.8), 0 0 50px rgba(236, 72, 153, 0.4)",
              "0 0 15px rgba(168, 85, 247, 0.6), 0 0 30px rgba(168, 85, 247, 0.3)",
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white shadow-2xl"
        />
      </motion.div>

      {/* Connector lines and step labels */}
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isLeft = index % 2 === 0;
        const stepColor = stepColors[index];

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: `${index * 240 + 12}px`,
            }}
          >
            {/* Horizontal connector line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={currentStep >= index ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: currentStep >= index ? 0.1 : 0,
              }}
              className={`absolute top-0 h-1 origin-left ${
                isLeft ? "right-full mr-2" : "left-full ml-2"
              }`}
              style={{
                width: "80px",
                background: `linear-gradient(${isLeft ? "to left" : "to right"}, rgba(168, 85, 247, 0.8), transparent)`,
                boxShadow: `0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(236, 72, 153, 0.3)`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
