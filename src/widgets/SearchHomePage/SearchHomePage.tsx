"use client";

import React, { useState } from "react";

import FilterCard from "@/components/FilterCard/FilterCard";
import { useSearchMedia } from "@/hooks/useContent";
import GridContents from "@/widgets/GridContents/GridContents";

interface ISearchHomePage {
  query: string;
}

const SearchHomePage = ({ query }: ISearchHomePage) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: searchData } = useSearchMedia(query, currentPage);

  return (
    <div className="mt-12 mb-14 flex justify-center gap-x-4">
      <FilterCard
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={searchData?.totalPages ?? 1}
        pageTitle={`Filtros`}
        genreList={[]}
        selectedGenres={[]}
        onGenreSelect={() => {}}
        selectedAge={undefined}
        onAgeSelect={() => {}}
        ageRatings={[]}
      />
      <GridContents results={searchData?.results ?? []} />
    </div>
  );
};

export default SearchHomePage;
