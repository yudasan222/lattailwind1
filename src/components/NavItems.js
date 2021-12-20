import React from "react";
import NavNav from "./NavNav";

const NavItems = () => {
  return (
    <div>
      <ul className="flex justify-center space-x-10 ">
        <NavNav href="#profile">Profile</NavNav>
        <NavNav href="#skils">Skils</NavNav>
        <NavNav href="#projects">Projects</NavNav>
        <NavNav href="#contact">Contact</NavNav>
      </ul>
    </div>
  );
};

export default NavItems;
