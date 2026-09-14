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

const TENANT_NAME =
  process.env.NEXT_PUBLIC_WEBMETRIX_TENANT_NAME || "smra";
const TENANT_UID =
  process.env.NEXT_PUBLIC_WEBMETRIX_TENANT_UID ||
  "6ff346b1-141a-4b66-bc09-cd83d8be4e1e";
const SCRIPT_URL =
  process.env.NEXT_PUBLIC_WEBMETRIX_SCRIPT_URL ||
  "https://analytics.webmetrix.ai/static/webmetrix.analytics.v2.min.js";

export default function WebMetrixInit() {
  return (
    <Script
      id="webmetrix-sdk"
      src={SCRIPT_URL}
      strategy="afterInteractive"
      onLoad={() => {
        try {
          var ok = WebMetrix.init({
            tenant: TENANT_NAME,
            tenantUid: TENANT_UID,
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
