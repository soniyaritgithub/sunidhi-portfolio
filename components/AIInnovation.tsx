"use client";

import { motion } from "framer-motion";

export default function AIInnovation() {
  return (
    <motion.section
      id="ai-innovation"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
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
        mb-10
        "
      >
        AI &{" "}
        <span
          className="
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Innovation
        </span>
      </h2>

      {/* Container */}
      <div
        className="
        max-w-5xl
        mx-auto
        glass
        p-6
        sm:p-8
        md:p-10
        rounded-3xl
        border
        border-cyan-500/10
        hover:border-cyan-500/30
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        transition-all
        duration-500
        "
      >
        <div className="space-y-5">
          <p
            className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-300
            leading-8
            "
          >
            ✓ Built projects using AI-assisted development
          </p>

          <p
            className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-300
            leading-8
            "
          >
            ✓ Used ChatGPT for rapid prototyping
          </p>

          <p
            className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-300
            leading-8
            "
          >
            ✓ Leveraged AI tools for debugging & optimization
          </p>

          <p
            className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-300
            leading-8
            "
          >
            ✓ Exploring AI Security & Prompt Engineering
          </p>
        </div>
      </div>
    </motion.section>
  );
}