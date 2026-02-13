import type { Movie } from "./movie";
import type { TVShow } from "./tv";

export interface Person {
  id: number;
  name: string;
  original_name: string;
  media_type: "person";
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string | null;
  known_for?: (Movie | TVShow)[];
}

export interface PersonResponse {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

export interface PersonDetails {
  id: number;
  name: string;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  place_of_birth: string | null;
  profile_path: string | null;
  imdb_id: string;
  homepage: string | null;
}
