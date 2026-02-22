"use client";
import React, { useState } from "react";

import FilterCard from "@/components/FilterCard/FilterCard";
import { usePopularPeople } from "@/hooks/useContent";

import GridContents from "../GridContents/GridContents";
import PersonGrid from "../PersonGrid/PersonGrid";

const PersonHomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: personData } = usePopularPeople(currentPage);

  return (
    <div className="mt-12 mb-14 flex justify-center gap-x-4">
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
      <PersonGrid results={personData?.results ?? []} />
    </div>
  );
};

export default PersonHomePage;
