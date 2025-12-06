
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalyticsProvider from "@/components/GoogleAnalyticsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://discordwarpped.qzboat.com"),
  title: "Discord Wrapped - Your Discord Year in Review",
  description: "Explore your top Discord moments with Discord Wrapped. Relive your favorite messages, servers, and conversations from the past year. Join the journey of your Discord memories today!",
  keywords: ["Discord", "Discord Wrapped", "Discord Statistics", "Discord Analytics", "Discord Year in Review"],
  authors: [{ name: "Discord Wrapped" }],
  creator: "Discord Wrapped",
  publisher: "Discord Wrapped",
  openGraph: {
    title: "Discord Wrapped - Your Discord Year in Review",
    description: "Explore your top Discord moments with Discord Wrapped. Relive your favorite messages, servers, and conversations from the past year. Join the journey of your Discord memories today!",
    url: "https://discordwarpped.qzboat.com",
    siteName: "Discord Wrapped",
    images: [
      {
        url: "/api/image?data=" + encodeURIComponent(JSON.stringify({
          name: "Discord Wrapped",
          totalWatchTime: 2505600,
          totalVideosWatched: 81737,
          totalWatchSessions: 1823,
          totalComments: 712,
          averageSessionLength: 7200,
          mostUsedEmoji: "😂",
          totalLikes: 8237,
          persona: "Interaction Monster",
        })),
        width: 1200,
        height: 630,
        alt: "Discord Wrapped - Discover Your Year in Discord",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Wrapped - Your Discord Year in Review",
    description: "Explore your top Discord moments with Discord Wrapped. Relive your favorite messages, servers, and conversations from the past year.",
    creator: "@discordwrapped",
    images: [
      "/api/image?data=" + encodeURIComponent(JSON.stringify({
        name: "Discord Wrapped",
        totalWatchTime: 2505600,
        totalVideosWatched: 81737,
        totalWatchSessions: 1823,
        totalComments: 712,
        averageSessionLength: 7200,
        mostUsedEmoji: "😂",
        totalLikes: 8237,
        persona: "Interaction Monster",
      })),
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://discordwarpped.qzboat.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_logo.png" />
          <link rel="canonical" href="https://discordwarpped.qzboat.com/" />
        
      </head>
      
      <body className={`${inter.className} w-screen min-h-screen dark bg-slate-900`}>
        <GoogleAnalyticsProvider />
        {children}

        
<script defer data-domain="discordwarpped.qzboat.com" src="https://tj.misew.top/js/script.js"></script>

      </body>
    </html>
  );
}
