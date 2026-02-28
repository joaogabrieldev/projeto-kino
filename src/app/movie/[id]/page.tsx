"use client";

import { use } from "react";

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
