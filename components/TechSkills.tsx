"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Stepper from "./Stepper";
import SkillCard from "./SkillCardNew";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
  side: "left" | "right";
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    color: "from-blue-400 to-blue-600",
    side: "left",
  },
  {
    title: "Backend & DB",
    skills: ["Java", "Node.js", "Express.js", "MongoDB", "SQL", "FastAPI"],
    color: "from-purple-400 to-purple-600",
    side: "right",
  },
  {
    title: "Tools & Platforms",
    skills: ["Postman", "Render", "Vercel", "GitHub", "Git", "Docker"],
    color: "from-green-400 to-green-600",
    side: "left",
  },
  {
    title: "Core Strengths",
    skills: ["OOPs", "DSA", "Problem Solving", "Clean Code", "System Design"],
    color: "from-pink-400 to-pink-600",
    side: "right",
  },
];

export default function TechSkills() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set([0]));

  const handleStepReady = useCallback((step: number) => {
    setVisibleSteps((prev) => new Set([...prev, step]));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-mono">
            {"// "} Strong in OOP, DSA & Problem Solving
          </p>
        </motion.div>

        {/* Three Column Layout with Center Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start relative">
          {/* LEFT SKILLS */}
          <div className="space-y-12 flex flex-col justify-start">
            {skillCategories
              .filter((cat) => cat.side === "left")
              .map((category, idx) => {
                const stepIndex = skillCategories.indexOf(category);
                return (
                  <SkillCard
                    key={category.title}
                    title={category.title}
                    skills={category.skills}
                    color={category.color}
                    isVisible={visibleSteps.has(stepIndex)}
                    side="left"
                  />
                );
              })}
          </div>

          {/* CENTER STEPPER */}
          <div className="relative min-h-screen hidden lg:flex lg:items-start lg:justify-center">
            <Stepper
              totalSteps={skillCategories.length}
              onStepReady={handleStepReady}
            />
          </div>

          {/* RIGHT SKILLS */}
          <div className="space-y-12 flex flex-col justify-start">
            {skillCategories
              .filter((cat) => cat.side === "right")
              .map((category, idx) => {
                const stepIndex = skillCategories.indexOf(category);
                return (
                  <SkillCard
                    key={category.title}
                    title={category.title}
                    skills={category.skills}
                    color={category.color}
                    isVisible={visibleSteps.has(stepIndex)}
                    side="right"
                  />
                );
              })}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
            <span className="text-green-500">✓</span> Continuously learning and
            improving
          </p>
        </motion.div>
      </div>
    </section>
  );
}
