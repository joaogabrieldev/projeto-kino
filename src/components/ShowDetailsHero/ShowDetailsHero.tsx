"use client";

import Image from "next/image";
import React, { useState } from "react";

import { IGenre } from "@/assets/types";
import { IMovieCreditsResponse } from "@/assets/types/movie";
import { ITvCreditsResponse } from "@/assets/types/tv";
import LoadingPoster from "@/pieces/LoadingPoster/LoadingPoster";
import { defaultSelection } from "@/utils/defaults";
import { onest } from "@/utils/fonts";
import { OrganizedCredits } from "@/utils/transformers";
import { renderStars } from "@/utils/utilitaries";
import CastCarousel from "@/widgets/CastCarousel/CastCarousel";

interface IShowDetailsHero {
  id: string | number;
  name: string;
  overview: string;
  posterURL: string | null;
  first_air_date: string;
  genres: IGenre[];
  vote_average?: number;
  vote_count?: number;
  credits?: ITvCreditsResponse;
  number_of_seasons?: number;
  number_of_episodes?: number;
  created_by?: { id: number; name: string }[];
}

const ShowDetailsHero = ({
  id,
  name,
  overview,
  posterURL,
  first_air_date,
  genres,
  vote_average,
  vote_count,
  credits,
  number_of_seasons,
  number_of_episodes,
  created_by,
}: IShowDetailsHero) => {
  const [load, setLoad] = useState(true);

  const releaseYear = first_air_date?.split("-")[0] ?? "N/A";

  return (
    <div className={`mx-auto mt-28 mb-14 flex w-full max-w-7xl flex-row gap-6 ${defaultSelection}`}>
      <div className="relative shrink-0 select-none">
        {load && <LoadingPoster />}
        <Image
          key={id}
          src={posterURL ?? ""}
          alt={name}
          width={342}
          height={513}
          className={`rounded-2xl shadow-md shadow-zinc-900 transition-opacity duration-500 ${load ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setLoad(false)}
          priority
        />
      </div>

      <div className="min-w-0 flex-1 text-white">
        <div className={`flex flex-row items-baseline gap-2 ${onest.className}`}>
          <h1 className="text-5xl font-bold">{name}</h1>
          <span className="text-3xl font-light text-zinc-400">({releaseYear})</span>
        </div>

        <div className="mt-3 flex flex-row items-center text-zinc-300">
          <span className={`${onest.className}`}>
            {genres?.map((item) => item.name).join(" • ")}
          </span>
          <span className="mx-2 text-zinc-500">&minus;</span>
          <span>
            {number_of_seasons} Temporada{number_of_seasons !== 1 ? "s" : ""}
          </span>
          <span className="mx-2 text-zinc-500">•</span>
          <span>{number_of_episodes} Episódios</span>
        </div>

        <div className="my-6 flex flex-row items-center gap-2 select-none">
          <span className={`${onest.className} text-xl font-bold text-white`}>
            {vote_average?.toFixed(1)}
          </span>
          <span>{renderStars((vote_average ?? 0) / 2)}</span>
          <span className={`${onest.className} text-zinc-400`}>({vote_count} votos)</span>
        </div>

        {overview && (
          <div className="my-6">
            <h2 className={`${onest.className} mb-2 text-2xl font-semibold select-none`}>
              Sinopse
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">{overview}</p>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-8">
          {created_by && created_by.length > 0 && (
            <div>
              <p className={`text-lg font-bold ${onest.className}`}>
                {created_by.map((creator) => creator.name).join(", ")}
              </p>
              <p className="text-sm text-zinc-400">Criador(es)</p>
            </div>
          )}
        </div>

        <div className="mt-12">
          <CastCarousel cast={credits?.cast} title={"Elenco da Série"} />
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsHero;
