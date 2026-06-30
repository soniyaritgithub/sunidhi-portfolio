import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata = {
  title: "Gemini API Integration",
  description:
    "Learn how to integrate Google Gemini AI with React and Node.js applications.",
};

export default function GeminiBlog() {
  return (
    <main
    
      className="
      min-h-screen
      px-5
      sm:px-8
      lg:px-12
      py-20
    "
    >
      <div
  className="
  fixed
  top-0
  left-0
  w-full
  h-1
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
      <div className="max-w-4xl mx-auto">

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
          AI
        </span>

        <h1
          className="
          text-4xl
          sm:text-5xl
          font-bold
          mt-6
        "
        >
          Gemini API Integration
        </h1>

        <p className="mt-4 text-gray-400">
          7 min read
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
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-500/10
            to-purple-500/10
            z-10
          "
          />

          <Image
            src="/blogs/gemini.png"
            alt="Gemini API"
            width={1600}
            height={900}
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

<div className="space-y-3">

<a href="#what-is-gemini" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
What is Google Gemini?
</a>

<a href="#integration" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
Gemini Integration
</a>

<a href="#best-practices" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
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
        
         <h2 id="what-is-gemini">
What is Google Gemini AI?
</h2>
          <p>
            Google Gemini is a powerful multimodal AI model capable of
            understanding text, images and documents. It helps developers build
            intelligent applications with natural language capabilities.
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
Google Gemini supports text, images, code, PDFs and multimodal AI workflows, making it ideal for intelligent applications.
</p>

</div>

</div>
          <h2 id="integration">
How to Integrate Gemini API
</h2>
          <p>
            Create an API route in your backend, securely store your API key in
            environment variables, send user prompts to Gemini and return the
            generated response to your frontend.
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

⚠️ Never expose your Gemini API key on the frontend. Always call Gemini from your backend.

</div>
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
{`React
↓

Node.js API

↓

Gemini API

↓

AI Response`}
</code>
</pre>
<br />
         <h2 id="best-practices">
Best Practices
</h2>
<br />
          <ul>
            <li>Store API keys in .env files.</li>
            <li>Validate user input.</li>
            <li>Handle API errors gracefully.</li>
            <li>Use loading indicators for better UX.</li>
          </ul>

          <Link
            href="/"
            className="
            inline-flex
            mt-12
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            text-white
            font-semibold
hover:scale-105
transition-all
duration-300
          "
          >
            ← Back to Portfolio
          </Link>
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

<h3 className="text-xl font-bold">

About the Author

</h3>

<p
className="
mt-4
text-gray-300
leading-8
"
>

Sunidhi Shinde is a Full Stack Developer passionate about AI, React, Next.js, Node.js and modern AI-powered applications.

</p>

</div>
<ShareButtons />
          <h2 className="text-2xl font-bold mt-20 mb-8">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <Link
              href="/blogs/how-ats-works"
              className="glass rounded-2xl p-5 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              📄 How ATS Works
            </Link>

            <Link
              href="/blogs/react-performance-tips"
              className="glass rounded-2xl p-5 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              ⚛️ React Performance Tips
            </Link>

            <Link
              href="/"
              className="glass rounded-2xl p-5 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              🚀 AI Resume Analyzer
            </Link>

          </div>
        </article>
      </div>
    </main>
  );
}