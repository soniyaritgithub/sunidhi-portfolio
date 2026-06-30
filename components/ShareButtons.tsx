"use client";

import Image from "next/image";



export default function ShareButtons() {
    const portfolioUrl = "https://your-portfolio.vercel.app";
  const copyLink = async () => {
  await navigator.clipboard.writeText(getCurrentUrl());
  alert("Link copied!");
};


const getCurrentUrl = () => {
  if (typeof window === "undefined") return "";
  return window.location.href;
};



  return (
    <div
      className="
      flex
      flex-wrap
      gap-4
      mt-8
      "
    >
    <a
  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="glass px-5 py-3 rounded-xl"
>
  LinkedIn
</a>

      <a
  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(portfolioUrl)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="glass px-5 py-3 rounded-xl"
>
  X
</a>

      <a
  href={portfolioUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="glass px-5 py-3 rounded-xl"
>
  Portfolio
</a>
    </div>
  );
}