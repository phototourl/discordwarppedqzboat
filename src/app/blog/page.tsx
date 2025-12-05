import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getKeywordsForPage } from "@/lib/keywords";

export const metadata: Metadata = {
  title: "Blog - Discord Wrapped | Insights & Updates",
  description: "Read the latest insights, updates, and guides about Discord analytics, data privacy, and community trends.",
  keywords: getKeywordsForPage("blog").join(", "),
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Understanding Your Discord Activity Patterns",
      excerpt: "Learn how to interpret your Discord Wrapped data and discover insights about your communication habits.",
      date: "2024-01-15",
      category: "Analytics",
      slug: "understanding-discord-activity-patterns",
    },
    {
      id: 2,
      title: "Privacy-First Analytics: How We Process Your Data",
      excerpt: "A deep dive into our privacy-first approach and how your Discord data is processed locally in your browser.",
      date: "2024-01-10",
      category: "Privacy",
      slug: "privacy-first-analytics",
    },
    {
      id: 3,
      title: "Discord Data Export Guide: Step-by-Step Tutorial",
      excerpt: "Complete guide on how to export your Discord data and prepare it for analysis with Discord Wrapped.",
      date: "2024-01-05",
      category: "Tutorial",
      slug: "discord-data-export-guide",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Insights, updates, and guides about Discord analytics and data privacy.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                    {post.category}
                  </span>
                  <time className="text-slate-400 text-sm">{post.date}</time>
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-cyan-300 hover:text-cyan-200">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

