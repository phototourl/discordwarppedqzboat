import { Metadata } from "next";
import Link from "next/link";
import { getKeywordsForPage } from "@/lib/keywords";

export const metadata: Metadata = {
  title: "Documentation - Discord Wrapped | Technical Guides",
  description: "Complete technical documentation for Discord Wrapped. Learn about data processing, privacy, API usage, and more.",
  keywords: getKeywordsForPage("docs").join(", "),
};

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", href: "/docs/introduction" },
        { name: "Quick Start Guide", href: "/docs/quick-start" },
        { name: "Data Export", href: "/docs/data-export" },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        { name: "Privacy Policy", href: "/docs/privacy" },
        { name: "Data Processing", href: "/docs/data-processing" },
        { name: "Local Processing", href: "/docs/local-processing" },
      ],
    },
    {
      title: "Technical",
      items: [
        { name: "API Reference", href: "/docs/api" },
        { name: "Data Format", href: "/docs/data-format" },
        { name: "Troubleshooting", href: "/docs/troubleshooting" },
      ],
    },
    {
      title: "Advanced",
      items: [
        { name: "Custom Analytics", href: "/docs/custom-analytics" },
        { name: "Integration Guide", href: "/docs/integration" },
        { name: "Contributing", href: "/docs/contributing" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Complete technical documentation and guides for Discord Wrapped.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className="text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

