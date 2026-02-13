"use client";

import { useMemo } from "react";

import { MediaItem, MovieItem, TVItem } from "@/assets/types";
import { usePopularMovies } from "@/hooks/useMovies";
import { usePopularTVShow } from "@/hooks/useTVShows";
import { shuffleArray } from "@/utils/utilitaries";

import BackdropSlider from "../BackdropSlider/BackdropSlider";

export default function BackdropImages() {
  const { data: moviesData, isLoading: isLoadingMovies } = usePopularMovies();

  const { data: tvShowData, isLoading: isLoadingTV } = usePopularTVShow();

  const content = useMemo(() => {
    if (!moviesData && !tvShowData) return [];

    const movies = (moviesData || []).map((movie) => ({
      ...movie,
      media_type: "movie" as const,
    })) as MovieItem[];

    const shows = (tvShowData?.results || []).map((tv) => ({
      ...tv,
      media_type: "tv" as const,
    })) as TVItem[];

    const allContent: MediaItem[] = [...movies, ...shows];

    const shuffledContent = shuffleArray(allContent);

    //? Slice aplicado para o componente não ficar tão pesado
    return shuffledContent.slice(0, 25);
  }, [moviesData, tvShowData]);

  const isLoading = isLoadingMovies || isLoadingTV;

  if (isLoading) {
    return <div className="h-[85vh] w-full animate-pulse bg-black" />;
  }

  if (content.length === 0) {
    return <div className="h-[85vh] w-full bg-black" />;
  }

  return <BackdropSlider content={content} />;
}
