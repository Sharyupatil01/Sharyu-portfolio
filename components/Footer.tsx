"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Sharyu Popat Patil</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Computer Engineering Student | Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/projects" className="hover:text-blue-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/leetcode" className="hover:text-blue-600">
                  LeetCode
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Sharyupatil01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sharyupatil01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Created with Love 💗 Sharyu Popat Patil.
          </p>
        </div>
      </div>
    </footer>
  );
}
