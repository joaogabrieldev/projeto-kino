import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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

interface MovieRowProps {
  title: string;
  data: MediaItem[];
}

const MovieRow = ({ title, data }: MovieRowProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="group relative mb-8 space-y-2 px-4 md:px-12">
      <h2 className="text-lg font-semibold text-white transition-colors hover:text-gray-500">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 2,
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 py-4 md:-ml-4">
          {data.map((item) => {
            const itemTitle = "title" in item ? item.title : item.name;

            return (
              <CarouselItem
                key={item.id}
                className="basis-1/2 pl-2 md:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="relative aspect-video cursor-pointer overflow-hidden rounded-sm bg-zinc-900 shadow-md transition-transform duration-300 hover:z-50 hover:scale-110">
                  <Image
                    src={`${ENDPOINTS.IMAGES.BASE_URL}${ENDPOINTS.IMAGES.SIZES.POSTER}${item.poster_path || item.backdrop_path}`}
                    alt={itemTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-0 left-0 z-40 h-full w-12 translate-x-0 rounded-none border-none bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/80 hover:text-white disabled:hidden">
          <ChevronLeft className="h-8 w-8" />
        </CarouselPrevious>
      </Carousel>
      <CarouselNext className="absolute top-0 right-0 z-40 h-full w-12 translate-x-0 rounded-none border-none bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/80 hover:text-white disabled:hidden">
        <ChevronRight className="h-8 w-8" />
      </CarouselNext>
    </div>
  );
};

export default MovieRow;
