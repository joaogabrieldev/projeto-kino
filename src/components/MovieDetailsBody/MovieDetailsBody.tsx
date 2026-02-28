"use client";
import { useState } from "react";

import { useMovieRecommendations } from "@/hooks/useMovies";
import Loading from "@/pieces/Loading/Loading";

import FilterCard from "../FilterCard/FilterCard";
import RecommendationMovies from "../RecommendationMovies/RecommendationMovies";

interface IMovieDetailsBody {
  id: string | number;
}

const MovieDetailsBody = ({ id }: IMovieDetailsBody) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: recommendations, isLoading } = useMovieRecommendations(id, currentPage);

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
        recommendations && <RecommendationMovies recommendations={recommendations} />
      )}
    </div>
  );
};

export default MovieDetailsBody;
