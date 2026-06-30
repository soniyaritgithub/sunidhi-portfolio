import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";


export const metadata = {
  title: "How ATS Works",
  description:
    "Complete guide to ATS and how AI improves resume screening.",
    
};
const copyLink = async () => {
  await navigator.clipboard.writeText(window.location.href);
  alert("Link copied!");
};
export default function ATSBlog() {
  return (
    <main className="
min-h-screen
px-5
sm:px-8
lg:px-12
py-20
">
    <div
  className="
  fixed
  top-0
  left-0
  h-1
  w-full
  bg-white/5
  z-50
  "
>
  <div
    className="
    h-full
    w-1/3
    bg-gradient-to-r
    from-cyan-400
    via-blue-500
    to-purple-500
    "
  />
</div>
<div
className="
max-w-3xl
mx-auto
"
>
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
text-sm
"
>
ATS
</span>
<h1
className="
text-3xl
sm:text-4xl
lg:text-5xl
leading-tight
font-bold
mt-6
"
>

How ATS Works

</h1>
<p
className="
mt-4
text-gray-400
"
>

5 min read

</p>
<div
className="
relative
group
mt-10
mx-auto
w-full
max-w-3xl
overflow-hidden
rounded-2xl
border
border-cyan-500/20
shadow-[0_15px_45px_rgba(0,0,0,0.35)]
"
>
  {/* AI Gradient Overlay */}
  <div
    className="
    absolute
    inset-0
    bg-gradient-to-r
    from-cyan-500/15
via-transparent
to-purple-500/15
    pointer-events-none
    "
  />

<Image
  src="/blogs/ats.png"
  alt="ATS"
  width={1200}
  height={675}
  priority
  sizes="(max-width:768px) 100vw, 768px"
  className="
  w-full
  h-52
  sm:h-60
  md:h-72
  lg:h-80
  object-cover
  object-center
  transition-transform
  duration-700
  group-hover:scale-[1.03]
  "
/>
</div>
<div
className="
glass
rounded-2xl
border
border-cyan-500/20
p-6
mt-10
mb-10
"
>

<h3
className="
text-xl
font-bold
mb-5
"
>

Table of Contents

</h3>

<div
className="
space-y-3
"
>

<a href="#what-is-ats" className="
block
text-gray-300
hover:text-cyan-400
transition-colors
duration-300
">
What is ATS?
</a>

<a href="#why-reject" className="
block
text-gray-300
hover:text-cyan-400
transition-colors
duration-300
">
Why ATS Rejects Resumes
</a>

<a href="#improve-score" className="
block
text-gray-300
hover:text-cyan-400
transition-colors
duration-300
">
How AI Improves ATS Score
</a>

<a href="#best-practices" className="
block
text-gray-300
hover:text-cyan-400
transition-colors
duration-300
">
Best Practices
</a>

</div>

</div>
<article
className="
prose
prose-invert
prose-lg
prose-headings:text-white
prose-p:text-gray-300
prose-strong:text-cyan-300
prose-a:text-cyan-400
max-w-none
mt-10
"
>

<h2 id="what-is-ats">
What is ATS?
</h2>

<p>
An Applicant Tracking System (ATS) is software used by companies to manage,
filter and rank job applications. Instead of reading every resume manually,
recruiters first upload resumes into an ATS, which scans each document for
keywords, skills, education, work experience and formatting.

The ATS assigns a relevance score based on how closely the resume matches the
job description. Resumes with higher scores are more likely to be reviewed by
human recruiters.
</p>
<div
className="
my-8
rounded-2xl
border-l-4
border-cyan-400
bg-cyan-500/10
p-5
"
>

<div className="flex gap-3 items-start">

<span className="text-2xl">
💡
</span>

<p>
Most companies use ATS software before a recruiter manually reviews resumes.
</p>

</div>

</div>

<h2 id="why-reject">
Why ATS Rejects Resumes?
</h2>
<p>
Many resumes are rejected because they contain images, tables, headers,
footers or complex layouts that ATS software cannot properly parse.
Missing job-specific keywords, inconsistent formatting and generic resume
content can also reduce ATS scores significantly.

Keeping a clean layout and tailoring the resume for every job application
greatly increases the chances of passing ATS screening.
</p>
<div
className="
my-8
rounded-2xl
border-l-4
border-red-400
bg-red-500/10
p-5
"
>

⚠️

Avoid tables, images and complex layouts because many ATS systems cannot parse them correctly.

</div>


<h2 id="improve-score">
How AI Improves ATS Score?
</h2>

<p>
Modern AI tools analyze resumes against job descriptions to identify missing
skills, weak bullet points and ATS-related issues. AI can recommend stronger
keywords, improve grammar, rewrite experience descriptions and optimize resume
structure, resulting in a much higher ATS compatibility score.
</p>
<pre
className="
mt-8
rounded-2xl
bg-black/60
border
border-cyan-500/20
overflow-x-auto
p-6
font-mono
text-cyan-300
text-sm
"
>
<code>
{`Resume
↓

ATS Parser

↓

Keyword Matching

↓

Recruiter Review`}
</code>
</pre>
<br></br>
<h2 id="best-practices">
Best Practices
</h2>
<br></br>
<ul>

<ul>
  <li>Use standard section headings.</li>
  <li>Include job-specific keywords naturally.</li>
  <li>Avoid images, icons and tables.</li>
  <li>Use a clean single-column layout.</li>
  <li>Export resumes as PDF only when ATS supports it.</li>
  <li>Customize your resume for every application.</li>
</ul>

</ul>
<Link
href="/"
className="
inline-flex
mt-12
px-6
py-3
rounded-xl
text-white
font-semibold
hover:scale-105
transition-all
duration-300
"
>

← Back to Portfolio

</Link>
<ShareButtons />
<div
className="
mt-16
glass
rounded-3xl
border
border-cyan-500/20
p-6
"
>

<h3
className="
text-xl
font-bold
"
>

About the Author

</h3>

<p
className="
mt-4
text-gray-300
leading-8
"
>

Sunidhi Shinde is a Full Stack Developer passionate about AI-powered applications, React, Next.js and modern web technologies.

</p>

</div>

<h2 className="text-2xl font-bold mt-20 mb-8">
  Related Articles
</h2>

<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">

  <Link
  href="/blogs/gemini-api-integration"
  className="
  glass
  rounded-2xl
  p-5
  border
  border-cyan-500/20
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  transition-all
  duration-300
  "
>
  🤖 Gemini API Integration
</Link>

<Link
  href="/blogs/react-performance-tips"
  className="
  glass
  rounded-2xl
  p-5
  border
  border-cyan-500/20
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  transition-all
  duration-300
  "
>
  ⚛️ React Performance Tips
</Link>

<Link
  href="/"
  className="
  glass
  rounded-2xl
  p-5
  border
  border-cyan-500/20
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  transition-all
  duration-300
  "
>
  🚀 AI Resume Analyzer
</Link>

</div>
</article>
</div>
    </main>
  );
}