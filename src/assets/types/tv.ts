// src/types/tv.ts
import type { Genre, ProductionCompany } from "./movie";

export interface TVShow {
  id: number;
  name: string; // <--- ATENÇÃO: Série usa 'name', Filme usa 'title'
  original_name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  popularity: number;
  original_language: string;
}

export interface TVShowResponse {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
}

export interface Season {
  id: number;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

export interface Network {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface TVShowDetails extends Omit<TVShow, "genre_ids"> {
  genres: Genre[];
  created_by: Array<{
    id: number;
    name: string;
    profile_path: string | null;
  }>;
  episode_run_time: number[]; // ex: [45, 60] (duração média)
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: Season[]; // Lista de temporadas
  networks: Network[]; // Onde passa (ex: HBO, Netflix)
  status: string;
  tagline: string;
  homepage: string;
}
