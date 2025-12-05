import Link from "next/link";
import React from "react";
import { Github, Twitter, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* 主要链接 */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-cyan-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 资源链接 */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/docs/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/docs/contributing" className="hover:text-cyan-400 transition-colors">
                  Contributing
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="hover:text-cyan-400 transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* 社区链接 */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://github.com/liqs91/discordwarppedqzboat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Badge 区域 */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Powered By</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
                  alt="Next.js"
                  className="h-6"
                />
              </a>
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="React"
                  className="h-6"
                />
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="Tailwind CSS"
                  className="h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-cyan-500/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2024 Discord Wrapped. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/legal/impressum" className="hover:text-cyan-400 transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
