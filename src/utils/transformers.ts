import { MediaItem } from "@/assets/types";
import { IMovieCreditsResponse, IMovieDetails } from "@/assets/types/movie";
import { IMovieResponse } from "@/assets/types/movie";
import { IPersonDetails } from "@/assets/types/person";
import { ITvCreditsResponse, ITVShowDetails, ITVShowResponse } from "@/assets/types/tv";

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
export const selectAsMovie = (data: IMovieResponse): MediaItem[] => {
  return data.results.map((item) => ({
    ...item,
    media_type: "movie" as const,
  }));
};

export const selectAsShow = (data: ITVShowResponse): MediaItem[] => {
  return data.results.map((item) => ({
    ...item,
    media_type: "tv" as const,
  }));
};

export const selectMovieCredits = (data: IMovieCreditsResponse): OrganizedCredits => {
  return {
    id: data.id || 0,
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

export const selectTVShowCredits = (data: ITvCreditsResponse): OrganizedCredits => {
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

export type MediaDetailsItem =
  | (IMovieDetails & {
      media_type: "movie";
      formatted_credits?: OrganizedCredits;
    })
  | (ITVShowDetails & {
      media_type: "tv";
      formatted_credits?: OrganizedCredits;
    });

export const selectMediaDetails = (
  data: IMovieDetails | ITVShowDetails,
  type: "movie" | "tv",
): MediaDetailsItem => {
  if (type === "movie") {
    const movieData = data as IMovieDetails;
    return {
      ...movieData,
      media_type: "movie" as const,
      formatted_credits: movieData.credits ? selectMovieCredits(movieData.credits) : undefined,
    };
  }

  const tvData = data as ITVShowDetails;
  return {
    ...tvData,
    media_type: "tv" as const,

    formatted_credits: tvData.aggregate_credits
      ? selectTVShowCredits(tvData.aggregate_credits)
      : undefined,
  };
};

export const selectPersonDetails = (data: IPersonDetails): IPersonDetails => {
  const formattedData = { ...data };

  if (formattedData.combined_credits?.cast) {
    const uniqueCreditsMap = new Map();

    formattedData.combined_credits.cast.forEach((credit) => {
      if (credit.poster_path) {
        if (!uniqueCreditsMap.has(credit.id)) {
          uniqueCreditsMap.set(credit.id, credit);
        }
      }
    });

    const cleanCast = Array.from(uniqueCreditsMap.values());

    cleanCast.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

    formattedData.combined_credits.cast = cleanCast;
  }

  return formattedData;
};
