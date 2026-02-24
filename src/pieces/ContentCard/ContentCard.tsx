import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CarouselItem } from "@/components/ui/carousel";

interface IContentCardProps {
  itemID: number | string;
  linkHref: string;
  imageSrc: string;
  alt: string;
  isCarousel?: boolean;
  width?: number;
  height?: number;
}

const ContentCard = ({
  itemID,
  linkHref,
  imageSrc,
  alt,
  isCarousel = true,
  width,
  height = 750,
}: IContentCardProps) => {
  const cardContent = (
    <Link href={linkHref} className="block h-full w-full">
      <div className="relative z-20 aspect-2/3 w-full cursor-pointer overflow-hidden rounded-sm bg-zinc-900 shadow-md shadow-zinc-900 transition-transform duration-300 hover:z-50 hover:scale-105">
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

  if (!isCarousel) {
    return cardContent;
  }

  return (
    <CarouselItem
      key={itemID}
      className="basis-1/2 pl-2 md:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5"
    >
      {cardContent}
    </CarouselItem>
  );
};

export default ContentCard;
