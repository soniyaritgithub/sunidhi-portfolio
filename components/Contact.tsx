"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      alert("Message Sent!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="
        py-16
        sm:py-20
        px-4
        sm:px-6
        scroll-mt-28
        flex
        flex-col
        items-center
      "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Contact
      </h2>

      <div className="flex justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            max-w-sm
            sm:max-w-md
            md:max-w-lg
            space-y-4
            bg-black/30
            backdrop-blur-md
            border
            border-cyan-500/20
            rounded-2xl
            p-4
            sm:p-6
          "
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              px-4
              py-2
              text-sm
              sm:text-base
              rounded-xl
              bg-black/40
              border
              border-white/10
              backdrop-blur-md
              outline-none
              focus:border-cyan-400
              transition-all
              duration-300
            "
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              px-4
              py-2
              text-sm
              sm:text-base
              rounded-xl
              bg-black/40
              border
              border-white/10
              backdrop-blur-md
              outline-none
              focus:border-cyan-400
              transition-all
              duration-300
            "
            required
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full
              h-24
              px-4
              py-2
              text-sm
              sm:text-base
              rounded-xl
              bg-black/40
              border
              border-white/10
              backdrop-blur-md
              outline-none
              resize-none
              focus:border-cyan-400
              transition-all
              duration-300
            "
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="
                px-8
                py-2.5
                text-sm
                sm:text-base
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                text-white
                transition-all
                duration-300
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}