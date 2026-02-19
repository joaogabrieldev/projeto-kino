"use client";

import "./NavItem.css";

import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

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
          className="navItem"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {title.toUpperCase()}
        </li>
      </Link>
      <AnimatePresence>
        {dropdownOpen && (
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
