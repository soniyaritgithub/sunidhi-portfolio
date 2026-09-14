"use client";

import { useEffect } from "react";

const CONTAINER_ID = "analytics-head-tags";

/**
 * Browsers never execute <script> tags injected via innerHTML /
 * dangerouslySetInnerHTML. This loader finds those inert tags inside the
 * #analytics-head-tags container and re-creates them with
 * document.createElement("script") so the browser actually runs them.
 */
export default function HeadTagsScriptLoader() {
  useEffect(() => {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    const sourceScripts = Array.from(container.querySelectorAll("script"));
    if (sourceScripts.length === 0) return;

    const headScripts = Array.from(document.head.querySelectorAll("script"));
    const pending = document.createDocumentFragment();

    sourceScripts.forEach((source) => {
      // Guard against duplicate executions across re-renders / navigations.
      if (source.dataset.loaded === "true") return;
      source.dataset.loaded = "true";

      const src = source.getAttribute("src");
      if (
        src &&
        headScripts.some((existing) => existing.getAttribute("src") === src)
      ) {
        return; // Same script already appended to <head>.
      }

      const script = document.createElement("script");

      // Copy every attribute: src, async, defer, data-tenant-name,
      // data-tenant-uid, integrity, nonce, etc.
      Array.from(source.attributes).forEach((attr) => {
        script.setAttribute(attr.name, attr.value);
      });

      // Carry over inline code if the tag is not src-based.
      const inlineCode = source.textContent?.trim();
      if (!src && inlineCode) {
        script.textContent = inlineCode;
      }

      pending.appendChild(script);
    });

    if (pending.hasChildNodes()) {
      document.head.appendChild(pending);
    }

    // No cleanup on unmount: the root layout never unmounts, and removing an
    // already-executed analytics script would break tracking.
  }, []);

  return null;
}
