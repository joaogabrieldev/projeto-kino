import React from "react";
import logo from "@/assets/images/KINO.png";
import Nav from "../../components/Nav/Nav";
import ModeButton from "@/pieces/ModeButton/ModeButton";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center border bg-[#8b0000] py-6 select-none">
      <div className="flex w-[20%] border-2 border-blue-500 pl-6">
        <ModeButton />
      </div>
      <div className="flex w-[40%] items-center justify-center border-2 border-blue-500">
        <a href="/">
          <img src={logo.src} alt="Kino Logo" width={160} />
        </a>
      </div>
      <div className="w-[20%] border-2 border-yellow-500">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
