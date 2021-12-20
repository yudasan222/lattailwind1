import React from "react";

export default function ObbjKontak({ image, kontak, value }) {
  return (
    <div className="flex items-start  space-x-5">
      <img src={image} className="object-contain mt-[6px]" />
      <div>
        <p className="text-[14px]] font-sans font-semibold">{kontak}</p>
        <p className="text-[18px]] font-sans font-semibold">{value}</p>
      </div>
    </div>
  );
}
