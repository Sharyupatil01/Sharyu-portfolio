"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
  color: string;
  isVisible: boolean;
  side: "left" | "right";
}

export default function SkillCard({
  title,
  skills,
  color,
  isVisible,
  side,
}: SkillCardProps) {
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
        delayChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${side === "left" ? "text-right" : "text-left"} min-h-fit`}
    >
      {/* Category Header */}
      <div className={`flex items-center gap-3 mb-6 ${side === "left" ? "justify-end" : "justify-start"}`}>
        <h3
          className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent font-mono`}
        >
          {`const ${title.replace(/\s+/g, "")} = [`}
        </h3>
      </div>

      {/* Skills Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className={`flex flex-wrap gap-3 ${side === "left" ? "justify-end" : "justify-start"}`}
      >
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            variants={skillVariants}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 font-mono text-sm font-semibold border-2 rounded-lg transition-all duration-300 ${getColorClasses(
                color
              )} hover:shadow-lg backdrop-blur-sm bg-transparent hover:shadow-2xl`}
            >
              <span className="text-gray-500 dark:text-gray-400">
                "
              </span>
              <span>{skill}</span>
              <span className="text-gray-500 dark:text-gray-400">
                "
              </span>
              {skillIndex < skills.length - 1 && (
                <span className="text-gray-500 dark:text-gray-400">
                  ,
                </span>
              )}
            </motion.div>

            {/* Glow effect on hover */}
            <div
              className={`absolute -inset-1 bg-gradient-to-br ${color} rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 -z-10`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Closing bracket */}
      <div className={`mt-2 text-gray-500 dark:text-gray-400 font-mono ${side === "left" ? "text-right pr-0" : "text-left pl-0"}`}>
        <span
          className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}
        >
          ]
        </span>
        <span>;</span>
      </div>
    </motion.div>
  );
}
