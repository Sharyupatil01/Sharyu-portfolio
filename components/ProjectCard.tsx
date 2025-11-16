"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const gradients = [
  "from-blue-500 via-blue-400 to-cyan-400",
  "from-purple-500 via-pink-500 to-red-500",
  "from-green-500 via-emerald-400 to-teal-400",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
      className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Gradient Background */}
      <div className={`h-56 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        <div className="absolute -inset-1/2 bg-white/10 blur-3xl animate-pulse" />
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white text-3xl font-bold text-center relative z-10 px-4"
        >
          {project.title}
        </motion.span>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-2xl font-bold mb-3 text-gray-900 dark:text-white"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed"
        >
          {project.shortDescription}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={tech}
              className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                i === 0
                  ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                  : i === 1
                  ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                  : "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Link
              href={`/projects/${project.slug}`}
              className={`block w-full px-4 py-2.5 bg-gradient-to-r ${gradient} text-white rounded-lg hover:shadow-lg transition-all font-semibold text-center text-sm`}
            >
              View Details
            </Link>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all font-semibold text-center text-sm"
          >
            GitHub
          </motion.a>
        </div>
      </div>

      {/* Decorative Element */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-300`} />
    </motion.article>
  );
}
