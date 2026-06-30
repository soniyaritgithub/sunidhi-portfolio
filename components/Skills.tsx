"use client";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
    id="skills"
     className="py-20 px-6 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {portfolioData.skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-2 rounded-full bg-slate-800"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.section>
  );
}