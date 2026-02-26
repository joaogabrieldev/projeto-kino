"use client";

import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { useHeaderScroll } from "@/stores/useHeaderScrollStore";

interface IModeButton {
  width: string;
  height: string;
  iconSize?: number;
}

const ModeButton = ({ width, height, iconSize }: IModeButton) => {
  const [isLight, setIsLight] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isScrolled = useHeaderScroll((state) => state.isScrolled);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isHeaderTransparent = isHomePage && !isScrolled;
  const iconStyle = isHeaderTransparent ? "stroke-white" : "stroke-yellow-500";

  if (!mounted) {
    return (
      <div
        className={`flex ${width} ${height} cursor-pointer items-center justify-center rounded-full border-2 ${isHeaderTransparent ? "border-white" : "border-yellow-500"} transition-colors`}
      />
    );
  }

  const isLightMode = resolvedTheme === "light";

  return (
    <div
      className={`flex ${width} ${height} cursor-pointer items-center justify-center rounded-full border-2 ${isHeaderTransparent ? "border-white" : "border-yellow-500"} transition-colors`}
      onClick={() => setTheme(isLightMode ? "dark" : "light")}
    >
      <div>
        {isLightMode ? (
          <Moon className={`${iconStyle} transition-colors`} width={iconSize} height={iconSize} />
        ) : (
          <Sun className={`${iconStyle} transition-colors`} width={iconSize} height={iconSize} />
        )}
      </div>
    </div>
  );
};

export default ModeButton;
