import React from "react";

export default function CardProject({ image, judul, sub }) {
  return (
    <div className="container mb-[50px] w-[500px]  text-center ">
      <img src={image} className="h-[339.36px]  mx-auto" />
      <p className="text-[20px] font-semibold font-sans mt-[19px]">{judul}</p>
      <p className="font-sans text-[#808080] text-[18px] ">{sub}</p>
    </div>
  );
}
