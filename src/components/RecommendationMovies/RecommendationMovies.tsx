import React from "react";

import { IMovieResponse } from "@/assets/types/movie";
import { ENDPOINTS, getImageURL } from "@/constants/endpoints";
import ContentCard from "@/pieces/ContentCard/ContentCard";

interface IRecommendationMovies {
  recommendations: IMovieResponse;
}

const RecommendationMovies = ({ recommendations }: IRecommendationMovies) => {
  const movies = recommendations?.results || [];

  if (movies.length === 0) {
    return (
      <div className="flex items-center justify-center py-10 text-zinc-400">
        Nenhuma recomendação encontrada para este título no momento.
      </div>
    );
  }

  return (
    <section className="mt-6 w-full">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
        {movies.map((movie) => {
          const linkHREF = `/movie/${movie.id}`;
          const imageSrc = getImageURL(movie.poster_path, "w500");

          return (
            <ContentCard
              key={movie.id}
              itemID={movie.id}
              linkHref={linkHREF}
              imageSrc={imageSrc ?? ""}
              alt={movie.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecommendationMovies;
