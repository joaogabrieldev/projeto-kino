"use client";
import React from "react";

import PersonDetailsHero from "@/components/PersonDetailsHero/PersonDetailsHero";
import { getImageURL } from "@/constants/endpoints";
import { usePersonByID } from "@/hooks/useContent"; // Ajuste para o arquivo onde você salvou o hook
import Loading from "@/pieces/Loading/Loading";

interface IPersonPageProps {
  id: string | number;
}

const PersonPage = ({ id }: IPersonPageProps) => {
  const { data, isLoading, isError } = usePersonByID(id);

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
        Ops! Perfil não encontrado.
      </div>
    );
  }

  const profileURL = data.profile_path ? getImageURL(data.profile_path, "original") : null;

  return (
    <>
      <PersonDetailsHero
        key={`${data.id}-${data.name}`}
        id={data.id}
        name={data.name}
        biography={data.biography ?? ""}
        profileURL={profileURL}
        birthday={data.birthday}
        deathday={data.deathday}
        place_of_birth={data.place_of_birth}
        known_for_department={data.known_for_department}
        credits={data.combined_credits?.cast}
      />
    </>
  );
};

export default PersonPage;
