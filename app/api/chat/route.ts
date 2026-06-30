import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const msg = message.toLowerCase();

    // Portfolio Fallback Responses
    if (msg.includes("project")) {
      return Response.json({
        reply:
          "Sunidhi has built SmartBank, RBAC Authentication System, Student Management System, Expense Tracker, AI Portfolio and several Full Stack Development projects.",
      });
    }

    if (
      msg.includes("skill") ||
      msg.includes("technology") ||
      msg.includes("tech stack")
    ) {
      return Response.json({
        reply:
          "Sunidhi's skills include React, Next.js, TypeScript, Tailwind CSS, Python, Django, Java, Spring Boot, MySQL, MongoDB, Cyber Security and AI Tools.",
      });
    }

    if (
      msg.includes("contact") ||
      msg.includes("email") ||
      msg.includes("linkedin") ||
      msg.includes("github")
    ) {
      return Response.json({
        reply:
          "You can contact Sunidhi through the Contact section, LinkedIn, GitHub or Email: sunidhishinde28@gmail.com",
      });
    }

    if (
      msg.includes("certificate") ||
      msg.includes("certification")
    ) {
      return Response.json({
        reply:
          "Sunidhi holds multiple certifications from Cisco, IBM, Microsoft, Infosys, Udemy and other leading platforms.",
      });
    }

    if (
      msg.includes("about") ||
      msg.includes("who are you") ||
      msg.includes("sunidhi")
    ) {
      return Response.json({
        reply:
          "Sunidhi Shinde is a B.Tech Computer Science Engineering graduate, Full Stack Developer, Cyber Security Enthusiast and AI Learner passionate about building modern digital solutions.",
      });
    }

    // Gemini AI
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `
You are Sunidhi AI Assistant.

Information:
- Name: Sunidhi Shinde
- B.Tech Computer Science Engineering Graduate
- Full Stack Developer
- Cyber Security Enthusiast
- AI Learner
- Skilled in React, Next.js, TypeScript, Python, Django, Java, Spring Boot, MySQL and MongoDB
- Built SmartBank, RBAC Authentication System, Student Management System and Expense Tracker

Answer professionally about Sunidhi.

Question:
${message}
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return Response.json({
      reply: response,
    });
  } catch (error: unknown) {
    console.error("Gemini Error:", error);

    return Response.json({
      reply:
        "Hi! I'm Sunidhi AI Assistant. Currently AI service is unavailable, but I can tell you about Sunidhi's skills, projects, certifications and contact information.",
    });
  }
}