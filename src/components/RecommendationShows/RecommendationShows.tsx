"use client";
import React from "react";

import { ITVShowResponse } from "@/assets/types/tv";
import { ENDPOINTS, getImageURL } from "@/constants/endpoints";
import ContentCard from "@/pieces/ContentCard/ContentCard";

interface IRecommendationShows {
  recommendations: ITVShowResponse;
}

const RecommendationShows = ({ recommendations }: IRecommendationShows) => {
  const shows = recommendations?.results || [];

  if (shows.length === 0) {
    return (
      <div className="flex w-full items-center justify-center py-10 text-[#8b0000] select-none dark:text-zinc-400">
        Nenhuma recomendação encontrada para este título no momento.
      </div>
    );
  }

  return (
    <section className="mt-6 w-full">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
        {shows.map((show) => {
          const linkHREF = `/tv/${show.id}`;
          const imageSrc = getImageURL(show.poster_path, "w500");

          return (
            <ContentCard
              key={show.id}
              itemID={show.id}
              linkHref={linkHREF}
              imageSrc={imageSrc ?? ""}
              alt={show.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecommendationShows;
