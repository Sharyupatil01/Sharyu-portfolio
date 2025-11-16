"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="text-blue-600 hover:text-blue-700">
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.details || project.description}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
                {project.slug === "gyaan-shaala" && (
                  <>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>JWT-based authentication system with secure password hashing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Course management with rich content support</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Cloudinary integration for secure file uploads</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Razorpay payment gateway integration</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>MongoDB database for scalability</span>
                    </li>
                  </>
                )}
                {project.slug === "sentiment-analysis" && (
                  <>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>TF-IDF vectorization for text processing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Logistic Regression model with 85%+ accuracy</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Cross-validation and proper train-test split</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Movie review dataset analysis</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Comprehensive preprocessing pipeline</span>
                    </li>
                  </>
                )}
                {project.slug === "fin-pilot" && (
                  <>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>React frontend with responsive Tailwind CSS design</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>FastAPI backend for high performance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>LangChain RAG for AI-powered recommendations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Personalized financial advisory</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Real-time market data integration</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Get Started</h2>
              <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Want to explore or contribute to this project?
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Repository
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Other Projects</h2>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
