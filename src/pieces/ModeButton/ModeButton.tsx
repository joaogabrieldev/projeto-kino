"use client";

import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { useHeaderScroll } from "@/stores/useHeaderScrollStore";

interface IModeButton {
  width: string;
  height: string;
  iconSize?: number;
}

const ModeButton = ({ width, height, iconSize }: IModeButton) => {
  const [isLight, setIsLight] = useState(false);

  const isScrolled = useHeaderScroll((state) => state.isScrolled);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const isHeaderTransparent = isHomePage && !isScrolled;
  const iconStyle = isHeaderTransparent ? "stroke-white" : "stroke-yellow-500";

  return (
    <div
      className={`flex ${width} ${height} cursor-pointer items-center justify-center rounded-full border-2 ${isHeaderTransparent ? "border-white" : "border-yellow-500"} transition-colors`}
      onClick={() => setIsLight((prev) => !prev)}
    >
      <div>
        {isLight ? (
          <Moon className={`${iconStyle} transition-colors`} width={iconSize} height={iconSize} />
        ) : (
          <Sun className={`${iconStyle} transition-colors`} width={iconSize} height={iconSize} />
        )}
      </div>
    </div>
  );
};

export default ModeButton;
