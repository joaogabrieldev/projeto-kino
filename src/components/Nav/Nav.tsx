import React from "react";
import { navLinks } from "@/assets/data/navLinks";
import NavLink from "@/pieces/NavLink/NavLink";

const Nav = () => {
  return (
    <nav className="right-70 flex list-none justify-center gap-6">
      {navLinks.map((item, index) => {
        return <NavLink key={index} title={item.title} subtitles={item.subtitles} />;
      })}
    </nav>
  );
};

export default Nav;
