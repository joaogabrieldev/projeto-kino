import { Movie } from "./movie";
import { TVShow } from "./tv";

export type MovieItem = Movie & { media_type: "movie" };

export type TVItem = TVShow & { media_type: "tv" };

export type MediaItem = MovieItem | TVItem;

export interface DiscoveryResponse {
  page: number;
  results: MediaItem[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}
export interface GenresResponse {
  genres: Genre[];
}

export interface CastMember {
  id: number;
  name: string;
  original_name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface CrewMember {
  id: number;
  name: string;
  original_name: string;
  profile_path: string | null;
  department: string;
  job: string;
}

export interface CreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}
