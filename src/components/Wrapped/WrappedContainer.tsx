"use client";

import Persona from "@/lib/Statistics/Personas/Persona";
import { Statistics } from "@/lib/Wrapped";
import React from "react";

export type WrappedSlideProps = {
  statistics: Statistics;
  persona: Persona;
  isDemo: boolean;
};

function WrappedContainer({
  children,
  bg = "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
  text = "text-white",
}: {
  children: React.ReactNode;
  bg?: string;
  text?: string;
}) {
  return (
    <div
      className={`w-screen min-h-screen flex justify-center items-center flex-col gap-6 text-center ${bg} ${text} p-6 relative overflow-hidden`}
      suppressHydrationWarning
    >
      {/* 科技风格背景效果 */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" 
        suppressHydrationWarning
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" 
        suppressHydrationWarning
      />
      <div className="relative z-10 w-full" suppressHydrationWarning>
        {children}
      </div>
    </div>
  );
}

export default WrappedContainer;
