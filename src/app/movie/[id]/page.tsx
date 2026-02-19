import React, { use } from "react";

interface IMovieIDPage {
  params: Promise<{
    id: string;
  }>;
}

const MovieIDPage = ({ params }: IMovieIDPage) => {
  const { id } = use(params);

  return <div className="mt-20 text-white">ID do Filme: {id}</div>;
};

export default MovieIDPage;
