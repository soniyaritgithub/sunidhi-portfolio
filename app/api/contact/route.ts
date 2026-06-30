import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://api.brevo.com/v3/smtp/email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio",
          email: "your@email.com",
        },

        to: [
          {
            email: "your@email.com",
          },
        ],

        subject: "New Portfolio Contact",

        htmlContent: `
          <h2>${body.name}</h2>
          <p>${body.email}</p>
          <p>${body.message}</p>
        `,
      }),
    }
  );

  return NextResponse.json({
    success: response.ok,
  });
}