"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
 
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-blue-400 to-blue-600"
  
  },
  {
    category: "Backend & DB",
    skills: ["Java", "Node.js", "Express.js", "MongoDB"],
    color: "from-purple-400 to-purple-600"
  
  },
  {
    category: "Tools & Platforms",
    skills: ["Postman", "Render", "Vercel", "GitHub", "Git"],
    color: "from-green-400 to-green-600"
   
  },
  {
    category: "Core Strengths",
    skills: ["OOPs", "DSA", "Problem Solving", "Clean Code"],
    color: "from-pink-400 to-pink-600"
   
  },
];

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

// ✅ FIXED: Removed `type: "spring"` (causing incompatibility)
const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Skills() {
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

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
               
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-mono`}
                >
                  {`const ${category.category.replace(/\s+/g, "")} = [`}
                </h3>
              </div>

              {/* Skills Container */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pl-8 flex flex-wrap gap-3 justify-start"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skill} variants={skillVariants} className="relative group">
                    <motion.div
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-5 py-2 font-mono text-sm font-semibold border-2 rounded-lg transition-all duration-300 ${getColorClasses(
                        category.color
                      )} hover:shadow-lg backdrop-blur-sm bg-transparent hover:shadow-2xl`}
                    >
                      <span className="text-gray-500 dark:text-gray-400">"</span>
                      <span>{skill}</span>
                      <span className="text-gray-500 dark:text-gray-400">"</span>
                      {skillIndex < category.skills.length - 1 && (
                        <span className="text-gray-500 dark:text-gray-400">,</span>
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
              <div className="pl-8 mt-2 text-gray-500 dark:text-gray-400 font-mono">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  ]
                </span>
                <span>;</span>
              </div>
            </motion.div>
          ))}
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
            <span className="text-green-500">✓</span> Continuously learning and improving
          </p>
        </motion.div>
      </div>
    </section>
  );
}
