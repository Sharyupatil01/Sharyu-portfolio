"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DeveloperCard from "./DeveloperCard";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sharyu Popat Patil
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              Computer Engineering Student | Full-Stack Developer
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Passionate about building scalable web applications, exploring AI/ML, and solving complex problems through code. 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-gradient-to-p from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow inline-block"
                >
                  View My Work
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sharyupatil01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/sharyu01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                LeetCode
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <DeveloperCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
