import type { IGenre, IProductionCompany, IVideoResponse } from "./movie";

export interface ISeason {
  id: number;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

export interface INetwork {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface IAggregateRole {
  credit_id: string;
  character: string;
  episode_count: number;
}

export interface IAggregateJob {
  credit_id: string;
  job: string;
  episode_count: number;
}

export interface ITVShow {
  id: number;
  name: string;
  original_name?: string;
  overview?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average?: number;
  vote_count?: number;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  popularity?: number;
  original_language?: string;
}

export interface IAggregateCastMember {
  id: number;
  name: string;
  original_name: string;
  profile_path: string | null;
  order: number;
  gender?: number;
  popularity?: number;
  known_for_department: string;
  total_episode_count: number;
  roles: IAggregateRole[];
}

export interface IAggregateCrewMember {
  id: number;
  name: string;
  original_name: string;
  profile_path: string | null;
  department: string;
  total_episode_count: number;
  jobs: IAggregateJob[];
}

export interface ITVShowResponse {
  page: number;
  results: ITVShow[];
  total_pages: number;
  total_results: number;
}

export interface ITvCreditsResponse {
  id: number;
  cast: IAggregateCastMember[];
  crew: IAggregateCrewMember[];
}

export interface ITVShowDetails extends Omit<ITVShow, "genre_ids"> {
  genres?: IGenre[];
  created_by?: Array<{
    id: number;
    name: string;
    profile_path: string | null;
  }>;
  episode_run_time?: number[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  seasons?: ISeason[];
  networks?: INetwork[];
  status?: string;
  tagline?: string;
  homepage?: string;
  aggregate_credits?: ITvCreditsResponse;
  recommendations?: ITVShowResponse;
  similar?: ITVShowResponse;
  videos?: IVideoResponse;
}
