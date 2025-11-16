"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* Breadcrumb */}
      <div className="backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border-b border-white/20 dark:border-gray-700/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <motion.div whileHover={{ x: -5 }}>
            <Link href="/projects" className="text-blue-600 dark:text-blue-300 hover:underline">
              ← Back to Projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Project Header */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 p-10 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mt-4 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 backdrop-blur-md bg-white/20 dark:bg-gray-900/20 
                  border border-white/30 dark:border-gray-700/40 text-blue-600 
                  dark:text-blue-300 rounded-full text-sm font-medium shadow"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* TRANSPARENT BUTTON */}
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold 
              backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 
              border border-blue-400/40 text-blue-700 dark:text-blue-300 
              shadow-lg hover:shadow-blue-300/40 hover:bg-white/20 transition"
            >
              View on GitHub →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Overview */}
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 p-8 rounded-xl border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {project.details || project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 p-8 rounded-xl border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                {/* (Existing conditional project-based features) */}
                {project.slug === "gyaan-shaala" && (
                  <>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> JWT-based authentication</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> Course management system</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> Cloudinary integration</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> Razorpay payments</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> Scalable MongoDB backend</li>
                  </>
                )}

                {project.slug === "sentiment-analysis" && (
                  <>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> TF-IDF Vectorization</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> Logistic Regression (85% accuracy)</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> Clean preprocessing pipeline</li>
                  </>
                )}

                {project.slug === "fin-pilot" && (
                  <>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> FastAPI backend</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> LangChain RAG</li>
                    <li className="flex gap-3"><span className="text-blue-600">✓</span> Real-time market analysis</li>
                  </>
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 p-8 rounded-xl border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="p-4 backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 
                      border border-white/20 dark:border-gray-700/20 rounded-lg shadow"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 p-8 rounded-xl border border-white/20 dark:border-gray-700/20 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Get Started</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Want to explore or contribute to this project?
              </p>

              {/* Transparent Button */}
              <motion.a
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-semibold 
                backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 
                border border-blue-500/40 text-blue-600 dark:text-blue-300 
                shadow-lg hover:shadow-blue-400/40 hover:bg-white/20 transition"
              >
                View Repository →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg font-semibold 
              backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 
              border border-blue-500/40 text-blue-600 dark:text-blue-300 
              shadow-lg hover:shadow-blue-400/40 hover:bg-white/20 transition"
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
