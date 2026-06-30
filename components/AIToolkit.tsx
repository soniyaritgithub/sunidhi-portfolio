"use client";

const tools = [
  "ChatGPT",
  "GitHub Copilot",
  "Gemini",
  "Claude",
  "Cursor AI",
  "Perplexity",
];

export default function AIToolkit() {
  return (
    <section
      id="ai-tools"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <h2
        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-12
        "
      >
        AI{" "}
        <span
          className="
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Toolkit
        </span>
      </h2>

      {/* Tools Grid */}
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        "
      >
        {tools.map((tool) => (
          <div
            key={tool}
            className="
            glass
            p-6
            sm:p-8
            rounded-3xl
            text-center
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
            <p
              className="
              text-base
              sm:text-lg
              font-medium
              text-white
              "
            >
              ✓ {tool}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}