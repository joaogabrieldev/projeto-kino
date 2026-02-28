"use client";
import React, { Suspense, useState } from "react";

import FilterCard from "@/components/FilterCard/FilterCard";
import { usePopularPeople } from "@/hooks/useContent";

import PersonGrid from "../PersonGrid/PersonGrid";

const PersonHomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: personData } = usePopularPeople(currentPage);

  return (
    <div className="mt-12 mb-14 flex justify-center gap-x-4">
      <Suspense
        fallback={
          <div className="h-20 w-full animate-pulse rounded-md bg-gray-200 dark:bg-zinc-800">
            Carregando filtros...
          </div>
        }
      >
        <FilterCard
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={personData?.totalPages ?? 1}
          pageTitle={`Todos os Artistas`}
          genreList={[]}
          selectedGenres={[]}
          onGenreSelect={() => {}}
          selectedAge={undefined}
          onAgeSelect={() => {}}
          ageRatings={[]}
          isPersonSearch
        />
      </Suspense>
      <PersonGrid results={personData?.results ?? []} />
    </div>
  );
};

export default PersonHomePage;
