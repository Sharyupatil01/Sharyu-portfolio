"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  const achievements = [
    {
      title: "200+ LeetCode Problems",
      description: "Solved 200+ coding problems on LeetCode",
      icon: "🏆",
    },
    {
      title: "365-Day Streak",
      description: "Maintained consistent coding practice for 365 days",
      icon: "🔥",
    },
    {
      title: "Full-Stack Developer",
      description: "Proficient in modern web technologies and frameworks",
      icon: "💻",
    },
    {
      title: "Open Source",
      description: "Active contributor to open-source projects",
      icon: "🌟",
    },
  ];

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I'm Sharyu Popat Patil, a passionate Computer Engineering student
              (2026 batch) from Pimpri, Maharashtra. I specialize in building
              scalable, user-centric web applications using modern technologies
              like React, Next.js, and Node.js.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Beyond development, I'm deeply interested in AI/ML, competitive
              programming, and exploring how technology can solve real-world
              problems. When I'm not coding, you'll find me on LeetCode or
              working on side projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </motion.a>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-lg border border-blue-200/50 dark:border-purple-600/50 text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build something amazing together. Feel free to reach out!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}