"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

type WelcomePopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
};

export default function WelcomePopup({
  isOpen,
  onClose,
  onExplore,
}: WelcomePopupProps) {
  if (!isOpen) return null;

  return (
    <>
   <div
  onClick={onClose}
  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-5
sm:p-6"
>
  <div
 className="
w-full
max-w-[340px]
sm:max-w-[460px]
md:max-w-[520px]
lg:max-w-[580px]
xl:max-w-[620px]

p-[2px]

rounded-[28px]

bg-gradient-to-r
from-cyan-400
via-sky-500
via-indigo-500
to-fuchsia-500

animate-gradient-border

shadow-[0_0_35px_rgba(59,130,246,0.22)]
"
>
    <motion.div
    
    onClick={(e) => e.stopPropagation()}
 initial={{
  opacity: 0,
  scale: 0.96,
  y: 20,
}}

animate={{
  opacity: 1,
  scale: 1,
  y: 0,
}}

transition={{
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}}
  className="
  
    relative
    transform-gpu
will-change-transform
    overflow-hidden
   w-full
  bg-white/70
backdrop-blur-xl
border
border-white/40
    backdrop-blur-xl
    rounded-[26px]
  shadow-[0_15px_50px_rgba(15,23,42,0.18)]
    p-5
    sm:p-7
    text-center
  "
  
>
  <div
className="
absolute
-top-24
-left-24
rounded-full
bg-cyan-400/10
w-40
h-40
blur-2xl
pointer-events-none
"
/>

<div
className="
absolute
-bottom-24
-right-24
rounded-full
bg-fuchsia-500/10
w-40
h-40
blur-2xl
pointer-events-none
"
/>
<div
  className="
    absolute
    inset-0
    bg-gradient-to-br
    from-cyan-100/20
    via-transparent
    to-fuchsia-200/20
    pointer-events-none
  "
/>
<div className="relative z-10">
   <button
  type="button"
  onClick={onClose}
  className="
  group
absolute

top-3
right-3

sm:top-4
sm:right-4

w-9
h-9

sm:w-11
sm:h-11

rounded-full

flex
items-center
justify-center

bg-white/70

backdrop-blur-xl

border
border-white/80
hover:border-cyan-400

shadow-lg

transition-all
duration-300

hover:rotate-90

hover:scale-110

hover:bg-white

hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]
"
>
 <X
size={20}
className="
text-slate-700
transition-all
duration-300
group-hover:text-blue-600
"
/>
</button>

<div
  className="
  relative
  transform-gpu
will-change-transform
overflow-hidden
glitter-badge
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-full
    bg-gradient-to-r
from-white
via-slate-50
to-cyan-50
    text-slate-700
    border
    border-cyan-200/80

shadow-[0_8px_30px_rgba(59,130,246,0.15)]
    text-[11px]
sm:text-xs
    sm:text-sm
    font-medium
    transition-all
duration-300
hover:scale-105
hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
  "
>
  <motion.div
  initial={{ x: "-150%" }}
  animate={{ x: "250%" }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "linear",
   repeatDelay: 2,
  }}
  className="
    absolute
    inset-y-0
    -left-20
    w-16
    rotate-12
    bg-gradient-to-r
    from-transparent
    via-white/90
    to-transparent
    blur-sm
  "
/>
<span className="relative z-20">
  ✨ AI • ATS • Gemini Powered
</span>
</div>
<h2
  className="
    mt-6
    text-2xl
    sm:text-3xl
    lg:text-4xl
    font-bold
    leading-tight
  "
>
  Land More Interviews with AI
</h2>
<h1
className="
mt-2

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl

font-extrabold

tracking-tight

drop-shadow-[0_5px_20px_rgba(59,130,246,0.30)]

bg-gradient-to-r
from-blue-600
via-cyan-500
to-purple-600

bg-clip-text
text-transparent
"
>
  Resume Intelligence Platform
</h1>
<p
  className="
    mt-6
    text-sm
    sm:text-base
    lg:text-lg
    text-slate-600
    leading-6
sm:leading-7
    max-w-xl
    mx-auto
  "
>
  Discover an AI-powered resume analyzer built with Gemini AI that
  evaluates ATS compatibility, identifies missing keywords, and
  delivers recruiter-ready recommendations to help you stand out.
</p>
<div
className="
mt-8
grid
grid-cols-3
gap-2
sm:gap-3
"
>

<div className="
rounded-2xl
border
border-slate-200
bg-white/60
backdrop-blur-md
py-3
sm:py-4
px-2
shadow-sm
hover:-translate-y-1
hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]
transition-all
duration-300
">

<p className="text-2xl font-bold text-cyan-500">

98%

</p>

<p className="text-xs text-slate-600">

ATS Accuracy

</p>

</div>

<div className="
rounded-2xl
border
border-slate-200
bg-white/60
backdrop-blur-md
py-3
sm:py-4
px-2
shadow-sm
hover:-translate-y-1
hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]
transition-all
duration-300
">

<p className="text-2xl font-bold text-purple-500">

500+

</p>

<p className="text-xs text-slate-600">

Analyses

</p>

</div>

<div className="
rounded-2xl
border
border-slate-200
bg-white/60
backdrop-blur-md
py-3
sm:py-4
px-2
shadow-sm
hover:-translate-y-1
hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]
transition-all
duration-300
">

<p
className="
text-base
sm:text-2xl
font-bold
text-pink-500
whitespace-nowrap
leading-none
py-3
"
>
Gemini
</p>

<p className="text-xs text-slate-600">

Powered

</p>

</div>

</div>
<button
  type="button"
  onClick={onExplore}
  className="
    mt-8
    w-full
    sm:w-auto
    px-8
    py-3
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    to-purple-600
    text-white
    font-semibold
    hover:scale-105
    hover:-translate-y-1
hover:shadow-[0_0_45px_rgba(99,102,241,0.45)]
    transition
    duration-300
  "
>
  🚀 Explore Project
</button>
</div>
</motion.div>
</div>
</div>
    </>
  );
}