"use client";

import Image from "next/image";
import React, { Suspense, useState } from "react";

import { IGenre } from "@/assets/types";
import { IMovieCreditsResponse, IProductionCompany } from "@/assets/types/movie";
import LoadingPoster from "@/pieces/LoadingPoster/LoadingPoster";
import { onest } from "@/utils/fonts";
import { minutesToHours } from "@/utils/utilitaries";

interface IMovieDetailsHero {
  title: string;
  overview: string;
  posterURL: string | null;
  realease_date: string;
  genres: Omit<IGenre[], "id">;
  vote_average?: number;
  vote_count?: number;
  credits?: IMovieCreditsResponse;
  production_companies?: IProductionCompany[];
  tagline?: string;
  runtime?: number | null;
}

const MovieDetailsHero = ({
  title,
  overview,
  posterURL,
  genres,
  realease_date,
  credits,
  vote_count,
  vote_average,
  runtime,
  tagline,
}: IMovieDetailsHero) => {
  const [load, setLoad] = useState(true);

  return (
    <div className="mx-auto mt-28 flex w-full max-w-7xl flex-row gap-6 border-2 border-white">
      <div className="shrink-0 rounded-2xl border-2 border-green-500">
        {load && <LoadingPoster />}
        <Image
          src={posterURL ?? ""}
          alt={title}
          width={342}
          height={513}
          className="rounded-2xl"
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
        <div></div>
        <div className="border-2 border-white">
          <h2 className={`${onest.className} text-2xl`}>Sinopse</h2>
          <p className="max-w-2xl border-2 border-white text-lg">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHero;
