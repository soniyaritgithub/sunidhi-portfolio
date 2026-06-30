"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGooglegemini,
  SiVercel,
  SiRender,
  SiPostman,
} from "react-icons/si";


interface TechStackItem {
  title: string;
  icon: React.ReactNode;
  color: string;
  logos: React.ReactNode[];
  skills: string[];
}
const techStacks: TechStackItem[] = [
  {
    title: "Frontend",
   icon: <FaReact />,
    color: "from-cyan-500/20 to-blue-500/20",
    logos: [
  <FaReact key="react" />,
  <SiNextdotjs key="next" />,
  <SiTypescript key="ts" />,
  <SiTailwindcss key="tailwind" />,
  <SiFramer key="framer" />,
],
    skills: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
   icon: <FaNodeJs />,
    color: "from-violet-500/20 to-fuchsia-500/20",
    logos: [
  <FaNodeJs key="node" />,
  <SiExpress key="express" />,
  <FaPython key="python" />,
  <SiDjango key="django" />,
],
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
    ],
  },
  {
    title: "Database",
    icon: <SiMongodb />,
    color: "from-emerald-500/20 to-cyan-500/20",
    logos: [
  <SiMongodb key="mongo" />,
  <SiMysql key="mysql" />,
],
    skills: [
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "AI",
    icon: <SiGooglegemini />,
    color: "from-pink-500/20 to-purple-500/20",
    logos: [
  <SiGooglegemini key="gemini" />,
],
    skills: [
      "Google Gemini AI",
      "Prompt Engineering",
      "ChatGPT",
      "Claude",
      "Cursor AI",
      "GitHub Copilot",
    ],
  },
  {
    title: "Deployment",
    icon: <SiVercel />,
    color: "from-orange-500/20 to-red-500/20",
    logos: [
  <SiVercel key="vercel" />,
  <SiRender key="render" />,
],
    skills: [
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Tools",
    icon: <FaGitAlt />,
    color: "from-yellow-500/20 to-orange-500/20",
    logos: [
  <FaGitAlt key="git" />,
  <FaGithub key="github" />,
  <FaGithub key="vscode" />,
  <SiPostman key="postman" />,
],
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
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
        Tech Stack
      </h2>

      <div
       className="
max-w-[1400px]
mx-auto
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
lg:gap-8
"
      >
        {techStacks.map((stack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           transition={{
  duration: 0.6,
  delay: index * 0.1,
}}
            className={`
            group
              glass
            relative
            overflow-hidden
            rounded-3xl
            min-h-[320px]
flex
flex-col
            p-6
            sm:p-8
            border
            border-white/10
            cursor-pointer
            transition-all
            duration-700
ease-out
            hover:scale-[1.03]
            hover:-translate-y-2
           hover:shadow-[0_0_55px_rgba(34,211,238,0.35)]
hover:border-cyan-400/40
            bg-gradient-to-br
            ${stack.color}
            `}
          >
            <div
  className="
  absolute
  inset-0
  opacity-0
  group-hover:opacity-100
  bg-gradient-to-br
  from-cyan-500/15
  via-transparent
  to-purple-500/10
  transition-all
  duration-700
  pointer-events-none
  rounded-3xl
  "
/>
            <div
className="
text-5xl
sm:text-6xl
mb-4
animate-pulse
text-cyan-400
drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]
"
>
              {stack.icon}
            </div>

          <div
  className="
    absolute
    top-4
    right-4
    text-6xl
    opacity-10
    group-hover:opacity-20
    transition-all
    duration-700
ease-out
    pointer-events-none
    select-none
  "
>
  {stack.icon}
</div>

            <h3
              className="
              text-lg
sm:text-xl
lg:text-2xl
              font-bold
              mb-4
              "
            >
              {stack.title}
            </h3>

          <div className="space-y-3 mt-auto">
              <div
  className="
  grid
  grid-cols-4
  sm:grid-cols-5
  gap-3
  sm:gap-4
  mt-6
  justify-items-center
  items-center
  "
>
  {stack.logos?.map((logo, i) => (
    <div
      key={i}
      className="
text-2xl
sm:text-3xl
lg:text-4xl
transition-all
duration-700
ease-out
ease-out
hover:scale-125
hover:-translate-y-2
hover:rotate-6
text-white
"
    >
      {logo}
    </div>
  ))}
</div>
              {stack.skills.map((skill) => (
                <div
                  key={skill}
                  className="
                 text-sm sm:text-base
md:text-base
leading-6
                  text-gray-200
                  flex
                  items-center
                  gap-2
                  "
                >
                  <span className="text-cyan-400">
                    ✓
                  </span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}