"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Sunidhi AI Assistant. Ask me anything about Sunidhi.",
    },
  ]);

  const quickQuestions = [
    "Tell me about Sunidhi",
    "Show Projects",
    "Show Skills",
    "Show Certifications",
    "Contact Details",
  ];

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleQuickQuestion = async (
    question: string
  ) => {
    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating AI Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          ai-float
          fixed
          bottom-6
          right-6
          z-[999]
          w-14
          h-14
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          flex
          items-center
          justify-center
          animate-pulse
          ring-2
          ring-cyan-400/30
          shadow-[0_0_30px_rgba(34,211,238,0.4)]
          hover:scale-110
          transition-all
          duration-500
        "
      >
        {open ? (
          <X
            size={22}
            className="text-white"
          />
        ) : (
          <Image
            src="/ai-girl.png"
            alt="AI Assistant"
            width={56}
            height={56}
            className="
              w-14
              h-14
              rounded-full
              object-cover
            "
            priority
          />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-4
            sm:right-6
            w-[92vw]
            sm:w-[420px]
            max-w-[420px]
            h-[70vh]
            max-h-[650px]
            bg-black/80
            backdrop-blur-xl
            rounded-3xl
            border
            border-cyan-500/20
            shadow-[0_0_40px_rgba(34,211,238,0.15)]
            p-5
            z-[999]
            flex
            flex-col
          "
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/ai-girl.png"
              alt="AI Assistant"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <h3
              className="
                text-lg
                sm:text-xl
                font-bold
                text-cyan-400
              "
            >
              Ask Sunidhi AI
            </h3>
          </div>

          {/* Messages */}
          <div
            className="
              flex-1
              overflow-y-auto
              space-y-3
              pr-2
            "
          >
            {messages.map(
              (msg, index) => (
                <div
                  key={index}
                  className={
                    msg.role === "user"
                      ? "text-right"
                      : "text-left"
                  }
                >
                  <div
                    className="
                      inline-block
                      max-w-[90%]
                      glass
                      p-3
                      rounded-xl
                      text-sm
                      sm:text-base
                      leading-6
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                    "
                  >
                    {msg.content}
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="flex gap-1 items-center py-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="flex flex-wrap gap-2 mt-4 mb-4">
            {quickQuestions.map(
              (question) => (
                <button
                  key={question}
                  onClick={() =>
                    handleQuickQuestion(
                      question
                    )
                  }
                  className="
                    px-3
                    py-2
                    text-xs
                    sm:text-sm
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    text-cyan-300
                    hover:bg-cyan-500/20
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  {question}
                </button>
              )
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about Sunidhi..."
              className="
                flex-1
                glass
                p-3
                rounded-xl
                text-sm
                sm:text-base
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
              "
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="
                px-4
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                text-white
                transition-all
                duration-300
                disabled:opacity-50
              "
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}