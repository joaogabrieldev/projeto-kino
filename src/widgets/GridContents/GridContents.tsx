import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MediaItem } from "@/assets/types";
import { ENDPOINTS } from "@/constants/endpoints";

interface IGridContentsProps {
  results: MediaItem[];
}

const GridContents = ({ results }: IGridContentsProps) => {
  return (
    <div className="grid gap-x-10 gap-y-8 select-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((item) => {
        if (item.media_type === "person" || !item.poster_path) return null;

        const imageSrc = `${ENDPOINTS.IMAGES.BASE_URL}${ENDPOINTS.IMAGES.SIZES.POSTER}${item.poster_path}`;

        const contentAlt = "name" in item ? item.name : item.title;

        const imageURL = `/${item.media_type}/${item.id}`;

        return (
          <div key={item.id} className="flex flex-col justify-center">
            <Link href={imageURL}>
              <Image
                src={imageSrc}
                alt={contentAlt || "Título"}
                width={250}
                height={750}
                className="rounded-lg object-cover"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GridContents;
