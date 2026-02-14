import { MediaItem } from "@/assets/types";
import { MovieCreditsResponse } from "@/assets/types/movie";
import { MovieResponse } from "@/assets/types/movie";
import { TvCreditsResponse, TVShowResponse } from "@/assets/types/tv";

export type FormattedCredit = MediaItem & {
  character: string;
  job?: string;
};

export interface OrganizedCredits {
  id: number;
  cast: FormattedCredit[];
  crew: FormattedCredit[];
}

//* Selects para as querys
export const selectAsMovie = (data: MovieResponse): MediaItem[] => {
  return data.results.map((item) => ({
    ...item,
    media_type: "movie" as const,
  }));
};

export const selectAsShow = (data: TVShowResponse): MediaItem[] => {
  return data.results.map((item) => ({
    ...item,
    media_type: "tv" as const,
  }));
};

export const selectMovieCredits = (data: MovieCreditsResponse): OrganizedCredits => {
  return {
    id: data.id,
    //* Elenco
    cast: (data.cast || []).map((item) => ({
      ...item,
      media_type: "person" as const,
      character: item.character || "",
    })) as FormattedCredit[],
    //* Equipe
    crew: (data.crew || []).map((item) => ({
      ...item,
      media_type: "person" as const,
      character: item.job || "Crew",
      job: item.job,
    })) as FormattedCredit[],
  };
};

export const selectTVShowCredits = (data: TvCreditsResponse): OrganizedCredits => {
  const cast = data.cast || [];
  const crew = data.crew || [];

  return {
    //* Elenco
    id: data.id,
    cast: cast.map((person) => ({
      ...person,
      media_type: "person",
      character: person.roles?.[0]?.character || "",
      roles: person.roles,
    })),
    //* Equipe
    crew: crew.map((person) => {
      const mainJob = person.jobs?.[0]?.job || "Crew";
      return {
        ...person,
        media_type: "person",
        character: mainJob,
        job: mainJob,
      };
    }),
  };
};
