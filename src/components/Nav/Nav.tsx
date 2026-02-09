import React from "react";
import { navLinks } from "@/assets/data/navLinks";
import NavItem from "@/pieces/NavItem/NavItem";

const Nav = () => {
  return (
    <nav className="right-70 flex list-none justify-center gap-6">
      {navLinks.map((item, index) => {
        return <NavItem key={index} title={item.title} subtitles={item.subtitles} />;
      })}
    </nav>
  );
};

export default Nav;
