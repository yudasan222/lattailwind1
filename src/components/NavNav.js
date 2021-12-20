import React from "react";

export default function NavNav({ href, children }) {
  return (
    <>
      <li>
        <a
          href={href}
          className="text-white text-lg text-opacity-60 hover:text-opacity-100 transition"
        >
          <text className="val"> {children} </text>
        </a>
      </li>
    </>
  );
}
