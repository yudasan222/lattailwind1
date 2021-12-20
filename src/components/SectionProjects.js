import React from "react";
import CardProject from "./CardProject";
import SectionTitle from "./SectionTitle";
import SubSec from "./SubSec";

const SectionProjects = () => {
  return (
    <>
      <section>
        <div className="container mx-auto pt-[1px]">
          <div id="projects">
            <SectionTitle className={"mt-[132px]"}>Projects</SectionTitle>
            <SubSec>Bebarap Hasil Projek Saya</SubSec>
          </div>
        </div>

        <div className="flex place-content-center  mt-[84px]">
          <CardProject
            image={require("../images/cripzy.png")}
            judul={"Cripzy"}
            sub={"Trading App"}
          ></CardProject>
          <CardProject
            image={require("../images/yummy.png")}
            judul={"Yummy"}
            sub={"Delivery Food App"}
          ></CardProject>
        </div>
        <div className="flex place-content-center  mt-[40px]``">
          <CardProject
            image={require("../images/yummy2.png")}
            judul={"Yummy"}
            sub={"Delivery Food App"}
          ></CardProject>
          <CardProject
            image={require("../images/cripzy.png")}
            judul={"Crypzy"}
            sub={"Trading App"}
          ></CardProject>
        </div>
      </section>
    </>
  );
};

export default SectionProjects;
