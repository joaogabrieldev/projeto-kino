"use client";

import Image from "next/image";
import React, { useState } from "react";

import { IPersonCastCredit } from "@/assets/types/person";
import LoadingPoster from "@/pieces/LoadingPoster/LoadingPoster";
import { defaultSelection } from "@/utils/defaults";
import { onest } from "@/utils/fonts";
import CastCarousel from "@/widgets/CastCarousel/CastCarousel";

import KnownForCarousel from "../KnowForCarousel/KnowForCarousel";

interface IPersonDetailsHero {
  id: string | number;
  name: string;
  biography: string;
  profileURL: string | null;
  birthday: string | null;
  deathday?: string | null;
  place_of_birth?: string | null;
  known_for_department?: string;
  credits?: IPersonCastCredit[];
}

const PersonDetailsHero = ({
  id,
  name,
  biography,
  profileURL,
  birthday,
  deathday,
  place_of_birth,
  known_for_department,
  credits,
}: IPersonDetailsHero) => {
  const [load, setLoad] = useState(true);

  const birthYear = birthday?.split("-")[0] ?? "";
  const deathYear = deathday?.split("-")[0] ?? "";
  const lifeSpan = deathday ? `${birthYear} - ${deathYear}` : birthYear;

  const formattedBirthday = birthday?.split("-").reverse().join("/") ?? "Data desconhecida";

  const translateDepartment = (dept?: string) => {
    switch (dept) {
      case "Acting":
        return "Atuação";
      case "Directing":
        return "Direção";
      case "Writing":
        return "Roteiro";
      case "Production":
        return "Produção";
      default:
        return dept ?? "Desconhecido";
    }
  };

  return (
    <div className={`mx-auto mt-28 mb-14 flex w-full max-w-7xl flex-row gap-6 ${defaultSelection}`}>
      <div className="relative shrink-0 select-none">
        {load && <LoadingPoster />}
        <Image
          key={id}
          src={profileURL ?? ""}
          alt={name}
          width={342}
          height={513}
          className={`rounded-2xl shadow-md shadow-gray-500 transition-opacity duration-500 dark:shadow-zinc-900 ${load ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setLoad(false)}
          priority
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className={`flex flex-row items-baseline gap-2 ${onest.className}`}>
          <h1 className="text-4xl font-bold text-gray-600 dark:text-white">{name}</h1>
          {lifeSpan && (
            <span className="text-2xl font-light text-zinc-500 dark:text-zinc-400">
              ({lifeSpan})
            </span>
          )}
        </div>

        <div
          className={`mt-2 flex flex-row flex-wrap items-center text-zinc-500 dark:text-zinc-300 ${onest.className}`}
        >
          <span className="font-semibold text-gray-600 dark:text-white">
            {translateDepartment(known_for_department)}
          </span>
          <span className="mx-2 text-zinc-500">•</span>
          <span>Nascimento: {formattedBirthday}</span>

          {place_of_birth && (
            <>
              <span className="mx-2 text-zinc-500">•</span>
              <span>{place_of_birth}</span>
            </>
          )}
        </div>

        <div className="my-6">
          <h2
            className={`${onest.className} mb-2 text-2xl font-semibold text-gray-600 select-none dark:text-white`}
          >
            Biografia
          </h2>
          <p
            className={`max-w-3xl text-[16px] leading-relaxed text-zinc-700 dark:text-zinc-300 ${onest.className}`}
          >
            {biography || `Não temos uma biografia em português para ${name}.`}
          </p>
        </div>

        <div className="mt-12">
          <KnownForCarousel credits={credits ?? []} title={"Conhecido(a) por"} />
        </div>
      </div>
    </div>
  );
};

export default PersonDetailsHero;
