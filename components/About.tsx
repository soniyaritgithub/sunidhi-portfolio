"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-32 px-6"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* Heading */}
        <h2
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          break-words
          "
        >
          Built on
          <span className="text-cyan-400">
            {" "}Fundamentals
          </span>
        </h2>

        {/* Content Layout */}
        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          mt-20
          items-center
          "
        >
          {/* Left Side */}
          <div className="flex justify-center">
            <Image
              src="/profile.png"
              alt="Sunidhi"
              width={400}
              height={400}
              className="
              rounded-3xl
              border
              border-cyan-500/20
              "
            />
          </div>

          {/* Right Side */}
          <div>
            <p className="text-gray-400 text-lg leading-8">
              B.Tech CSE graduate passionate about building scalable
              web applications using React, Next.js, Python and modern
              technologies. I enjoy solving real-world problems,
              developing responsive web experiences, and continuously
              improving my technical skills through projects and learning.
            </p>

            {/* Stats Grid */}
            <div
  className="
  grid
  grid-cols-2
  gap-3
  sm:gap-4
  mt-10
  w-full
  "
>
              <div
  className="
  glass
  p-4
  sm:p-6
  rounded-2xl
  min-h-[140px]
  flex
  flex-col
  justify-center
  items-center
  text-center
  "
>
                <h3
    className="
    text-2xl
    sm:text-3xl
    md:text-4xl
    text-cyan-400
    font-bold
    "
  >
                  10+
                </h3>
                <p className="text-gray-300 mt-2">
                  Projects
                </p>
              </div>

              <div
  className="
  glass
  p-4
  sm:p-6
  rounded-2xl
  min-h-[140px]
  flex
  flex-col
  justify-center
  items-center
  text-center
  "
>
                <h3
    className="
    text-2xl
    sm:text-3xl
    md:text-4xl
    text-cyan-400
    font-bold
    "
  >
                  10+
                </h3>
                <p className="text-gray-300 mt-2">
                  Skills
                </p>
              </div>

              <div
  className="
  glass
  p-4
  sm:p-6
  rounded-2xl
  min-h-[140px]
  flex
  flex-col
  justify-center
  items-center
  text-center
  "
>
  <h3
    className="
    text-2xl
    sm:text-3xl
    md:text-4xl
    text-cyan-400
    font-bold
    "
  >
    15+
  </h3>

  <p
    className="
    text-gray-300
    mt-2
    text-xs
    sm:text-sm
    md:text-base
    break-words
    leading-tight
    "
  >
    Certificates
  </p>
</div>

              <div
  className="
  glass
  p-3
  sm:p-4
  rounded-2xl
  text-center
  min-h-[140px]
  flex
  flex-col
  justify-center
  "
>
                <h3
  className="
  text-cyan-400
  text-xl
  sm:text-2xl
  lg:text-3xl
  font-bold
  break-words
  "
>
                  B.Tech
                </h3>
                <p
  className="
  text-gray-300
  text-sm
  sm:text-base
  break-words
  "
>
                  CSE Graduate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}