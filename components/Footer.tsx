import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-12
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Name */}
        <h2 className="text-2xl sm:text-3xl font-bold">
          Sunidhi Shinde
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/soniyaritgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white
              hover:text-cyan-400
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://linkedin.com/in/sunidhishinde"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white
              hover:text-cyan-400
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin size={26} />
          </a>
        </div>

        {/* Email */}
        <p
          className="
            text-gray-400
            text-sm
            sm:text-base
            mt-6
            break-all
          "
        >
          sunidhishinde28@gmail.com
        </p>

        {/* Tagline */}
        <p
          className="
            text-gray-400
            text-sm
            sm:text-base
            md:text-lg
            mt-6
            max-w-2xl
            leading-relaxed
          "
        >
          Building modern web experiences with AI, Cyber Security and
          Full Stack Development.
        </p>

        {/* Copyright */}
        <p
          className="
            text-gray-500
            text-xs
            sm:text-sm
            mt-8
          "
        >
          © {new Date().getFullYear()} Sunidhi Shinde. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}