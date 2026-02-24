import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IContentCardProps {
  itemID: number | string;
  linkHref: string;
  imageSrc: string;
  alt: string;
  width?: number;
  height?: number;
}

const ContentCard = ({
  itemID,
  linkHref,
  imageSrc,
  alt,
  width,
  height = 750,
}: IContentCardProps) => {
  return (
    <Link href={linkHref} className="block h-full w-full">
      {/* Dica: no Tailwind puro geralmente se usa aspect-[2/3] com colchetes */}
      <div className="relative z-20 aspect-[2/3] w-full cursor-pointer overflow-hidden rounded-sm bg-zinc-900 shadow-md shadow-zinc-900 transition-transform duration-300 hover:z-50 hover:scale-105">
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          loading="eager"
        />
      </div>
    </Link>
  );
};

export default ContentCard;
