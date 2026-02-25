"use client";

import React, { useState } from "react";

import { useTVShowsRecommendations } from "@/hooks/useTVShows";
import Loading from "@/pieces/Loading/Loading";

import FilterCard from "../FilterCard/FilterCard";
import RecommendationShows from "../RecommendationShows/RecommendationShows";

interface IShowDetailsBody {
  id: string | number;
}

const ShowDetailsBody = ({ id }: IShowDetailsBody) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: recommendations, isLoading } = useTVShowsRecommendations(id, currentPage);

  return (
    <div className="mb-14 flex flex-row gap-4 px-8">
      <FilterCard
        totalPages={recommendations?.total_pages ?? 1}
        currentPage={currentPage}
        onPageChange={(value) => setCurrentPage(Number(value))}
        pageTitle={"Recomendações"}
        genreList={[]}
        selectedGenres={[]}
        onGenreSelect={() => {}}
        selectedAge={undefined}
        onAgeSelect={() => {}}
        ageRatings={[]}
      />

      {isLoading ? (
        <Loading />
      ) : (
        recommendations && <RecommendationShows recommendations={recommendations} />
      )}
    </div>
  );
};

export default ShowDetailsBody;
