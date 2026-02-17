import React, { use } from "react";

interface IMoviePathProps {
  params: Promise<{
    slug: string;
  }>;
}

const SlugMoviePage = ({ params }: IMoviePathProps) => {
  const { slug } = use(params);

  return <div className="mt-20 text-white">Você está em {slug}</div>;
};

export default SlugMoviePage;
