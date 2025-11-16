"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MediumPost {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const mediumPosts: MediumPost[] = [
  {
    id: "1",
    title: "Authentication Beyond Login: The Secret Behind Netflix's One-Device Streaming Restriction",
    description:
      "Dive deep into how Netflix implements device-level authentication and streaming restrictions. Learn about session management, token-based auth, and multi-device orchestration strategies.",
    link: "https://medium.com/@sharyu2701/authentication-beyond-login-the-secret-behind-netflixs-one-device-streaming-restriction-269e2a8b155e",
    category: "Backend",
    readTime: "8 min read",
    date: "Nov 2024",
    featured: true,
  },
  {
    id: "2",
    title: "When Your App Goes From 100 to 10,000 Users: Vertical vs Horizontal Scaling",
    description:
      "Explore the challenges of scaling applications from 100 to 10,000 users. Understand when to scale vertically vs horizontally and make informed architectural decisions.",
    link: "https://medium.com/@sharyu2701/when-your-apps-goes-from-100-to-10-000-users-vertical-vs-horizontal-scaling-ced1e8fb2d46",
    category: "DevOps",
    readTime: "10 min read",
    date: "Oct 2024",
    featured: true,
  },
];

export default function MediumPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white/50 via-blue-50/30 to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50 backdrop-blur-lg">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Medium Articles
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
              Technical insights on backend development, scaling, and system design
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://medium.com/@sharyu2701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              View All Articles on Medium
            </motion.a>
          </motion.div>

          {/* Featured Posts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          >
            {mediumPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/60 dark:border-gray-700/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Featured Badge */}
                {post.featured && (
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Category & Meta */}
                <div className="flex gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {post.date}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Link */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors"
                >
                  Read Article →
                </motion.a>
              </motion.article>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 backdrop-blur-md border border-blue-200/40 dark:border-blue-500/20 rounded-2xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Articles on Medium
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  2+
                </p>
                <p className="text-gray-700 dark:text-gray-300">Technical Articles</p>
              </div>
              <div>
                <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  18+ min
                </p>
                <p className="text-gray-700 dark:text-gray-300">Total Read Time</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Follow me on Medium to stay updated with latest technical articles
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://medium.com/@sharyu2701"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Follow on Medium
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-3 border-2 border-blue-600 dark:border-purple-600 text-blue-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
