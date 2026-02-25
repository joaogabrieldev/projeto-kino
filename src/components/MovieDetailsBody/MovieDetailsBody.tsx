"use client";
import React, { useState } from "react";

import { IMovieResponse } from "@/assets/types/movie";
import { useMovieRecommendations } from "@/hooks/useMovies";
import Loading from "@/pieces/Loading/Loading";
import GridContents from "@/widgets/GridContents/GridContents";

import FilterCard from "../FilterCard/FilterCard";
import RecommendationMovies from "../RecommendationMovies/RecommendationMovies";

interface IMovieDetailsBody {
  id: string | number;
}

const MovieDetailsBody = ({ id }: IMovieDetailsBody) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: recommendations, isLoading } = useMovieRecommendations(id, currentPage);

  console.log("Dados que chegaram da API:", recommendations);

  return (
    <div className="mb-14 flex flex-row gap-4 border-2 border-white px-8">
      <FilterCard
        totalPages={recommendations?.total_pages ?? 1}
        currentPage={currentPage}
        onPageChange={(value) => setCurrentPage(Number(value))}
        pageTitle={"Recomendados"}
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
        recommendations && <RecommendationMovies recommendations={recommendations} />
      )}
    </div>
  );
};

export default MovieDetailsBody;
