import React from "react";

import { MediaItem } from "@/assets/types";
import MovieDetailsBody from "@/components/MovieDetailsBody/MovieDetailsBody";
import MovieDetailsHero from "@/components/MovieDetailsHero/MovieDetailsHero";
import { ENDPOINTS, getImageURL } from "@/constants/endpoints";
import { TMDBImageSize } from "@/constants/types";
import { useMediaByID } from "@/hooks/useContent";
import { useMovieByID } from "@/hooks/useMovies";
import Loading from "@/pieces/Loading/Loading";

interface IContentDetailsPage {
  type: "movie" | "tv";
  id: string;
}

const ContentDetailsPage = ({ type, id }: IContentDetailsPage) => {
  const { data, isLoading, isError } = useMediaByID(type, id);

  if (isLoading) {
    return (
      <div className="mt-20">
        <Loading />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="mt-32 flex justify-center text-xl text-red-500">
        Ops! Conteúdo não encontrado.
      </div>
    );
  }

  const posterURL = data.poster_path ? getImageURL(data.poster_path, "original") : null;

  if (data.media_type === "movie") {
    const realease_date = data.release_date?.split("-")[0] ?? new Date().getFullYear().toString();

    return (
      <>
        <MovieDetailsHero
          key={`${data.id}-${data.title}`}
          id={data.id}
          title={data.title}
          overview={data.overview ?? ""}
          posterURL={posterURL}
          realease_date={realease_date}
          genres={data.genres ?? []}
          runtime={data.runtime}
          vote_average={data.vote_average}
          vote_count={data.vote_count}
          credits={data.credits}
        />
        <MovieDetailsBody id={id} />
      </>
    );
  }

  if (data.media_type === "tv") {
    return (
      <div className="mx-auto mt-20 max-w-7xl px-4 text-white">
        <h1 className="text-4xl font-bold">📺 Série: {data.name}</h1>
        <p className="mt-2 text-sm text-gray-400">
          Temporadas: {data.number_of_seasons} | Episódios: {data.number_of_episodes}
        </p>
        <p className="mt-4 text-gray-300">{data.overview}</p>
      </div>
    );
  }

  return null;
};

export default ContentDetailsPage;
