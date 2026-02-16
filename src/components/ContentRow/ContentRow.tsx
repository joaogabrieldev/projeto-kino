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
import ContentCard from "./../../pieces/ContentCard/ContentCard";

interface ContentRowProps {
  title: string;
  data: MediaItem[];
}

const ContentRow = ({ title, data }: ContentRowProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="group relative h-fit space-y-2 border-2 border-white px-4 py-8 md:px-12">
      <div>
        <h2
          className={`font-alteHaasGrotesk z-100 text-2xl font-bold text-white transition-colors select-auto hover:text-gray-500 ${defaultSelection}`}
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
        <CarouselContent className="-ml-2 border-2 border-white py-4 select-none md:-ml-4">
          {data.map((item) => {
            const itemTitle = "title" in item ? item.title : item.name;

            return (
              <ContentCard
                key={item.id}
                itemID={item.id}
                linkHref={item.media_type !== "person" ? `/${item.media_type}/${item.id}` : ""}
                imageSrc={`${ENDPOINTS.IMAGES.BASE_URL}${ENDPOINTS.IMAGES.SIZES.POSTER}${item.media_type !== "person" ? item.poster_path : null}`}
                alt={itemTitle}
              />
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
