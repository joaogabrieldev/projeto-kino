"use client";

import { useEffect, useMemo, useState } from "react";

import { usePopularMovies } from "@/hooks/useMovies";
import { usePopularTVShow } from "@/hooks/useTVShows";
import { mixContentTypeArray } from "@/utils/utilitaries";

import BackdropSlider from "../BackdropSlider/BackdropSlider";

export default function BackdropImages() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
     
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const { data: moviesData, isLoading: isLoadingMovies } = usePopularMovies();

  const { data: tvShowData, isLoading: isLoadingTV } = usePopularTVShow();

  const content = useMemo(() => {
    const moviesWithDescription = moviesData?.filter((movie) => {
      return "overview" in movie && movie.overview && movie.overview.trim() !== "";
    });

    const tvShowsWithDescription = tvShowData?.filter(
      (show) => "overview" in show && show.overview && show.overview.trim() !== "",
    );

    return mixContentTypeArray(25, moviesWithDescription, tvShowsWithDescription);
  }, [moviesData, tvShowData]);

  const isLoading = isLoadingMovies || isLoadingTV;

  if (!isMounted || isLoading) {
    return <div className="h-[85vh] w-full animate-pulse bg-black" />;
  }

  if (!content || content.length === 0) {
    return <div className="h-[85vh] w-full bg-black" />;
  }

  return <BackdropSlider content={content} />;
}
