"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

import logo from "@/assets/images/KINO.png";
import HeaderSearchBar from "@/components/HeaderSearchBar/HeaderSearchBar";
import ModeButton from "@/pieces/ModeButton/ModeButton";
import { useHeaderScroll } from "@/stores/useHeaderScrollStore";

import Nav from "../../components/Nav/Nav";

const Header = () => {
  const isScrolled = useHeaderScroll((state) => state.isScrolled);
  const setIsScrolled = useHeaderScroll((state) => state.setIsScrolled);

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
  }, [isHomePage, setIsScrolled]);

  const headerBackground = isHomePage
    ? isScrolled
      ? "bg-[#8b0000] shadow-[#8b0000]/35"
      : "bg-transparent shadow-transparent"
    : "bg-[#8b0000] shadow-[#8b0000]/35";

  const headerLeftLayout = isHomePage ? (
    <HeaderSearchBar isScrolled={isScrolled} />
  ) : (
    <ModeButton height="h-12" width="w-12" iconSize={24} />
  );
  const headerRightLayout = isHomePage ? (
    <div className="flex flex-row items-center gap-8">
      <span className="">
        <Nav />
      </span>
      <span className="">
        <ModeButton height="h-10" width="w-10" iconSize={22} />
      </span>
    </div>
  ) : (
    <>
      <Nav />
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 z-100 flex w-full flex-row items-center justify-center transition-all duration-500 ${
        headerBackground
      } py-4 shadow-2xl select-none`}
    >
      <div className="flex w-[20%] pl-6">{headerLeftLayout}</div>
      <div className="flex w-[40%] items-center justify-center">
        <Link href="/">
          <Image src={logo.src} alt="Kino Logo" width={120} height={120} />
        </Link>
      </div>
      <div className="w-[20%]">{headerRightLayout}</div>
    </header>
  );
};

export default Header;
