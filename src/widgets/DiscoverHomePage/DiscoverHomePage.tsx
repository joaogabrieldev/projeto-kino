"use client";

import Image from "next/image";
import React, { use, useEffect, useMemo, useState } from "react";

import { MediaItem } from "@/assets/types";
import FilterCard from "@/components/FilterCard/FilterCard";
import { ENDPOINTS } from "@/constants/endpoints";
import { GENRES_PT_BR, getGenreId } from "@/constants/genres";
import { SortOption, useDiscoverMedia } from "@/hooks/useContent";
import { onest } from "@/utils/fonts";
import GridContents from "@/widgets/GridContents/GridContents";

interface IDiscoverHomePage {
  type: "movie" | "tv";
  categorySlug?: string;
}

const DiscoverHomePage = ({ type, categorySlug }: IDiscoverHomePage) => {
  //? State de Paginação
  const [currentPage, setCurrentPage] = useState<number>(1);

  //? State de Gêneros
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  //? State de Classificação
  const [selectedAge, setSelectedAge] = useState<string | undefined>(undefined);

  const genresForAPI = useMemo(() => {
    if (selectedGenres.length === 0) return undefined;

    return selectedGenres
      .map((genreName) => getGenreId(genreName))
      .filter((id): id is number => id !== undefined);
  }, [selectedGenres]);

  const pageTitle = type === "movie" ? "Todos os Filmes" : "Todas as Séries";

  const genreList = type === "movie" ? GENRES_PT_BR.MOVIES : GENRES_PT_BR.TV_SHOWS;

  const ageRatings: string[] = ["L", "10", "12", "14", "16", "18"];

  const apiParams = useMemo(() => {
    switch (categorySlug) {
      case "top_rated":
        return { sortBy: "vote_average.desc" as SortOption, voteCountGte: 300 };

      case "now_playing":
      case "upcoming":
        return { sortBy: "primary_release_date.desc" as SortOption, voteCountGte: 50 };

      case "popular":
      default:
        return { sortBy: "popularity.desc" as SortOption, voteCountGte: undefined };
    }
  }, [categorySlug]);

  const { data: allMediaData } = useDiscoverMedia(type, {
    page: currentPage,
    genres: genresForAPI,
    ageRating: selectedAge,
    sortBy: apiParams.sortBy,
    voteCountGte: apiParams.voteCountGte,
  });

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
        selectedAge={selectedAge}
        onAgeSelect={setSelectedAge}
        ageRatings={ageRatings}
      />
      <GridContents results={allMediaData?.results ?? []} />
    </div>
  );
};

export default DiscoverHomePage;
