import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Button2 from "./Button2";

const Hero = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-bottom 2xl:h-[758px] xl:h-[633px] lg:h-[506px] md:h-[500px] ">
        <div className="container mx-auto">
          <div className="flex  items-center pt-[61px] pb-[50px]">
            <div className="w-3/12 pl-[150px]">
              <Logo />
            </div>

            <div className="w-6/12 ">
              <NavItems />
            </div>

            <div className="w-3/12 pl-[60px]">
              <Button2 variant={"outlineyellow"} href={"#contact"}>
                Kontak
              </Button2>
            </div>
          </div>

          <div className="text-center  ">
            <h1 className="text-[30px] font-semibold font-mono text-white w-[895px] xl:mt-[90px] mx-auto lg:w-[600px] lg:mt-2">
              Saya seorang front-end engineer, Video Editor, dan juga UI
              designer
            </h1>
            <p className="text-white text-opacity-60 font-sans text-[18px] w-[440px] mx-auto mt-[15px]">
              Sejak 16 tahun saya memulai programming,Video Editor dan UI Design
              secara otodidak.
            </p>
            <Button2 className={"mt-[57px] mx-auto"} variant={"yellow"}>
              Pelajari
            </Button2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
