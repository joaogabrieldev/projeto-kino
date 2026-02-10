import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/assets/images/KINO.png";
import ModeButton from "@/pieces/ModeButton/ModeButton";

import Nav from "../../components/Nav/Nav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full flex-row items-center justify-center bg-[#8b0000] py-6 shadow-2xl shadow-[#8b0000]/35 select-none">
      <div className="flex w-[20%] border-2 border-blue-500 pl-6">
        <ModeButton />
      </div>
      <div className="flex w-[40%] items-center justify-center border-2 border-blue-500">
        <Link href="/">
          <Image src={logo.src} alt="Kino Logo" width={160} height={160} />
        </Link>
      </div>
      <div className="w-[20%] border-2 border-yellow-500">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
