import type { IMovie } from "./movie";
import type { ITVShow } from "./tv";

export interface IRole {
  credit_id: string;
  character: string;
  episode_count: number;
}

export interface IJob {
  credit_id: string;
  job: string;
  episode_count: number;
}

export interface IPerson {
  id: number;
  name: string;
  original_name?: string;
  media_type?: "person";
  adult?: boolean;
  popularity?: number;
  gender?: number;
  known_for_department?: string;
  profile_path: string | null;
  known_for?: (IMovie | ITVShow)[];
  roles?: IRole[];
}

export interface IPersonCredit {
  id: number;
  media_type: "movie" | "tv";
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  credit_id: string;

  title?: string;
  original_title?: string;
  release_date?: string;

  name?: string;
  original_name?: string;
  first_air_date?: string;
}

export interface IPersonCastCredit extends IPersonCredit {
  character: string;
  episode_count?: number; // Só vem se for série
}

export interface IPersonCrewCredit extends IPersonCredit {
  department: string;
  job: string;
  episode_count?: number;
}

export interface ICombinedCredits {
  cast: IPersonCastCredit[];
  crew: IPersonCrewCredit[];
}

export interface IPersonResponse {
  page: number;
  results: IPerson[];
  total_pages: number;
  total_results: number;
}

export interface IPersonDetails {
  id: number;
  name: string;
  also_known_as?: string[];
  biography?: string;
  birthday: string | null;
  deathday: string | null;
  gender?: number;
  place_of_birth: string | null;
  profile_path: string | null;
  imdb_id?: string;
  homepage: string | null;

  known_for_department: string;
  popularity?: number;
  combined_credits?: ICombinedCredits;
}
