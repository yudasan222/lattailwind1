import React from "react";

export default function Button2({ href, variant, className, children }) {
  const addClassname = className ? `${className}` : "";

  const variants = {
    outlineyellow:
      "border border-borderbtn text-borderbtn hover:text-black hover:bg-yellow-500 transition",
    yellow: "bg-borderbtn text-black hover:bg-yellow-500 transition",
  };

  const pickVariant = variants[variant];

  return (
    <>
      <button>
        <a
          href={href}
          className={` text-lg  py-[15px] px-[54px] rounded-full inline-block ${pickVariant} ${addClassname} `}
        >
          {children}
        </a>
      </button>
    </>
  );
}
