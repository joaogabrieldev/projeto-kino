"use client";

import { useMemo } from "react";

import { usePopularMovies } from "@/hooks/useMovies";
import { usePopularTVShow } from "@/hooks/useTVShows";
import { mixContentTypeArray } from "@/utils/utilitaries";

import BackdropSlider from "../BackdropSlider/BackdropSlider";

export default function BackdropImages() {
  const { data: moviesData, isLoading: isLoadingMovies } = usePopularMovies();

  const { data: tvShowData, isLoading: isLoadingTV } = usePopularTVShow();

  const content = useMemo(() => {
    const moviesWithDescription = moviesData?.filter((movie) => {
      return "overview" in movie && movie.overview && movie.overview.trim() !== "";
    });

    const tvShowsWithDescription = tvShowData?.filter(
      (show) => "overview" in show && show.overview && show.overview.trim() !== "",
    );

    return mixContentTypeArray(moviesWithDescription, tvShowsWithDescription, 25);
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
