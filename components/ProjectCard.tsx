"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import type { Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: index * 0.1 + 0.1,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: index * 0.1 + 0.15 + i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
      }}
      className="group relative h-full bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/30 dark:border-gray-700/40 shadow-md hover:shadow-2xl transition-all duration-300"
      style={{ perspective: "1000px" }}
    >
      {/* Header Gradient */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.5 }}
        className={`h-56 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-black/30 group-hover:bg-black/10"
          animate={{
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.1 + 0.2,
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-white text-4xl font-extrabold tracking-wide drop-shadow-xl text-center px-4 z-10"
        >
          {project.title}
        </motion.span>
      </motion.div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          custom={0}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 tracking-tight"
        >
          {project.title}
        </motion.h3>

        {/* Longer Description */}
        <motion.p
          custom={1}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3"
        >
          {project.description || project.shortDescription}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          custom={2}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.technologies.slice(0, 3).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1 + 0.3 + i * 0.05,
                duration: 0.3,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-300/40 dark:border-gray-600/40 text-gray-900 dark:text-gray-100 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          custom={3}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3"
        >
          {/* Glass Button */}
          <motion.div
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="block w-full px-4 py-2.5 rounded-lg text-center font-semibold text-sm
              bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-gray-600/60
              text-gray-900 dark:text-gray-100
              hover:bg-white/50 dark:hover:bg-white/20 transition-all shadow-sm"
            >
              View Details
            </Link>
          </motion.div>

          {/* GitHub Button */}
          <motion.a
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={project.link}
            target="_blank"
            className="flex-1 px-4 py-2.5 rounded-lg text-center font-semibold text-sm border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Glow Decoration */}
      <motion.div
        className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 rounded-full blur-3xl -mr-20 -mt-20 transition-all`}
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.article>
  );
}
