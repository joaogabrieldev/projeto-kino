"use client";

import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { useHeaderScroll } from "@/stores/useHeaderScrollStore";

interface IModeButton {
  width: string;
  height: string;
  iconSize?: number;
}

const ModeButton = ({ width, height, iconSize }: IModeButton) => {
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
  const isDark = resolvedTheme === "dark";

  const borderColor = isHeaderTransparent
    ? "border-[#141414] dark:border-white"
    : "border-[#a10000] dark:border-yellow-500";

  const iconColor = isHeaderTransparent
    ? "stroke-[#141414] dark:stroke-white"
    : "stroke-[#a10000] dark:stroke-yellow-500";

  if (!mounted) {
    return (
      <div
        className={`flex ${width} ${height} cursor-pointer items-center justify-center rounded-full border-2 ${borderColor} transition-colors`}
      />
    );
  }

  return (
    <div
      className={`flex ${width} ${height} cursor-pointer items-center justify-center rounded-full border-2 ${borderColor} transition-colors`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div>
        {!isDark ? (
          <Moon
            className={`${iconColor} transition-colors`}
            width={iconSize}
            strokeWidth={2.5}
            height={iconSize}
          />
        ) : (
          <Sun className={`${iconColor} transition-colors`} width={iconSize} height={iconSize} />
        )}
      </div>
    </div>
  );
};

export default ModeButton;
