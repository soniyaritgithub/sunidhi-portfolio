"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🏆",
    title: "10+ Real World Projects",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: "🎓",
    title: "15+ Certifications",
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    icon: "🤖",
    title: "AI Assisted Development",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: "🔐",
    title: "Cyber Security Enthusiast",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    icon: "💻",
    title: "Full Stack Developer",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
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
        Highlights
      </h2>

      {/* Cards */}
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-6
        "
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className={`
            glass
            relative
            overflow-hidden
            rounded-3xl
            p-6
            sm:p-8
            border
            border-white/10
            cursor-pointer
            transition-all
            duration-500
            hover:scale-105
            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
            bg-gradient-to-br
            ${item.color}
            `}
          >
            {/* Glow Effect */}
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

            {/* Icon */}
            <div
              className="
              relative
              text-5xl
              mb-5
              animate-pulse
              "
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3
              className="
              relative
              text-base
              sm:text-lg
              font-semibold
              leading-7
              text-white
              "
            >
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}