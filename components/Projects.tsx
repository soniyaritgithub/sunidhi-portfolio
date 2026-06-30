"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";


export default function Projects() {
  return (
    <div id="resume-analyzer">
    <motion.section
    id="projects" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 scroll-mt-28"
    >
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
        Projects
      </h2>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="
  relative
  overflow-hidden
  glass
  rounded-3xl
  border
  border-cyan-500/20
  shadow-[0_0_40px_rgba(34,211,238,0.18)]
  mb-16
  "
>
  <div
className="
absolute
inset-0
bg-gradient-to-r
from-cyan-500/10
via-transparent
to-purple-500/10
"
/>
<div
className="
relative
z-10
grid
grid-cols-1
lg:grid-cols-2
gap-10
items-center
p-6
sm:p-8
lg:p-12
"
>
  <div>
    <div
className="
inline-flex
items-center
gap-2
mb-6
px-4
py-2
rounded-full
bg-cyan-500/10
border
border-cyan-500/30
text-cyan-300
text-sm
font-medium
"
>
🚀 Featured AI Project
</div>
<h3
className="
text-3xl
sm:text-4xl
font-bold
"
>

AI Resume Analyzer

</h3>
<p
className="
mt-6
text-gray-300
leading-8
text-sm
sm:text-base
"
>

An AI-powered Resume Analyzer that evaluates resumes using Google Gemini AI. It provides ATS Score, Skills Gap Analysis, Missing Keywords Detection and personalized Career Suggestions.

</p>
<div
className="
flex
flex-wrap
gap-3
mt-8
"
>

{[
"ATS Score",
"Skills Gap",
"Keywords",
"Career Suggestions",
"Gemini AI",
].map((item)=>(

<span
key={item}
className="
glass
px-4
py-2
rounded-full
text-sm
hover:scale-105
transition-all
"
>

{item}

</span>

))}

</div>
<h4
className="
mt-10
mb-4
font-semibold
text-cyan-400
"
>

Tech Stack

</h4>
<div
className="
grid
grid-cols-2
sm:grid-cols-3
gap-3
"
>

{[
"React",
"Vite",
"Tailwind",
"Framer Motion",
"Axios",
"Node.js",
"Express",
"Multer",
"PDF.js",
"Gemini AI",
].map((tech)=>(

<div
key={tech}
className="
glass
rounded-xl
py-2
text-center
text-sm
hover:scale-105
transition-all
"
>

{tech}

</div>

))}

</div>
<div
className="
flex
flex-col
sm:flex-row
gap-4
mt-10
"
>
  <a
href="https://skillmatch-ai-resume-analyzer.vercel.app/"
target="_blank"
rel="noopener noreferrer"
className="
flex-1
text-center
px-6
py-3
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-500
font-semibold
hover:scale-105
transition-all
"
>

Live Demo

</a>
<a
href="https://github.com/soniyaritgithub/skillmatch-ai-resume-analyzer"
target="_blank"
rel="noopener noreferrer"
className="
flex-1
text-center
px-6
py-3
rounded-xl
glass
border
border-cyan-500/20
hover:scale-105
transition-all
"
>

GitHub

</a>
<a
href="https://skillmatch-ai-resume-analyzer.onrender.com"
target="_blank"
rel="noopener noreferrer"
className="
flex-1
text-center
px-6
py-3
rounded-xl
glass
border
border-cyan-500/20
hover:scale-105
transition-all
"
>

Backend API

</a>
</div>

  </div>
  <div className="relative">
    <div className="absolute top-4 left-4 text-4xl animate-bounce">
🤖
</div>

<div className="absolute top-8 right-6 text-3xl animate-pulse">
✨
</div>

<div className="absolute bottom-10 left-8 text-3xl animate-pulse">
⚡
</div>

<div className="absolute bottom-6 right-6 text-4xl animate-bounce">
🧠
</div>
<Image
src="/projects/skillmatch-ai.png"
alt="AI Resume Analyzer"
width={1600}
height={900}
className="
w-full
h-56
sm:h-72
lg:h-[420px]
rounded-3xl
object-cover
transition-all
duration-700
hover:scale-105
"
/>
<div
className="
grid
grid-cols-2
sm:grid-cols-5
gap-3
mt-6
"
>

{[
"ATS Score",
"AI Powered",
"Gemini API",
"PDF Analysis",
"Real-Time",
].map((item)=>(

<div
key={item}
className="
glass
rounded-xl
py-3
text-center
text-sm
"
>

{item}

</div>

))}

</div>
  </div>
</div>
</motion.div>
      <div
  className="
  grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-3
  gap-6
  lg:gap-8
  "
>
        {portfolioData.projects.map((project) => (
          <div
            key={project.title}
            className="
            group
            glass
            p-4
            sm:p-6
            rounded-3xl
            w-full
            max-w-full
            overflow-hidden
            hover:scale-105
            hover:-translate-y-2
            hover:shadow-2xl
            hover:shadow-cyan-500/20
            transition-all
            duration-300
            "
          >
            {/* Responsive Image Container */}
            <div
              className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="
                w-full
                h-48
                sm:h-56
                md:h-64
                object-cover
                rounded-xl
                transition-all
                duration-500
                group-hover:scale-105
                "
              />
            </div>

            <h3
              className="
              text-lg
              sm:text-xl
              font-bold
              mt-4
              break-words
              "
            >
              {project.title}
            </h3>

            <p
              className="
              mt-3
              text-gray-300
              text-sm
              sm:text-base
              leading-relaxed
              break-words
              "
            >
              {project.description}
            </p>
            <div
  className="
  flex
  flex-col
  sm:flex-row
  gap-3
  mt-5
  "
>
  {/* Go Live Button */}
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="
    flex
    items-center
    justify-center
    gap-2
    px-4
    py-3
    rounded-xl
    font-semibold
    text-sm
    sm:text-base
    text-white
    bg-gradient-to-r
    from-cyan-500
    via-blue-500
    to-purple-500
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]
    w-full
    "
  >
    <HiOutlineExternalLink size={18} />
    Go Live
  </a>

  {/* GitHub Button */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
    flex
    items-center
    justify-center
    gap-2
    px-4
    py-3
    rounded-xl
    font-semibold
    text-sm
    sm:text-base
    text-white
    border
    border-pink-500/30
    bg-pink-500/5
    transition-all
    duration-300
    hover:scale-105
    hover:bg-gradient-to-r
    hover:from-pink-500
    hover:via-purple-500
    hover:to-violet-500
    hover:border-transparent
    hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]
    w-full
    "
  >
    <FaGithub size={18} />
    GitHub
  </a>
</div>
          </div>
        ))}
      </div>
    </motion.section>
    </div>
  );
}