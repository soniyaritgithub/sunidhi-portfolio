"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    icon: "🤖",
    title: "Started Using ChatGPT",
    description: "Began exploring AI tools for learning and productivity.",
    glow: "from-cyan-500/20 to-blue-500/20",
  },
  {
    year: "2025",
    icon: "⚡",
    title: "AI-Assisted Development",
    description: "Used AI tools for coding, debugging and project development.",
    glow: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    year: "2025",
    icon: "🧠",
    title: "Prompt Engineering",
    description: "Learned effective prompting techniques and workflows.",
    glow: "from-pink-500/20 to-purple-500/20",
  },
  {
    year: "2025",
    icon: "🚀",
    title: "AI Tools Integration",
    description: "Integrated modern AI tools into development workflow.",
    glow: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    year: "2026",
    icon: "🛡️",
    title: "AI Security Learning",
    description: "Exploring AI security concepts and safe AI practices.",
    glow: "from-orange-500/20 to-red-500/20",
  },
  {
    year: "2026",
    icon: "✨",
    title: "Building AI Applications",
    description: "Developing AI-powered web applications and solutions.",
    glow: "from-indigo-500/20 to-cyan-500/20",
  },
];

export default function AIJourney() {
  return (
    <section
      id="ai-journey"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <h2
        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-14
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-500
        bg-clip-text
        text-transparent
        "
      >
        AI Journey
      </h2>

      <div className="max-w-6xl mx-auto">
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`
              glass
              relative
              overflow-hidden
              p-6
              sm:p-8
              rounded-3xl
              border
              border-white/10
              cursor-pointer
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
              bg-gradient-to-br
              ${item.glow}
              `}
            >
              {/* Animated Glow */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                hover:opacity-100
                transition-all
                duration-700
                bg-gradient-to-r
                from-cyan-500/10
                via-transparent
                to-purple-500/10
                "
              />

              {/* Year Badge */}
              <div
                className="
                inline-block
                px-4
                py-1
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                text-cyan-300
                text-lg
                sm:text-xl
                font-bold
                "
              >
                {item.year}
              </div>

              {/* AI Icon */}
              <div
                className="
                text-4xl
                mt-4
                animate-pulse
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                mt-4
                text-lg
                sm:text-xl
                font-bold
                text-white
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                mt-3
                text-sm
                sm:text-base
                text-gray-300
                leading-7
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}