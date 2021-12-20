import React from "react";

export default function SectionTitle({ className, children }) {
  const addClassname = className ? `${className}` : "";

  return (
    <h2
      className={`text-[24px] text-center font-mono font-semibold ${addClassname} `}
    >
      {children}
    </h2>
  );
}
