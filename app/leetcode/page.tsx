"use client";

import { motion } from "framer-motion";

export default function LeetCodePage() {
  const stats = [
    {
      label: "Problems Solved",
      value: "200+",
      icon: "✓",
      color: "from-blue-600 to-cyan-500",
    },
    {
      label: "Current Streak",
      value: "365 Days",
      icon: "🔥",
      color: "from-amber-600 to-orange-500",
    },
    {
      label: "Acceptance Rate",
      value: "85%+",
      icon: "📈",
      color: "from-green-600 to-emerald-500",
    },
    {
      label: "Global Rank",
      value: "Top 10%",
      icon: "👑",
      color: "from-purple-600 to-indigo-500",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                LeetCode & Coding
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Competitive programming journey and coding statistics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://leetcode.com/u/sharyu01/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                LeetCode Profile →
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://medium.com/@sharyu2701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Medium Blog →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 bg-gradient-to-br ${stat.color} rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Skills Mastered</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Data Structures",
              "Algorithms",
              "Dynamic Programming",
              "Graph Theory",
              "String Manipulation",
              "Array Problems",
              "Tree Traversal",
              "Linked Lists",
              "Hash Maps",
              "Binary Search",
              "Two Pointers",
              "Sliding Window",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg border-l-4 border-blue-600 shadow"
              >
                <p className="font-semibold text-lg">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Problem Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: "Easy", count: "120+", color: "from-green-500 to-emerald-600" },
              { level: "Medium", count: "70+", color: "from-amber-500 to-yellow-600" },
              { level: "Hard", count: "15+", color: "from-cyan-500 to-blue-600" },
            ].map((difficulty, index) => (
              <motion.div
                key={difficulty.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 bg-gradient-to-br ${difficulty.color} text-white rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow`}
              >
                <p className="text-lg opacity-90 mb-2">{difficulty.level} Level</p>
                <p className="text-5xl font-bold">{difficulty.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Blog Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Latest from Medium</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Article */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Authentication Beyond Login
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Secret Behind Netflix's One Device Streaming Restriction
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Explore how Netflix manages device streaming restrictions through advanced authentication mechanisms and session management.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://medium.com/@sharyu2701/authentication-beyond-login-the-secret-behind-netflixs-one-device-streaming-restriction-269e2a8b155e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded font-semibold hover:shadow-lg transition-shadow"
                >
                  Read on Medium →
                </motion.a>
              </div>
            </motion.div>

            {/* Medium Profile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-3">My Medium Blog</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Sharing insights on web development, authentication, streaming technologies, and advanced programming concepts through detailed technical articles.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://medium.com/@sharyu2701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-900 text-white rounded font-semibold hover:shadow-lg transition-shadow text-center"
              >
                Visit All Articles →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "365-Day Streak",
                description: "Solved at least one problem every day for a full year",
                icon: "🔥",
              },
              {
                title: "Consistent Grinder",
                description: "Regular problem solver improving daily",
                icon: "💪",
              },
              {
                title: "Problem Diversity",
                description: "Strong understanding of various DSA concepts",
                icon: "🎯",
              },
              {
                title: "Top Performer",
                description: "Ranked in top 10% globally on LeetCode",
                icon: "👑",
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border-2 border-blue-200 dark:border-cyan-600 shadow hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Follow My Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Check out my LeetCode profile and Medium blog for insights and solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://leetcode.com/u/sharyu01/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                LeetCode Profile →
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://medium.com/@sharyu2701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white"
              >
                Medium Blog →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
