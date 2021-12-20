import React from "react";

export default function FieldFull({ label, name }) {
  return (
    <div>
      <form>
        <label htmlFor={name} className="block text-sm font-semibold">
          {label}
        </label>
        <input
          type="text"
          name={name}
          id={name}
          className="bg-transparent border border-[#BFBFE3] px-[5px] py-[3px] w-full mt-[4px]"
        />
      </form>
    </div>
  );
}
