import React from "react";

export default function CardSkils({ name, level, image }) {
  return (
    <div className="w-[310px] p-[20px]">
      <div className="flex bg-white drop-shadow-shadowSkils p-6 items-center rounded-[5px] h-[100px] ">
        <img src={image} className="w-[55px]   mr-[20px]" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-[14px] text-[#A3A3A3]">{level}</p>
        </div>
      </div>
    </div>
  );
}
