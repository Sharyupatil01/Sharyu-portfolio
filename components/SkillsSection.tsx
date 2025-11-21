"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Backend & DB",
    skills: ["Java", "Node.js", "Express.js", "MongoDB", "SQL", "FastAPI"],
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Tools & Platforms",
    skills: ["Postman", "Render", "Vercel", "GitHub", "Git", "Docker"],
    color: "from-green-400 to-green-600",
  },
  {
    title: "Core Strengths",
    skills: ["OOPs", "DSA", "Problem Solving", "Clean Code", "System Design"],
    color: "from-pink-400 to-pink-600",
  },
];

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    "from-blue-400 to-blue-600":
      "text-blue-400 border-blue-400/40 hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-blue-500/20",
    "from-purple-400 to-purple-600":
      "text-purple-400 border-purple-400/40 hover:border-purple-400 hover:bg-purple-400/10 hover:shadow-purple-500/20",
    "from-green-400 to-green-600":
      "text-green-400 border-green-400/40 hover:border-green-400 hover:bg-green-400/10 hover:shadow-green-500/20",
    "from-pink-400 to-pink-600":
      "text-pink-400 border-pink-400/40 hover:border-pink-400 hover:bg-pink-400/10 hover:shadow-pink-500/20",
  };
  return colorMap[color] || colorMap["from-blue-400 to-blue-600"];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
  const [activeStep, setActiveStep] = useState<number>(-1);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-mono">
            {"// "} Strong in OOP, DSA & Problem Solving
          </p>
        </motion.div>

        {/* Three Column Layout: Left Skills | Center Stepper | Right Skills */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* LEFT SKILLS - Frontend, Tools */}
            <div className="space-y-8">
              {[0, 2].map((categoryIndex) => {
                const category = skillCategories[categoryIndex];
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <h3
                        className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-mono`}
                      >
                        {`const ${category.title.replace(/\s+/g, "")} = [`}
                      </h3>
                    </div>

                    {/* Skills Container */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="pl-6 flex flex-wrap gap-3 justify-start"
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          variants={skillVariants}
                          className="relative group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2 font-mono text-sm font-semibold border-2 rounded-lg transition-all duration-300 ${getColorClasses(
                              category.color
                            )} hover:shadow-lg backdrop-blur-sm bg-transparent hover:shadow-2xl`}
                          >
                            <span className="text-gray-500 dark:text-gray-400">
                              "
                            </span>
                            <span>{skill}</span>
                            <span className="text-gray-500 dark:text-gray-400">
                              "
                            </span>
                            {skillIndex < category.skills.length - 1 && (
                              <span className="text-gray-500 dark:text-gray-400">
                                ,
                              </span>
                            )}
                          </motion.div>

                          {/* Glow effect on hover */}
                          <div
                            className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 -z-10`}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Closing bracket */}
                    <div className="pl-6 mt-2 text-gray-500 dark:text-gray-400 font-mono">
                      <span
                        className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        ]
                      </span>
                      <span>;</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER STEPPER */}
            <div className="flex flex-col items-center justify-start">
              <div className="relative">
                {/* Vertical stepper with dots */}
                <div className="space-y-12">
                  {skillCategories.map((category, index) => {
                    const isEven = index % 2 === 0; // 0, 2 go to left; 1, 3 go to right
                    const arrowColor = skillCategories[index].color;
                    
                    return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="relative flex items-center justify-center gap-2"
                    >
                      {/* LEFT ARROW (for even indexes: 0, 2) */}
                      {isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.2,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-1"
                        >
                          <svg
                            className={`w-6 h-6 stroke-current bg-gradient-to-r ${arrowColor} bg-clip-text text-transparent`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      )}

                      {/* Animated Dot */}
                      <motion.div
                        animate={{
                          boxShadow:
                            activeStep >= index
                              ? [
                                  "0 0 10px rgba(168, 85, 247, 0.5)",
                                  "0 0 30px rgba(236, 72, 153, 0.8)",
                                  "0 0 10px rgba(168, 85, 247, 0.5)",
                                ]
                              : "0 0 5px rgba(168, 85, 247, 0.3)",
                          scale: activeStep >= index ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: activeStep >= index ? 2 : 0.3,
                          repeat: activeStep >= index ? Infinity : 0,
                        }}
                        className="relative flex-shrink-0 z-20"
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 ${
                            activeStep >= index
                              ? "bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg"
                              : "bg-gray-700 text-gray-400 border border-gray-600"
                          }`}
                        >
                          {index + 1}
                        </div>
                      </motion.div>

                      {/* RIGHT ARROW (for odd indexes: 1, 3) */}
                      {!isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.2,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-1"
                        >
                          <svg
                            className={`w-6 h-6 stroke-current bg-gradient-to-r ${arrowColor} bg-clip-text text-transparent`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </motion.div>
                      )}

                      {/* Step Label */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + 0.1,
                        }}
                        viewport={{ once: true }}
                        className="text-center mt-3"
                      >
                        <p className="text-xs font-semibold text-purple-200 whitespace-nowrap bg-gray-900/50 px-2 py-1 rounded-full backdrop-blur-sm border border-purple-500/30">
                          {category.title}
                        </p>
                      </motion.div>

                      {/* Connecting Line */}
                      {index < skillCategories.length - 1 && (
                        <div className="w-1 h-10 bg-gradient-to-b from-purple-500/50 to-transparent" />
                      )}
                    </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT SKILLS - Backend, Core Strengths */}
            <div className="space-y-8">
              {[1, 3].map((categoryIndex) => {
                const category = skillCategories[categoryIndex];
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <h3
                        className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-mono`}
                      >
                        {`const ${category.title.replace(/\s+/g, "")} = [`}
                      </h3>
                    </div>

                    {/* Skills Container */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="pl-6 flex flex-wrap gap-3 justify-start"
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          variants={skillVariants}
                          className="relative group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2 font-mono text-sm font-semibold border-2 rounded-lg transition-all duration-300 ${getColorClasses(
                              category.color
                            )} hover:shadow-lg backdrop-blur-sm bg-transparent hover:shadow-2xl`}
                          >
                            <span className="text-gray-500 dark:text-gray-400">
                              "
                            </span>
                            <span>{skill}</span>
                            <span className="text-gray-500 dark:text-gray-400">
                              "
                            </span>
                            {skillIndex < category.skills.length - 1 && (
                              <span className="text-gray-500 dark:text-gray-400">
                                ,
                              </span>
                            )}
                          </motion.div>

                          {/* Glow effect on hover */}
                          <div
                            className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 -z-10`}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Closing bracket */}
                    <div className="pl-6 mt-2 text-gray-500 dark:text-gray-400 font-mono">
                      <span
                        className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        ]
                      </span>
                      <span>;</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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
