"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const codeSnippet = `const developer = {
  name: "Sharyu Popat Patil",
  role: "Full-Stack Developer",
  expertise: [
    "Java",
    "React",
    "Node.js",
    "Javascript",
    "AI/ML"
  ],
  passion: "Building scalable apps",
  currentlyLearning: "AI/LLM",
  funFact: "I prefer coding at day time ! 🔥"
};`;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* UPDATED NAME GRADIENT */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Sharyu Popat Patil
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              Computer Engineering Student | Full-Stack Developer
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Passionate about building scalable web applications, exploring AI/ML, and solving complex problems through code. 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* UPDATED BUTTON GRADIENT */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow inline-block"
                >
                  View My Work
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-blue-600 dark:border-purple-600 text-blue-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors inline-block"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="https://github.com/Sharyupatil01"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sharyupatil01/"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/sharyu01/"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                LeetCode
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative bg-gray-900 dark:bg-gray-950 rounded-2xl p-6 border border-purple-500/30 shadow-2xl overflow-hidden">

              {/* Code Window Controls */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Code Content */}
              <pre className="text-sm md:text-xs font-mono text-gray-300 overflow-x-auto">
                <code>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    {codeSnippet.split("\n").map((line, i) => (
                      <div key={i} className="hover:bg-purple-500/10 px-2 py-1 transition-colors">
                        <span className="text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="ml-4">{line}</span>
                      </div>
                    ))}
                  </motion.div>
                </code>
              </pre>

              {/* Glow */}
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
