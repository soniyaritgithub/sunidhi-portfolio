"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";
import Lottie from "lottie-react";
import wavingGirl from "@/animations/waving-girl.json";


export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-24
      "
    >
      <div
  className="
  max-w-7xl
  mx-auto
  grid
  grid-cols-1
  lg:grid-cols-2
  gap-8
  lg:gap-16
  px-4
  sm:px-6
  "
>
      <div
  className="
  text-center
  lg:text-left
  w-full
  max-w-full
  overflow-hidden
  "
>
        {/* Open To Opportunities */}
        <div className="flex justify-center lg:justify-start">
         <span
  className="
  px-5
  py-2
  rounded-full
  border
  border-pink-500/30
  bg-pink-500/10
  bg-gradient-to-r
  from-pink-400
  via-purple-400
  to-violet-500
  bg-clip-text
  text-transparent
  font-medium
  "
> 
  Open To Opportunities
</span>
        </div>

        {/* Name */}
        <motion.h1
   className="
  text-3xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  xl:text-8xl
  font-bold
  leading-tight
  break-words
  "
>
  <span className="text-white">
    Sunidhi
  </span>{" "}
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
    Shinde
  </span>
</motion.h1>

        {/* Typewriter Wrapper */}
<div
  className="
  min-h-[60px]
  sm:min-h-[80px]
  "
>
  <TypeAnimation
    sequence={[
      "// Full Stack Developer",
      2000,
      "// React Developer",
      2000,
      "// Cyber Security Enthusiast",
      2000,
    ]}
    repeat={Infinity}
    className="
    text-xl
    sm:text-2xl
    md:text-3xl
    lg:text-4xl
    text-cyan-400
    mt-6
    font-semibold
    leading-relaxed
break-words
    "
  />
</div>

<div
  className="
  flex
  flex-col
  sm:flex-row
  flex-wrap
  gap-3
  mt-6
  justify-center
  lg:justify-start
  items-center
  "
>
  <span
    className="
    px-4
    sm:px-5
    py-2
    rounded-full
    bg-gradient-to-r
    from-cyan-500/20
    to-blue-500/20
    border border-cyan-500/30
    text-cyan-300
    text-xs
    sm:text-sm
    md:text-base
    backdrop-blur-md
    hover:scale-105
    transition-all
    duration-300
    "
  >
    🚀 AI-Powered Full Stack Developer
  </span>

  <span
    className="
    px-4
    sm:px-5
    py-2
    rounded-full
    bg-gradient-to-r
    from-purple-500/20
    to-pink-500/20
    border border-purple-500/30
    text-purple-300
    text-xs
    sm:text-sm
    md:text-base
    backdrop-blur-md
    hover:scale-105
    transition-all
    duration-300
    "
  >
    🤖 Exploring Generative AI & Cyber Security
  </span>
</div>

        {/* Description */}
       <p
  className="
  mt-8
  text-gray-400
  max-w-3xl
  mx-auto
  text-xl
  "
>
  B.Tech CSE graduate passionate about building modern digital solutions with{" "}
  
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
    Full Stack Development
  </span>
  ,{" "}
  
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
    React
  </span>
  ,{" "}
  
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
    Next.js
  </span>
  ,{" "}
  
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
    Python
  </span>
  {" "}and{" "}
  
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
    Cyber Security
  </span>
  .
</p>

{/* Terminal Animation */}

<div
 className="
 mt-10
 w-full
 max-w-2xl
 overflow-hidden
 "
>
  <div
    className="
    glass
    floating
    border
    border-cyan-500/20
    rounded-3xl
    overflow-hidden
    shadow-[0_0_30px_rgba(34,211,238,0.15)]
    "
  >
    {/* Terminal Header */}

    <div
      className="
      flex
      items-center
      gap-2
      px-4
      py-3
      border-b
      border-white/10
      "
    >
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />

      <span
        className="
        text-xs
        sm:text-sm
        text-gray-400
        ml-2
        "
      >
        terminal
      </span>
    </div>

    {/* Terminal Content */}

    <div
      className="
p-4
sm:p-6
font-mono
text-xs
sm:text-sm
md:text-base
break-words
"
    >
      <p className="terminal-line">
        &gt; Initializing Portfolio...
      </p>

      <p className="terminal-line delay-1">
        &gt; Loading AI Toolkit...
      </p>

      <p className="terminal-line delay-2">
        &gt; Loading Full Stack Projects...
      </p>

      <p className="terminal-line delay-2">
        &gt; Activating Cyber Security Modules...
      </p>

      <p className="terminal-line delay-3 text-cyan-400">
        &gt; Ready for Opportunities.
      </p>
    </div>
  </div>
</div>

        {/* Buttons */}
        <div
  className="
  flex
  flex-wrap
  flex
flex-col
sm:flex-row
justify-center
lg:justify-start
gap-4
w-full
  mt-10
  "
>
  {/* View Projects */}
  <a
    href="#projects"
    className="
    group
    relative
    overflow-hidden
    px-6
    sm:px-7
    lg:px-8
    py-3
    sm:py-4
    rounded-2xl
    bg-gradient-to-r
    from-cyan-500
    via-blue-500
    to-purple-500
    text-white
    text-sm
    sm:text-base
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
    "
  >
    View Projects
  </a>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download
    className="
    group
    px-6
    sm:px-7
    lg:px-8
    py-3
    sm:py-4
    rounded-2xl
    glass
    border
    border-white/10
    text-white
    text-sm
    sm:text-base
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    hover:border-cyan-500/40
    hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
    "
  >
    Download Resume
  </a>

  {/* Contact Me */}
  <a
    href="#contact"
    className="
    group
    px-6
    sm:px-7
    lg:px-8
    py-3
    sm:py-4
    rounded-2xl
    border
    border-pink-500/30
    bg-pink-500/5
    text-white
    text-sm
    sm:text-base
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    hover:bg-gradient-to-r
    hover:from-pink-500
    hover:via-purple-500
    hover:to-violet-500
    hover:border-transparent
    hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
    "
  >
    Contact Me
  </a>
</div>

        {/* Social Icons */}
       <div className="flex justify-center lg:justify-start gap-6 mt-8">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-gray-400
            hover:text-cyan-400
            transition
            "
          >
            <FaGithub size={30} />
          </a>

          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-gray-400
            hover:text-cyan-400
            transition
            "
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Stats Cards */}
        <div
  className="
  grid
  w-full
  max-w-full
  grid-cols-2
  sm:grid-cols-2
  lg:grid-cols-4
  gap-4
  sm:gap-6
  mt-16
  
  "
>
          <div className="
glass
p-4
sm:p-5
rounded-2xl
text-center
min-h-[120px]
flex
flex-col
justify-center
">
            <h3 className="text-cyan-400 text-2xl
sm:text-3xl
lg:text-4xl font-bold">
              10+
            </h3>
           <p className="text-gray-300 text-sm sm:text-base">
              Projects
            </p>
          </div>

          <div className="
glass
p-4
sm:p-5
rounded-2xl
text-center
min-h-[120px]
flex
flex-col
justify-center
">
            <h3 className="text-cyan-400 text-2xl
sm:text-3xl
lg:text-4xl font-bold">
              20+
            </h3>
           <p className="text-gray-300 text-sm sm:text-base">
              AI Prompts
            </p>
          </div>

          <div className="
glass
p-4
sm:p-5
rounded-2xl
text-center
min-h-[120px]
flex
flex-col
justify-center
">
            <h3 className="text-cyan-400 text-2xl
sm:text-3xl
lg:text-4xl font-bold">
              15+
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Certificates
            </p>
          </div>
          </div>
</div>

<div
  className="
  relative
  flex
  justify-center
  items-center
  "
>
  <div
    className="
    absolute
    w-72
    h-72
    sm:w-96
    sm:h-96
    bg-pink-500/20
    blur-[120px]
    rounded-full
    "
  />

  <Lottie
  animationData={wavingGirl}
  loop
  className="
  floating
  relative
  -mt-10
  sm:-mt-12
  lg:-mt-99
  w-[260px]
  sm:w-[320px]
  md:w-[420px]
  lg:w-[450px]
  h-auto
  "
/>


</div>

        </div>
    
    </section>
  );
}