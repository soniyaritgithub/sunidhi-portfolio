"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-32 px-6"
    >
      <h2
  className="
  text-3xl
  sm:text-4xl
  md:text-5xl
  font-bold
  text-center
  mb-10
  sm:mb-14
  "
>
  Education
</h2>

     <div
  className="
  max-w-4xl
  xl:max-w-5xl
  mx-auto
  "
>
        <div className="
glass
p-5
sm:p-6
md:p-8
rounded-3xl
border
border-cyan-500/10
hover:border-cyan-500/20
transition-all
duration-500
">
       <h3
  className="
  text-xl
  sm:text-2xl
  md:text-3xl
  lg:text-[38px]
  font-bold
  leading-tight
  tracking-tight
  text-white
  "
>
  B.Tech Computer Science Engineering
</h3>

          <p
  className="
  mt-3
  text-sm
  sm:text-base
  md:text-lg
  text-gray-400
  "
>
  Medi-Caps University, Indore
</p>

          <div
  className="
  grid
  grid-cols-1
  sm:grid-cols-2
  gap-6
  mt-8
  "
>
            <div>
              <p className="
text-xs
sm:text-sm
uppercase
tracking-wider
text-cyan-400/80
">Graduation Year</p>
              <p className="
text-lg
sm:text-xl
font-semibold
text-white
">2025</p>
            </div>

            <div>
              <p className="text-gray-500">Degree</p>
              <p className="text-xl">B.Tech CSE</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}