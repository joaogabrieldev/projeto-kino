"use client";

import MovieDetailsBody from "@/components/MovieDetailsBody/MovieDetailsBody";
import MovieDetailsHero from "@/components/MovieDetailsHero/MovieDetailsHero";
import ShowDetailsBody from "@/components/ShowDetailsBody/ShowDetailsBody";
import ShowDetailsHero from "@/components/ShowDetailsHero/ShowDetailsHero";
import { getImageURL } from "@/constants/endpoints";
import { useMediaByID } from "@/hooks/useContent";
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
          overview={data.overview ?? "Sem sinopse"}
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
    const posterURL = data.poster_path ? getImageURL(data.poster_path, "original") : null;

    return (
      <>
        <ShowDetailsHero
          key={`${data.id}-${data.name}`}
          id={data.id}
          name={data.name}
          overview={data.overview ?? "Sem sinopse"}
          posterURL={posterURL}
          first_air_date={data.first_air_date ?? ""}
          genres={data.genres ?? []}
          number_of_seasons={data.number_of_seasons}
          number_of_episodes={data.number_of_episodes}
          created_by={data.created_by}
          credits={data.aggregate_credits}
          vote_average={data.vote_average}
          vote_count={data.vote_count}
        />
        <ShowDetailsBody id={id} />
      </>
    );
  }

  return null;
};

export default ContentDetailsPage;
