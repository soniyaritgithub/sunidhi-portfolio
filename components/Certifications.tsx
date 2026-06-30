"use client";

import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

const certifications = [
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    link: "/certificates/ccna.pdf",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    link: "/certificates/cybersecurity-essentials.pdf",
  },
  {
    title: "Intro to Software Engineering Virtual Experience Program",
    issuer: "Cisco",
    link: "/certificates/intro-software-engineering.pdf",
  },
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys",
    link: "/certificates/python-infosys.pdf",
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Developer Skills Network",
    link: "/certificates/sql-ibm.pdf",
  },
  {
    title: "Microsoft Learn AI Skills Challenge",
    issuer: "Microsoft",
    link: "/certificates/microsoft-ai.pdf",
  },
  {
    title: "Recipe API Backend Web Development Bootcamp",
    issuer: "DevTown & Microsoft Learn",
    link: "/certificates/recipe-api-bootcamp.pdf",
  },
  {
    title: "JavaScript for Beginners – Complete Introduction to JS",
    issuer: "Udemy",
    link: "/certificates/javascript-udemy.pdf",
  },
  {
    title: "HTML & CSS Certification Course",
    issuer: "Udemy",
    link: "/certificates/html-css-udemy.pdf",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco",
    link: "/certificates/programming-essentials-python.pdf",
  },
  {
    title: "Back-End Engineering",
    issuer: "Forage",
    link: "/certificates/backend-engineering-forage.pdf",
  },
  {
    title: "Web Design: Efficient Workflow",
    issuer: "LinkedIn Learning",
    link: "/certificates/web-design-linkedin.pdf",
  },
  {
    title: "Web Development & Designing Internship",
    issuer: "The Sparks Foundation",
    link: "/certificates/sparks-foundation.pdf",
  },
  {
    title: "E-Summit'23 Organizing Committee",
    issuer: "Medi-Caps University",
    link: "/certificates/esummit23.pdf",
  },
  {
    title: "C/C++ Programming",
    issuer: "Code Mantra",
    link: "/certificates/cpp-code-mantra.pdf",
  },
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <h2
  className="
  frozen-text
  text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
font-bold
  font-extrabold
  leading-tight
  tracking-tight
  text-center
  break-words
  px-2
  mb-8
  sm:mb-10
  md:mb-12
  "
>
  Certifications
</h2>

      <div
        className="
max-w-7xl
mx-auto
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-4
sm:gap-5
lg:gap-6
"
      >
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            glass
p-4
sm:p-4
lg:p-5
min-h-[180px]
rounded-2xl
sm:rounded-3xl
            block
            cursor-pointer
            border
            border-transparent
            transition-all
            duration-500
            hover:scale-105
            hover:-translate-y-2
            hover:border-cyan-500/40
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
            "
          >
            <h3
  className="
  text-sm
sm:text-base
md:text-lg
  font-semibold
  leading-relaxed
  break-words
  "
>
              {cert.title}
            </h3>

            <p
  className="
  text-cyan-400
  text-xs
sm:text-sm
  mt-2
  break-words
  "
>
              {cert.issuer}
            </p>

            <div className="flex items-center justify-between mt-4">
              <span
  className="
  text-xs
  sm:text-sm
  text-gray-400
  "
>
                View Certificate
              </span>

              <HiOutlineExternalLink
                size={18}
                className="text-cyan-400"
              />
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}