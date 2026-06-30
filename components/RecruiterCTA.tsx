"use client";

import { motion } from "framer-motion";

export default function RecruiterCTA() {
  return (
    <section
      id="recruiter-cta"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
        max-w-6xl
        mx-auto
        glass
        rounded-3xl
        p-8
        sm:p-10
        lg:p-14
        border
        border-cyan-500/20
        text-center
        relative
        overflow-hidden
        "
      >
        {/* Morphing Gradient Background */}
        <div
          className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
          "
        >
          <div className="morphing-blob morph-1" />
          <div className="morphing-blob morph-2" />
          <div className="morphing-blob morph-3" />
        </div>

        {/* Base Glow */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/5
          to-purple-500/10
          "
        />

        <div className="relative z-10">

          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-center
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Lets Build Something Amazing
          </h2>

          <p
            className="
            mt-6
            text-gray-400
            text-sm
            sm:text-base
            md:text-lg
            max-w-3xl
            mx-auto
            leading-7
            sm:leading-8
            "
          >
            Currently open to exciting opportunities where I can
            contribute, learn and grow while building impactful
            digital solutions across Full Stack Development,
            Cyber Security and AI-powered technologies.
          </p>

          {/* Opportunities */}

          <div
            className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            max-w-4xl
            mx-auto
            "
          >
            <div
              className="
              glass
              p-4
              rounded-2xl
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-1
              hover:border-cyan-500/30
              hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
              "
            >
              ✓ Full Stack Developer Roles
            </div>

            <div
              className="
              glass
              p-4
              rounded-2xl
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-1
              hover:border-cyan-500/30
              hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
              "
            >
              ✓ Cyber Security Roles
            </div>

            <div
              className="
              glass
              p-4
              rounded-2xl
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-1
              hover:border-cyan-500/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
              "
            >
              ✓ AI Related Opportunities
            </div>

            <div
              className="
              glass
              p-4
              rounded-2xl
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-1
              hover:border-cyan-500/30
              hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]
              "
            >
              ✓ Software Engineering Roles
            </div>
          </div>

          {/* Buttons */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            mt-10
            "
          >
            <a
              href="#contact"
              className="
              floating
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-500
              text-white
              font-semibold
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-1
              hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
              "
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="
              floating
              px-8
              py-4
              rounded-2xl
              border
              border-cyan-500/30
              glass
              text-white
              font-semibold
              transition-all
              duration-500
              hover:scale-105
              hover:-translate-y-1
              hover:border-cyan-500/50
              hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
              "
            >
              Download Resume
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}