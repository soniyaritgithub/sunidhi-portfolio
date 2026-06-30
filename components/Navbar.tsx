"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const activeClass =
    "text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-500/30 transition-all duration-300";

  const normalClass =
    "px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-violet-500 hover:bg-clip-text hover:text-transparent hover:underline hover:decoration-pink-500 hover:decoration-2 hover:underline-offset-8";

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
         "highlights",
        "tech-stack",
        "ai-journey",
        "certifications",
        "contact",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 200;
          const bottom = top + section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < bottom
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="group cursor-pointer">
          <h1
            className="
            text-lg
            sm:text-xl
            lg:text-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Sunidhi Shinde
          </h1>

          <div
            className="
            h-[3px]
            w-0
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            rounded-full
            transition-all
            duration-500
            group-hover:w-full
            mt-1
            shadow-[0_0_15px_rgba(34,211,238,0.8)]
            "
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">

          <Link
            href="#home"
            className={
              active === "home"
                ? activeClass
                : normalClass
            }
          >
            Home
          </Link>

          <Link
            href="#about"
            className={
              active === "about"
                ? activeClass
                : normalClass
            }
          >
            About
          </Link>

          <Link
            href="#projects"
            className={
              active === "projects"
                ? activeClass
                : normalClass
            }
          >
            Projects
          </Link>

          <Link
            href="#skills"
            className={
              active === "skills"
                ? activeClass
                : normalClass
            }
          >
            Skills
          </Link>
<Link
  href="#highlights"
  className={
    active === "highlights"
      ? activeClass
      : normalClass
  }
>
  Highlights
</Link>

<Link
  href="#tech-stack"
  className={
    active === "tech-stack"
      ? activeClass
      : normalClass
  }
>
  Tech Stack
</Link>

          <Link
            href="#ai-journey"
            className={
              active === "ai-journey"
                ? activeClass
                : normalClass
            }
          >
            AI Journey
          </Link>

          <Link
            href="#certifications"
            className={
              active === "certifications"
                ? activeClass
                : normalClass
            }
          >
            Certifications
          </Link>

          <Link
            href="#contact"
            className={
              active === "contact"
                ? activeClass
                : normalClass
            }
          >
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white transition-all duration-300"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          md:hidden
          bg-black/90
          backdrop-blur-xl
          border-t
          border-white/10
          max-h-[80vh]
          overflow-y-auto
          "
        >
          <div className="flex flex-col gap-4 px-6 py-6">

            <Link
              href="#home"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              Home
            </Link>

            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              About
            </Link>

            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              Projects
            </Link>

            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              Skills
            </Link>
<Link
  href="#highlights"
  onClick={() => setIsOpen(false)}
  className="text-gray-300 hover:text-cyan-400 transition-all"
>
  Highlights
</Link>

<Link
              href="#tech-stack"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              Tech Stack
            </Link>

            <Link
              href="#ai-journey"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              AI Journey
            </Link>

            <Link
              href="#certifications"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              Certifications
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
              text-gray-300
              hover:text-cyan-400
              transition-all
              duration-300
              text-base
              sm:text-lg
              "
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}