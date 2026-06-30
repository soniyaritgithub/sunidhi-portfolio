"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function BlogSection() {
    const blogs = [
  {
    title: "How ATS Works",
    category: "ATS",
    time: "5 min read",
    slug: "how-ats-works",
    description:
      "Understand how Applicant Tracking Systems evaluate resumes and how AI can improve ATS scores.",
  },
  {
    title: "Gemini API Integration",
    category: "AI",
    time: "7 min read",
    slug: "gemini-api-integration",
    description:
      "Learn how Google Gemini AI can be integrated into React and Node.js applications.",
  },
  {
    title: "React Performance Tips",
    category: "React",
    time: "6 min read",
    slug: "react-performance-tips",
    description:
      "Best practices to optimize React applications for speed and user experience.",
  },
];
  return (
    <section id="blogs" className="
py-24
px-4
sm:px-6
lg:px-8
">
<h2
className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-center
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
bg-clip-text
text-transparent
mb-16
"
>

Latest AI Blogs

</h2>
<div
className="
max-w-7xl
mx-auto
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-8
"
>
{
  blogs.map((blog, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="
      group
      relative
      overflow-hidden
      glass
      rounded-3xl
      border
      border-cyan-500/20
      p-7
      transition-all
      duration-700
      hover:border-cyan-400/40
      hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]
      "
    >
        <div
className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition-all
duration-700
bg-gradient-to-r
from-cyan-500/10
via-transparent
to-purple-500/10
"
/>
<div
className="
absolute
top-5
right-5
text-4xl
opacity-10
animate-pulse
"
>
🤖
</div>
<div className="relative z-10">
<span
className="
inline-block
px-4
py-2
rounded-full
bg-cyan-500/10
border
border-cyan-400/30
text-cyan-300
text-xs
font-semibold
"
>
{blog.category}
</span>
<p
className="
mt-4
text-gray-400
text-sm
"
>
{blog.time}
</p>
<h3
className="
mt-4
text-xl
sm:text-2xl
font-bold
"
>
{blog.title}
</h3>
<p
className="
mt-5
text-gray-300
leading-8
text-sm
sm:text-base
"
>
{blog.description}
</p>
<Link
  href={`/blogs/${blog.slug}`}
  className="
  mt-8
  w-full
  sm:w-auto
  inline-flex
  justify-center
  items-center
  px-6
  py-3
  rounded-xl
  bg-gradient-to-r
  from-cyan-500
  to-blue-500
  text-white
  font-semibold
  hover:scale-105
  hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
  transition-all
  duration-300
  "
>
  Read Article →
</Link>
</div>
       </motion.div>
  ))
}
</div>

</section>
  );
}