"use client";

import "./NavItem.css";

import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { useHeaderScroll } from "@/stores/useHeaderScrollStore";
import { useTheme } from "next-themes";

type Subtitles = {
  title: string;
  slug: string;
};

interface IProps {
  title: string;
  subtitles?: Subtitles[];
  titleHREF: string;
}

const NavItem = ({ title, subtitles, titleHREF }: IProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isScrolled = useHeaderScroll((state) => state.isScrolled);
  const pathname = usePathname();
  const { theme } = useTheme();

  const isHomePage = pathname === "/";
  const isHeaderTransparent = isHomePage && !isScrolled;
  const isDark = theme === "dark";

  const hasSubtitles = subtitles && subtitles.length > 0;

  const navItemStyle = isHeaderTransparent
    ? "text-[#141414] hover:text-gray-800 dark:text-white dark:hover:text-gray-200"
    : "text-[#a10000] hover:text-[#870000] dark:text-[#c5a059] dark:hover:text-[#d4af37]";

  const { refs, floatingStyles } = useFloating({
    open: dropdownOpen,
    onOpenChange: setDropdownOpen,
    placement: "bottom-end",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        crossAxis: 60,
        mainAxis: 2,
      }),
      flip(),
      shift({ padding: 10 }),
    ],
  });
  return (
    <>
      <Link href={titleHREF}>
        <li
          ref={refs.setReference}
          className={`navItem ${navItemStyle}`}
          onMouseEnter={() => {
            if (hasSubtitles) setDropdownOpen(true);
          }}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {title.toUpperCase()}
        </li>
      </Link>
      <AnimatePresence>
        {dropdownOpen && hasSubtitles && (
          <motion.div
            ref={refs.setFloating}
            style={floatingStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="dropdown-container"
          >
            <ul className="dropdown-list">
              {subtitles?.map((item, index) => {
                return (
                  <li key={index} className="dropdown-item">
                    <a href={item.slug}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavItem;
