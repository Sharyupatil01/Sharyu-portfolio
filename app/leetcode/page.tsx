"use client";

import { motion } from "framer-motion";

export default function LeetCodePage() {
  const stats = [
    {
      label: "Problems Solved",
      value: "600+",
      icon: "🏆",
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

  const milestones = [
    { title: "🎯 First 100 Problems", desc: "Mastered basics of DSA patterns" },
    { title: "🔥 300 Problems", desc: "Solved medium-level questions consistently" },
    { title: "🚀 600+ Problems", desc: "Expert in DSA, recursion & DP" },
    {
      title: "🌟 Codolio Profile",
      desc: "Verified achievements across all platforms",
      link: "https://codolio.com/profile/psharyu01",
    },
  ];

  const progressData = [50, 150, 320, 450, 600]; // fake graph data

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
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              My competitive programming journey and problem-solving statistics
            </p>

            {/* Coding Journey */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-mono">
              {"// "} I have solved <span className="text-green-600 font-bold">600+ DSA problems</span> across LeetCode, GFG & Codolio.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://leetcode.com/u/sharyu01/"
                target="_blank"
                className="px-8 py-3 border border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
              >
                LeetCode Profile →
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://codolio.com/profile/psharyu01"
                target="_blank"
                className="px-8 py-3 border border-purple-500 text-purple-600 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
              >
                Codolio Profile →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
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
                className={`p-6 bg-gradient-to-br ${stat.color} rounded-lg text-white shadow-lg`}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Graph */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">📈 Coding Progress Graph</h2>

          <div className="w-full h-56 bg-white dark:bg-gray-700 rounded-xl shadow-md p-4 flex items-end gap-4">
            {progressData.map((value, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${value / 7}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-md"
              ></motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Badges & Milestones</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border"
              >
                <h3 className="text-2xl font-bold mb-2">{m.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{m.desc}</p>

                {m.link && (
                  <a
                    href={m.link}
                    target="_blank"
                    className="text-blue-500 font-semibold underline"
                  >
                    View Codolio →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Follow My Journey</h2>
        <p className="text-xl mb-8 opacity-90">
          Tracking my progress one problem at a time 🚀
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://leetcode.com/u/sharyu01/"
          target="_blank"
          className="px-8 py-3 border border-white rounded-lg font-semibold hover:bg-white/20"
        >
          LeetCode Profile →
        </motion.a>
      </section>
    </main>
  );
}
