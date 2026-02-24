"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MediaItem } from "@/assets/types/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ENDPOINTS } from "@/constants/endpoints";
import { defaultSelection } from "@/utils/defaults";
import { onest } from "@/utils/fonts";

import ContentCard from "./../../pieces/ContentCard/ContentCard";

interface ContentRowProps {
  title: string;
  data: MediaItem[];
}

const ContentRow = ({ title, data }: ContentRowProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="group relative h-fit space-y-2 px-4 py-8 md:px-12">
      <div>
        <h2
          className={`${onest.className} z-100 cursor-default text-2xl font-bold text-white transition-colors select-auto ${defaultSelection}`}
        >
          {title}
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 2,
          loop: true,
        }}
        className=""
      >
        <CarouselContent className="-ml-2 py-4 select-none md:-ml-4">
          {data.map((item, index) => {
            const itemTitle = "title" in item ? item.title : item.name;

            const mediaType = "title" in item ? "movie" : "tv";

            const imageSrc = `${ENDPOINTS.IMAGES.BASE_URL}${ENDPOINTS.IMAGES.SIZES.POSTER}${item.media_type !== "person" ? item.poster_path : null}`;

            const linkHREF = item.media_type !== "person" ? `/${item.media_type}/${item.id}` : "";

            return (
              <CarouselItem
                key={`${item.id}-${mediaType}-${index}`}
                className="basis-1/2 pl-2 md:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5"
              >
                <ContentCard
                  width={500}
                  height={750}
                  itemID={item.id}
                  linkHref={linkHREF}
                  imageSrc={imageSrc}
                  alt={itemTitle}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 z-40 h-full w-12 -translate-x-12 rounded-none border-none bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/80 hover:text-white disabled:hidden">
          <ChevronLeft className="h-40 w-40" />
        </CarouselPrevious>

        <CarouselNext className="absolute top-1/2 right-0 z-40 h-full w-12 translate-x-12 rounded-none border-none bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/80 hover:text-white disabled:hidden">
          <ChevronRight className="h-40 w-40" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default ContentRow;
