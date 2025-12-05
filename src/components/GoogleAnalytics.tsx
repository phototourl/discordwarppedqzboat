"use client";

import Script from "next/script";
import { useEffect } from "react";
import { pageview } from "@/lib/gtag";
import { GA_CONFIG, validateGAConfig } from "@/lib/ga-config";

const GA_MEASUREMENT_ID = GA_CONFIG.measurementId;

export default function GoogleAnalytics() {
  // Validate configuration on mount
  useEffect(() => {
    const validation = validateGAConfig();
    if (!validation.isValid && GA_CONFIG.debug) {
      console.warn("Google Analytics Configuration:", validation.message);
    }
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const validation = validateGAConfig();
    if (!validation.isValid || !GA_CONFIG.enabled) {
      return;
    }

    // Initial pageview
    const url = window.location.pathname + window.location.search;
    pageview(url);

    // Listen for route changes (Next.js App Router)
    const handleRouteChange = () => {
      const newUrl = window.location.pathname + window.location.search;
      pageview(newUrl);
    };

    // Use MutationObserver to detect route changes in Next.js App Router
    let lastUrl = url;
    const observer = new MutationObserver(() => {
      const currentUrl = window.location.pathname + window.location.search;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        handleRouteChange();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Also listen to popstate for browser back/forward
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  if (!GA_MEASUREMENT_ID || !GA_CONFIG.enabled) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          if (GA_CONFIG.debug) {
            console.log("✅ Google Analytics loaded successfully");
          }
        }}
        onError={() => {
          console.error("❌ Failed to load Google Analytics script");
        }}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}

