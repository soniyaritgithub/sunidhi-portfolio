"use client";

import Script from "next/script";

export default function WebMetrixInit() {
  return (
    <Script
      id="webmetrix-sdk"
      src="https://analytics.webmetrix.ai/static/webmetrix.analytics.v2.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        try {
          var ok = WebMetrix.init({
            tenant: "demo",
            tenantUid: "bc88a6fa-69be-43d7-bfe6-8a52b0268044",
            debug: true,
          });

          if (ok) {
            console.info(
              "[WebMetrix] Session replay started (session id: " +
                WebMetrix.sessionId +
                ")."
            );
          }
        } catch (error) {
          console.warn("[WebMetrix] Session replay init failed:", error);
        }
      }}
    />
  );
}
