"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

import logo from "@/assets/images/KINO.png";
import ModeButton from "@/pieces/ModeButton/ModeButton";

import Nav from "../../components/Nav/Nav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const screenHeight = window.innerHeight;

      const backdropBottomEdge = screenHeight * 0.75 - 80;

      if (window.scrollY > backdropBottomEdge) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const headerBackground = isHomePage
    ? isScrolled
      ? "bg-[#8b0000] shadow-[#8b0000]/35"
      : "bg-transparent shadow-transparent"
    : "bg-[#8b0000] shadow-[#8b0000]/35";

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full flex-row items-center justify-center transition-all duration-500 ${
        headerBackground
      } py-4 shadow-2xl select-none`}
    >
      <div className="flex w-[20%] pl-6">
        <ModeButton />
      </div>
      <div className="flex w-[40%] items-center justify-center">
        <Link href="/">
          <Image src={logo.src} alt="Kino Logo" width={120} height={120} />
        </Link>
      </div>
      <div className="w-[20%]">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
