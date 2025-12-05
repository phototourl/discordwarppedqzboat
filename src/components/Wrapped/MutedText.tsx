import React from "react";

function MutedText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-slate-300 font-medium ${className} text-left`}
      suppressHydrationWarning
    >
      {children}
    </p>
  );
}

export default MutedText;
