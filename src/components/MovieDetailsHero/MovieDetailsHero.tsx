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
    <div
      className={`mx-auto mt-28 mb-10 flex w-full max-w-7xl flex-row gap-6 border-2 border-white ${defaultSelection}`}
    >
      <div className="shrink-0 rounded-2xl border-2 border-green-500 select-none">
        {load && <LoadingPoster />}
        <Image
          key={id}
          src={posterURL ?? ""}
          alt={title}
          width={342}
          height={513}
          className="rounded-2xl shadow-md shadow-zinc-900"
          onLoad={() => setLoad(false)}
        />
      </div>
      <div className="min-w-0 flex-1 border-2 border-blue-500">
        <div className={`flex flex-row items-center gap-1 ${onest.className}`}>
          <h1 className={`border-2 border-white text-4xl ${onest.className} font-semibold`}>
            {title}
          </h1>
          <span className="text-2xl">({realease_date})</span>
        </div>
        <div>
          <div>
            <span className={`${onest.className}`}>
              {genres.map((item) => item.name + " ").join("• ")}
            </span>
            <span>&minus; </span>
            <span>{minutesToHours(runtime ?? 0)}</span>
          </div>
        </div>
        <div className="my-4 flex flex-row items-center gap-2 select-none">
          <span className={`${onest.className} font-semibold`}>{vote_average?.toFixed(1)}</span>
          <span>{renderStars((vote_average ?? 0) / 2)}</span>
          <span className={`${onest.className}`}>({vote_count} votos)</span>
        </div>
        {overview && (
          <div className="my-2 border-2 border-white">
            <h2 className={`${onest.className} text-2xl select-none`}>Sinopse</h2>
            <p className={`ml-4 max-w-2xl border-2 border-white text-[16px] ${onest.className}`}>
              {overview}
            </p>
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
