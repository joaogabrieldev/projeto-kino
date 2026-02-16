import { CarouselItem } from "@/components/ui/carousel";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IContentCardProps {
  itemID: number | string;
  linkHref: string;
  imageSrc: string;
  alt: string;
}

const ContentCard = ({ itemID, linkHref, imageSrc, alt }: IContentCardProps) => {
  return (
    <>
      <CarouselItem
        key={itemID}
        className="basis-1/2 pl-2 md:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5"
      >
        <Link href={linkHref}>
          <div className="relative aspect-2/3 cursor-pointer overflow-hidden rounded-sm bg-zinc-900 shadow-md transition-transform duration-300 hover:z-50 hover:scale-105">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </div>
        </Link>
      </CarouselItem>
    </>
  );
};

export default ContentCard;
