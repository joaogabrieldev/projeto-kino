"use client";

import Image from "next/image";
import React, { Suspense, useState } from "react";

import { IGenre } from "@/assets/types";
import { IMovieCreditsResponse, IProductionCompany } from "@/assets/types/movie";
import LoadingPoster from "@/pieces/LoadingPoster/LoadingPoster";
import { defaultSelection } from "@/utils/defaults";
import { onest } from "@/utils/fonts";
import { minutesToHours, renderStars } from "@/utils/utilitaries";
import CastCarousel from "@/widgets/CastCarousel/CastCarousel";

interface IMovieDetailsHero {
  id: string | number;
  title: string;
  overview: string;
  posterURL: string | null;
  realease_date: string;
  genres: Omit<IGenre[], "id">;
  vote_average?: number;
  vote_count?: number;
  credits?: IMovieCreditsResponse;
  production_companies?: IProductionCompany[];

  runtime?: number | null;
}

const MovieDetailsHero = ({
  id,
  title,
  overview,
  posterURL,
  genres,
  realease_date,
  credits,
  vote_count,
  vote_average,
  runtime,
}: IMovieDetailsHero) => {
  const [load, setLoad] = useState(true);

  const directors = credits?.crew?.filter((person) => person.job === "Director");

  const writers = credits?.crew?.filter(
    (person) => person.job === "Screenplay" || person.job === "Writer",
  );

  return (
    <div className={`mx-auto mt-28 mb-10 flex w-full max-w-7xl flex-row gap-6 ${defaultSelection}`}>
      <div className="shrink-0 rounded-2xl select-none">
        {load && <LoadingPoster />}
        <Image
          key={id}
          src={posterURL ?? ""}
          alt={title}
          width={342}
          height={513}
          className={`rounded-2xl shadow-md shadow-zinc-900 transition-opacity duration-500 ${load ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setLoad(false)}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className={`flex flex-row items-center gap-1 ${onest.className}`}>
          <h1 className={`text-4xl ${onest.className} font-bold`}>{title}</h1>
          <span className="text-2xl text-zinc-400">({realease_date})</span>
        </div>
        <div className="text-zinc-300">
          <span className={`${onest.className}`}>
            {genres.map((item) => item.name + " ").join("• ")}
          </span>
          <span>&minus; </span>
          <span className={`${onest.className}`}>{minutesToHours(runtime ?? 0)}</span>
        </div>
        <div className="my-4 flex flex-row items-center gap-2 select-none">
          <span className={`${onest.className} font-semibold`}>{vote_average?.toFixed(1)}</span>
          <span>{renderStars((vote_average ?? 0) / 2)}</span>
          <span className={`${onest.className} text-zinc-400`}>({vote_count} votos)</span>
        </div>
        {overview && (
          <div className="my-2">
            <h2 className={`${onest.className} text-2xl font-semibold select-none`}>Sinopse</h2>
            <p className={`max-w-2xl text-[16px] text-zinc-300 ${onest.className}`}>{overview}</p>
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-8">
          {directors && directors.length > 0 && (
            <div>
              <p className={`text-lg font-bold ${onest.className}`}>
                {directors.map((d) => d.name).join(", ")}
              </p>
              <p className="text-sm text-zinc-400">Direção</p>
            </div>
          )}

          {writers && writers.length > 0 && (
            <div>
              <p className={`text-lg font-bold ${onest.className}`}>
                {writers.map((writter) => writter.name).join(", ")}
              </p>
              <p className="text-sm text-zinc-400">Roteiro</p>
            </div>
          )}
        </div>
        <div className="mt-12">
          <CastCarousel cast={credits?.cast} title={"Elenco do Filme"} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHero;
