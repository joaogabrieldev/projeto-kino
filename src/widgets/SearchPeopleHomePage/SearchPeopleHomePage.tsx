"use client";

import React, { useState } from "react";

import FilterCard from "@/components/FilterCard/FilterCard";
import { useSearchPeople } from "@/hooks/useContent";

import PersonGrid from "../PersonGrid/PersonGrid";

interface ISearchPeopleHomePage {
  query: string;
}

const SearchPeopleHomePage = ({ query }: ISearchPeopleHomePage) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: searchPeopleData } = useSearchPeople(query, currentPage);

  return (
    <div className="mt-12 mb-14 flex justify-center gap-x-4">
      <FilterCard
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={searchPeopleData?.totalPages ?? 1}
        pageTitle={`Filtros`}
        genreList={[]}
        selectedGenres={[]}
        onGenreSelect={() => {}}
        selectedAge={undefined}
        onAgeSelect={() => {}}
        ageRatings={[]}
        isPersonSearch={true}
      />
      <PersonGrid results={searchPeopleData?.results ?? []} />
    </div>
  );
};

export default SearchPeopleHomePage;
