import React from "react";

export default function Textarea({ name, label }) {
  return (
    <div>
      <form>
        <label htmlFor={name} className="block text-sm font-semibold">
          {label}
        </label>
        <textarea
          name={name}
          id={name}
          className="bg-transparent border border-[#BFBFE3] px-[5px] py-[3px] w-full h-[141px] mt-[4px]"
        />
      </form>
    </div>
  );
}
