"use client";

import Image from "next/image";
import React, { use, useEffect, useMemo, useState } from "react";

import { MediaItem } from "@/assets/types";
import FilterCard from "@/components/FilterCard/FilterCard";
import { ENDPOINTS } from "@/constants/endpoints";
import { GENRES_PT_BR, getGenreId } from "@/constants/genres";
import { useDiscoverMedia } from "@/hooks/useContent";
import { onest } from "@/utils/fonts";
import GridContents from "@/widgets/GridContents/GridContents";

interface IDiscoverHomePage {
  params: Promise<{
    type: "movie" | "tv";
  }>;
}

const DiscoverHomePage = ({ params }: IDiscoverHomePage) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const { type } = use(params);

  const genresForApi = useMemo(() => {
    if (selectedGenres.length === 0) return undefined;

    return selectedGenres
      .map((genreName) => getGenreId(genreName))
      .filter((id): id is number => id !== undefined);
  }, [selectedGenres]);

  const { data: allMediaData } = useDiscoverMedia(type, {
    page: currentPage,
    genres: genresForApi,
  });

  const pageTitle = type === "movie" ? "Todos os Filmes" : "Todas as Séries";

  const genreList = type === "movie" ? GENRES_PT_BR.MOVIES : GENRES_PT_BR.TV_SHOWS;

  return (
    <div className="mt-28 mb-14 flex justify-center gap-x-4">
      {/* <h1 className="text-white">Você está em {type}</h1> */}
      <FilterCard
        genreList={genreList}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={allMediaData?.totalPages ?? 1}
        pageTitle={pageTitle}
        selectedGenres={selectedGenres}
        onGenreSelect={setSelectedGenres}
      />
      <GridContents results={allMediaData?.results ?? []} />
    </div>
  );
};

export default DiscoverHomePage;
