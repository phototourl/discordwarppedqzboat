"use client";

import React from "react";
import Link from "next/link";
import WrappedContainer from "./WrappedContainer";
import FatHeading from "./FatHeading";
import InfoText from "./InfoText";
import MutedText from "./MutedText";
import { Button } from "../ui/button";
import { ArrowRight, ExternalLink, PlugZap } from "lucide-react";
import Faq from "../Preparation/Faq";
import Footer from "../Footer";

// import MenuBar from '../MenuBar'; // 确保路径正确
// import Projects from "../Projects";

// Client component for example image to avoid hydration mismatch
function ExampleWrappedImage() {
  const imageData = React.useMemo(
    () =>
      encodeURIComponent(
        JSON.stringify({
          name: "John Doe",
          totalWatchTime: 2505600, // 29 days in seconds
          totalVideosWatched: 81737,
          totalWatchSessions: 1823,
          totalComments: 712,
          averageSessionLength: 7200, // 120 minutes in seconds
          mostUsedEmoji: "😂",
          totalLikes: 8237,
          persona: "Interaction Monster",
        })
      ),
    []
  );

  // 确保服务器端和客户端渲染完全相同的结构
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "70vh",
        aspectRatio: "9/16",
        borderRadius: 10,
        position: "relative",
        backgroundColor: "#18181B",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/api/image?data=${imageData}`}
        alt="Discord Wrapped Example"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: 10,
        }}
      />
    </div>
  );
}

function IntroInformation({
  onContinue,
  onDemo,
}: {
  onContinue: () => void;
  onDemo: () => void;
}) {
  return (
    <WrappedContainer>
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-16">
          <div className="flex flex-col gap-6 lg:gap-8 text-left">
            <div className="space-y-4">
              <FatHeading className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Discord Wrapped
              </FatHeading>
              <InfoText className="text-lg md:text-xl text-slate-200">
                Your Discord year in review. Discover your top messages, most active servers, favorite conversations, and relive your best Discord moments from the past year with Discord Wrapped.
              </InfoText>
            </div>

            <div className="space-y-4 pt-4">
              <FatHeading className="text-2xl md:text-3xl text-cyan-400" component="h2">
                How It Works
              </FatHeading>
              <MutedText className="text-base md:text-lg leading-relaxed text-slate-300">
                Download your Discord data export from Discord's settings in <strong className="text-cyan-400 font-semibold">JSON format</strong>. Upload it to Discord Wrapped and we'll generate your personalized year in review - just like Spotify Wrapped, but for your Discord activity!
                <br /><br />
                <span className="text-cyan-400 font-medium">🔒 Privacy-First:</span> Discord Wrapped processes everything in your browser. Your data never leaves your device. We don't store, upload, or see any of your Discord data. Learn more in our <Link href="/docs/privacy" className="text-blue-400 hover:text-blue-300 underline font-medium">privacy documentation</Link>.
              </MutedText>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <Button 
                className="w-full h-12 text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border border-blue-400/50 shadow-lg shadow-blue-500/30" 
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: 实现跳转功能
                }}
              >
                Open Discord
              </Button>
              <Button 
                className="w-full h-12 text-base bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white border border-cyan-400/50 shadow-lg shadow-cyan-500/30" 
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: 实现跳转功能
                }}
              >
                I have my data
              </Button>
              <Button 
                className="w-full h-12 text-base bg-slate-800 hover:bg-slate-700 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/20" 
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: 实现跳转功能
                }}
              >
                Show demo Wrapped
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm lg:max-w-md">
              <ExampleWrappedImage />
            </div>
          </div>
        </div>

        {/* Video Showcase Section */}
        <div className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              <FatHeading className="text-3xl md:text-4xl text-cyan-400" component="h2">
                See Discord Wrapped In Action
              </FatHeading>
              <InfoText className="text-lg text-slate-200">
                Watch this video to see how Discord Wrapped works and discover what insights await you! Learn more in our <Link href="/docs" className="text-cyan-400 hover:text-cyan-300 underline">documentation</Link> or read our <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 underline">blog posts</Link>.
              </InfoText>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/lzDVs5Cx1fg"
                title="Discord Wrapped Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <FatHeading className="text-3xl md:text-4xl text-center text-cyan-400" component="h2">
              Frequently Asked Questions
            </FatHeading>
            <p className="text-center text-slate-400 mb-6">
              Can't find what you're looking for? Check out our <Link href="/docs" className="text-cyan-400 hover:text-cyan-300 underline">documentation</Link> or <Link href="/faq" className="text-cyan-400 hover:text-cyan-300 underline">full FAQ page</Link>.
            </p>
            <Faq />
          </div>
        </div>
      </div>

      {/* <Projects /> */}

      {/* <div className="max-w-lg mx-auto mt-6 text-sm font-medium text-zinc-600 text-left">
        <strong>For the Search Engines:</strong>
        <p>
          Welcome to Wrapped for TikTok - Your Ultimate Source for TikTok
          Activity Insights:
        </p>
        <p>
          Are you looking to gain valuable insights into your TikTok activity?
          Look no further than Wrapped for TikTok! It offers comprehensive stats
          and analytics to help you understand your presence on TikTok.
        </p>
        <p>
          With Wrapped for TikTok, you can easily access in-depth information
          about your TikTok performance, including total videos viewed, watch
          session length, and much more.
        </p>
        <p>
          To get started, you'll need to download your TikTok data export from
          the official TikTok website. Simply visit{" "}
          <a href="https://www.tiktok.com/setting/download-your-data">
            https://www.tiktok.com/setting/download-your-data
          </a>{" "}
          and request your data in the "JSON - Machine-readable file" format.
          Don't worry, this file does not contain any sensitive information or
          login credentials. For additional reassurance, please refer to our FAQ
          section for a detailed explanation of how we handle your data.
        </p>
        <p>
          At Wrapped for TikTok, we prioritize your privacy and security. Unlike
          other platforms, your TikTok data is never uploaded or stored on our
          servers. Our tool operates exclusively within your browser, ensuring
          that your information remains confidential. We take pride in being a
          privacy-centered service, committed to protecting your data at all
          times.
        </p>
        <p>
          To provide complete transparency, we have made the full source code of
          Wrapped for TikTok available on GitHub. You can visit our GitHub
          repository at{" "}
          <a href="https://github.com/vantezzen/wrapped">
            https://github.com/vantezzen/wrapped
          </a>{" "}
          to review the code and verify its integrity. We believe in openness
          and accountability, and we want our users to have full confidence in
          our platform.
        </p>
        <p>
          Embrace the power of Wrapped for TikTok and uncover the insights that
          will propel your TikTok journey forward. Join our growing community of
          TikTok enthusiasts who use Wrapped for TikTok to deliver accurate,
          reliable, and actionable statistics.
        </p>
      </div> */}

      <Footer />
    </WrappedContainer>
  );
}

export default IntroInformation;
