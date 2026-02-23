"use client";

import React, { use } from "react";

import { useMovieByID } from "@/hooks/useMovies";
import Loading from "@/pieces/Loading/Loading";
import ContentDetailsPage from "@/widgets/ContentDetailsPage/ContentDetailsPage";

interface IMovieIDPage {
  params: Promise<{
    id: string;
  }>;
}

const MovieIDPage = ({ params }: IMovieIDPage) => {
  const { id } = use(params);

  return (
    <div className="mt-20 text-white">
      <ContentDetailsPage key={id} id={id} type="movie" />
    </div>
  );
};

export default MovieIDPage;
