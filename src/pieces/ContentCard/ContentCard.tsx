import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";

interface IContentCardProps {
  itemID: number | string;
  linkHref: string;
  imageSrc: string;
  alt: string;
  width?: number;
  height?: number;
}

const ContentCard = ({ linkHref, imageSrc, alt }: IContentCardProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const hasValidImage = imageSrc && imageSrc.trim() !== "" && !imageSrc.endsWith("null");

  const themeSet = {
    card_shadow: isDark ? "shadow-md shadow-zinc-900" : "shadow-md shadow-transparent",
  };

  return (
    <Link href={linkHref} className="block h-full w-full min-w-[230px]">
      <div
        className={`relative z-20 aspect-[2/3] w-full cursor-pointer overflow-hidden rounded-sm ${themeSet.card_shadow} transition-transform duration-300 hover:z-50 hover:scale-103`}
      >
        {hasValidImage ? (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-800 p-2 text-center">
            <span className="mb-2 text-xs text-zinc-500">Sem pôster</span>
            <span className="line-clamp-3 text-sm font-bold text-zinc-400">{alt}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ContentCard;
