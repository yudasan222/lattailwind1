import React from "react";
import CardSkils from "./CardSkils";
import SectionTitle from "./SectionTitle";
import SubSec from "./SubSec";

export default function SectionSkils() {
  return (
    <section className="bg-[#F7F7FB] pt-[150px] pb-[150px]">
      <div className="container mx-auto " id="skils">
        <SectionTitle>Skills</SectionTitle>
        <SubSec>Beberapa kemampuan saya.</SubSec>
      </div>
      <div className=" flex place-content-center  mt-16 ">
        <CardSkils
          name={"Javascript"}
          level={"Menengah"}
          image={require("../images/js.png")}
        />
        <CardSkils
          name={"React JS"}
          level={"Pemula"}
          image={require("../images/react.png")}
        />
        <CardSkils
          name={"Flutter"}
          level={"Pemula"}
          image={require("../images/flut.png")}
        />
      </div>
      <div className=" flex place-content-center ">
        <CardSkils
          name={"Tailwind"}
          level={"Pemula"}
          image={require("../images/tail.png")}
        />
        <CardSkils
          name={"Bootstrap"}
          level={"Pemula"}
          image={require("../images/boot.png")}
        />
        <CardSkils
          name={"Figma"}
          level={"Lanjutan"}
          image={require("../images/figma.png")}
        />
      </div>
      <div className=" flex place-content-center ">
        <CardSkils
          name={"Ilustrator"}
          level={"Pemula"}
          image={require("../images/ai.png")}
        />
        <CardSkils
          name={"GIT"}
          level={"Pemula"}
          image={require("../images/git.png")}
        />
        <CardSkils
          name={"Premier"}
          level={"Lanjutan"}
          image={require("../images/pr.png")}
        />
      </div>
    </section>
  );
}
