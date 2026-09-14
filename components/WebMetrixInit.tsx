"use client";

import Script from "next/script";

declare const WebMetrix: {
  init: (config: {
    tenant: string;
    tenantUid: string;
    debug?: boolean;
  }) => boolean;
  sessionId: string;
};

export default function WebMetrixInit() {
  return (
    <Script
      id="webmetrix-sdk"
      src="https://analytics.webmetrix.ai/static/webmetrix.analytics.v2.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        try {
          var ok = WebMetrix.init({
            tenant: "smra",
            tenantUid: "6ff346b1-141a-4b66-bc09-cd83d8be4e1e",
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
